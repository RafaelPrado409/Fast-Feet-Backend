import Mail from '../../lib/Mail';

class NewPackageMail {
  get key() {
    return 'NewPackageMail';
  }

  async handle({ data }) {
    const { packages, deliveryman } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova Coleta',
      template: 'pickups',
      context: {
        deliveryman: deliveryman.name,
        product: packages.product,
      },
    });
  }
}

export default new NewPackageMail();
