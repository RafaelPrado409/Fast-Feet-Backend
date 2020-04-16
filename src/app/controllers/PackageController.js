import * as Yup from 'yup';
import File from '../models/File';

import Package from '../models/Package';
import Deliveryman from '../models/Deliveryman';
import Notification from '../schema/Notification';
import NewPackageMail from '../jobs/NewPackageMail';
import Queue from '../../lib/Queue';

class PackageController {
  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { product, recipient_id } = req.body;

    const packages = await Package.create({
      product,
      recipient_id,
      deliveryman_id: req.params.id,
    });

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    await Notification.create({
      content: `${packages.product} esta disponivel para a retirada`,
      deliveryman: req.params.id,
    });

    await Queue.add(NewPackageMail.key, {
      packages,
      deliveryman,
    });

    return res.json(packages);
  }

  async index(req, res) {
    const packages = await Package.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        end_date: null,
      },
      order: ['id'],
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'recipient_id',
        'signature_id',
        'canceled_at',
        'initiated',
        'finished',
      ],
      include: {
        model: File,
        as: 'signature',
        attributes: ['id', 'path', 'url'],
      },
    });

    return res.json(packages);
  }

  async delete(req, res) {
    const packages = await Package.findOne({
      where: {
        id: req.params.package_id,
        start_date: null,
      },
    });

    packages.canceled_at = new Date();

    await packages.save();

    return res.json(packages);
  }
}

export default new PackageController();
