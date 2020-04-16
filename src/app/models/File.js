import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:8888/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    ); // CHAMA O METODO INIT DA CLASSE MODEL

    return this;
  }
}
export default File;
