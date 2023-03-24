const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${"user"}:${"SUq8Pdpj84uAciMm"}@cluster0.mhaxquc.mongodb.net/?retryWrites=true&w=majority`, () => {
  console.log('connected to mongodb')
})
