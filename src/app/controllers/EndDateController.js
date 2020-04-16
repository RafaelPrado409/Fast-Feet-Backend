import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import Package from '../models/Package';

class EndDateController {
  async update(req, res) {
    const deliverymanExist = await Deliveryman.findOne({
      where: { id: req.params.id },
    });

    if (!deliverymanExist) {
      return res
        .status(401)
        .json({ error: 'Deliveryman not registered in our database' });
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

    const packages = await Package.findByPk(req.params.package_id);
    const { signature_id } = req.body;

    const pickup = await packages.update({
      end_date: new Date(),
      signature_id,
    });

    return res.json(pickup);
  }
}

export default new EndDateController();
