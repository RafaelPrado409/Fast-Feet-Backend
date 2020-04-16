import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellatioMail';
  }

  async handle({ data }) {
    const { cancelpackage, deliveryman } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Cancelamento',
      template: 'cancellation',
      context: {
        deliveryman: deliveryman.name,
        product: cancelpackage.product,
      },
    });
  }
}

export default new CancellationMail();
