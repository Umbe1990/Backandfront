import 'dotenv/config';
import multer from 'multer';
import { v2 as cloudinary}  from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

  //Configuration
  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,

 })

const storage = new CloudinaryStorage({
    cloudinary: cloudinary, //ultilizza libreria clodinary
    params: {
      folder: 'epicod',
      //format: ['jpg']
    },
  });
   
   const uploadCloudinary = multer({ storage }); 
//console.log(process.env) */
  /* const uploadCloudinary = multer({
    storage: new CloudinaryStorage({
        cloudinary,
        params: {
            folder: 'epicode',
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        },
    }),
});
 */
  export default uploadCloudinary

  




