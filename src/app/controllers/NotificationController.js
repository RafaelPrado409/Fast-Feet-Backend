import Notification from '../schema/Notification';
import Deliveryman from '../models/Deliveryman';

class NotificationController {
  async index(req, res) {
    const deliverymanExist = await Deliveryman.findOne({
      where: { id: req.params.id },
    });
    if (!deliverymanExist) {
      return res
        .status(401)
        .json({ error: 'Deliveryman not registered in our database' });
    }
    const notification = await Notification.find({
      deliveryman: req.params.id,
    })
      .sort({ createdAt: -1 })
      .limit(20);

    return res.json(notification);
  }

  async update(req, res) {
    const notification = await Notification.findOneAndUpdate(
      req.params.notification_id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
