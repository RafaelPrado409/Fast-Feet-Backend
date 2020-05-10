import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';
import User from '../app/models/User';
import Recipients from '../app/models/Recipients';
import File from '../app/models/File';
import Deliveryman from '../app/models/Deliveryman';
import Package from '../app/models/Package';
import DeliveryProblems from '../app/models/DeliveryProblems';

const models = [User, Recipients, File, Deliveryman, Package, DeliveryProblems];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
