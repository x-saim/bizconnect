// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary')

cloudinary.config({ 
  cloud_name: 'dx3dsadql', 
  api_key: '238841422898165', 
  api_secret: 'n7qQ41Bn-E2N9wt74BXPlswpCVA' 
});

module.exports = { cloudinary }