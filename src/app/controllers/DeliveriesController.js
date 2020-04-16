import { Op } from 'sequelize';
import Package from '../models/Package';

class Deliveries {
  async index(req, res) {
    const deliveries = await Package.findAll({
      where: {
        deliveryman_id: req.params.id,
        end_date: {
          [Op.not]: null,
        },
      },
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'recipient_id',
        'signature_id',
        'canceled_at',
      ],
    });
    return res.json(deliveries);
  }
}

export default new Deliveries();
