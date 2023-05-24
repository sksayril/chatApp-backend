const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://root:${process.env.DB_PW}@cluster0.bcqibzg.mongodb.net/`, () => {
  console.log('connected to mongodb')
})
