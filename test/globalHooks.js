import mongoose from 'mongoose'
// import { MONGODB_CNX_STR } from '../src/config/config.js'

export const mochaHooks = {

  async beforeAll() {
    // await mongoose.connect(MONGODB_CNX_STR)
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-test')
  },

  async afterAll() {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
  }

}
