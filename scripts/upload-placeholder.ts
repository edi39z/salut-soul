import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const imagePath = path.join(process.cwd(), 'public/images/test.png');

const uploadPlaceholder = async () => {
  try {
    console.log(`Uploading image from: ${imagePath}`);
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'salut-soul/brosur',
      public_id: 'placeholder_brosur',
      overwrite: true,
    });
    console.log('Successfully uploaded placeholder image.');
    console.log('Cloudinary URL:', result.secure_url);
    
    // Now you can use this URL in your prisma/seed.ts file
  } catch (error) {
    console.error('Error uploading placeholder image:', error);
  }
};

uploadPlaceholder();
