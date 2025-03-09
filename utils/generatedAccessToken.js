import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const generateAccessToken = async(userId) => {
       const accessToken = await jwt.sign(
        {id : userId}, 
        process.env.ACCESS_TOKEN_SECRET_KEY, 
        { expiresIn: '1h'});

    return accessToken;
    }

export default generateAccessToken;
// Compare this snippet from server/utils/sendEmail.js: