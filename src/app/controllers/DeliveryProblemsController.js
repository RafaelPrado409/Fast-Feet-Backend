import * as Yup from 'yup';
import { Op } from 'sequelize';

import Package from '../models/Package';
import DeliveryProblems from '../models/DeliveryProblems';
import CancellationMail from '../jobs/CancellationMail';
import Deliveryman from '../models/Deliveryman';
import Queue from '../../lib/Queue';

class DeliveryProblemsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const packageExist = await Package.findOne({
      where: { id: req.params.package_id },
    });

    if (!packageExist) {
      return res
        .status(401)
        .json({ error: 'Package not registered in our database' });
    }

    const { description } = req.body;

    const delivery_problems = await DeliveryProblems.create({
      id: req.params.package_id,
      description,
    });

    return res.json(delivery_problems);
  }

  async index(req, res) {
    const deliveries = await DeliveryProblems.findAll({
      include: {
        model: Package,
        as: 'package',
        attribute: [
          'id',
          'product',
          'deliveryman_id',
          'recipient_id',
          'signature_id',
          'start_date',
        ],
      },
    });

    return res.json(deliveries);
  }

  async delete(req, res) {
    const packages = await Package.findOne({
      where: {
        id: req.params.package_id,
        start_date: {
          [Op.not]: null,
        },
        end_date: null,
        canceled_at: null,
      },
    });

    packages.canceled_at = new Date();

    await packages.save();

    const cancelpackage = await Package.findByPk(req.params.package_id);

    const deliveryman = await Deliveryman.findByPk(
      cancelpackage.deliveryman_id
    );

    await Queue.add(CancellationMail.key, {
      cancelpackage,
      deliveryman,
    });

    return res.json(packages);
  }
}

export default new DeliveryProblemsController();
