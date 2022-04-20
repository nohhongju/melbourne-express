import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import UserModel from './userModel.js'
// import TodoModel from './todoModel.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
// db.user = UserModel(mongoose)
// db.todo = TodoModel(mongoose)

export default db