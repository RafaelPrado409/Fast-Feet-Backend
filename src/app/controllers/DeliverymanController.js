import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id, name, email } = await Deliveryman.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async index(req, res) {
    const deliveries = await Deliveryman.findAll();

    return res.json(deliveries);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      oldEmail: Yup.string().email(),
      email: Yup.string()
        .email()
        .when('oldEmail', (oldEmail, field) =>
          oldEmail ? field.required() : field
        ),
      confirmEmail: Yup.string().when('email', (email, field) =>
        email ? field.required().oneOf([Yup.ref('email')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { oldEmail, email } = req.body;

    const delivery = await Deliveryman.findByPk(req.userId);

    if (oldEmail && oldEmail !== delivery.email) {
      const userExists = await Deliveryman.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    const { id, name } = await delivery.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async delete(req, res) {
    const delivery = await Deliveryman.findByPk(req.params.id);

    if (!delivery) {
      return res.status(401).json({ error: 'This user not exist' });
    }

    await delivery.destroy(req.params.id);

    return res.json(delivery);
  }
}

export default new DeliverymanController();
