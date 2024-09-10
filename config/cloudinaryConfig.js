const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
    cloud_name: 'dm6o67zru',
    api_key: '246592999647538',
    api_secret: 'W8Cr6pR71iakMqFVWrGRYZ6tFiw'
});

module.exports = { cloudinary };
