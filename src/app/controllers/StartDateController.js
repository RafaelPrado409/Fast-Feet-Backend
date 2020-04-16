import { parseISO, format, startOfHour, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Package from '../models/Package';
import Deliveryman from '../models/Deliveryman';

class StartDateController {
  async update(req, res) {
    const deliverymanExist = await Deliveryman.findOne({
      where: { id: req.params.id },
    });

    if (!deliverymanExist) {
      return res
        .status(401)
        .json({ error: 'Deliveryman not registered in our database' });
    }

    const countPickups = await Package.count({
      where: {
        deliveryman_id: req.params.id,
        start_date: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
      },
    }).then(c => {
      return c;
    });

    if (countPickups === 5) {
      return res.status(401).json({
        error: "You can't pickups more than 5 packages!",
      });
    }

    const alreadyfilled = await Package.findOne({
      where: {
        id: req.params.package_id,
        start_date: {
          [Op.not]: null,
        },
      },
    });

    if (alreadyfilled) {
      return res.status(401).json({ error: 'start_date already filled' });
    }

    const packagesAvaiable = await Package.findOne({
      where: {
        id: req.params.package_id,
        end_date: {
          [Op.not]: null,
        },
      },
    });

    if (packagesAvaiable) {
      return res.status(401).json({ error: 'This package was finished!' });
    }

    const packagesInitiated = await Package.findOne({
      where: {
        id: req.params.package_id,
        start_date: null,
        end_date: req.body,
      },
    });
    if (packagesInitiated) {
      return res
        .status(401)
        .json({ error: "You can't fill end_date before start_date" });
    }

    const isCanceled = await Package.findOne({
      where: {
        id: req.params.package_id,
        canceled_at: null,
      },
    });

    if (!isCanceled) {
      return res.status(401).json({ error: 'This Package was canceled' });
    }

    const notPickup = [
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
    ];

    const formatDate = format(
      startOfHour(new Date()),
      "yyyy-MM-dd'T'HH:mm:ssxxx"
    );

    const hourDate = format(parseISO(formatDate), 'HH:mm');

    // eslint-disable-next-line no-restricted-syntax
    for (const time of notPickup) {
      if (hourDate === time) {
        return res
          .status(401)
          .json({ error: "You can't pickups the package out of schedule!" });
      }
    }

    const packages = await Package.findByPk(req.params.package_id);

    const pickup = await packages.update({
      start_date: new Date(),
    });

    return res.json(pickup);
  }
}

export default new StartDateController();
