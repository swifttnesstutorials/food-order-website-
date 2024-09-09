const{ v2 }=require('cloudinary')
cloudinary.config({ 
    cloud_name: 'dm6o67zru', 
    api_key: '246592999647538', 
    api_secret: 'W8Cr6pR71iakMqFVWrGRYZ6tFiw' // Click 'View API Keys' above to copy your API secret
});

const cloudinaryInstance = v2;

module.exports = { cloudinaryInstance };