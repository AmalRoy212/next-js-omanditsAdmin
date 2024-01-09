"use server"
import Cors from 'cors';
import initMiddleware from '../../app/lib/init-middleware';
import Delegate from '../../app/lib/delegateModel';
import connectToDB from '@/app/lib/utils';
import Nominies from '@/app/lib/nomination';
// import { createProxyMiddleware } from 'http-proxy-middleware'

const cors = initMiddleware(
    Cors({
      methods: ['POST'], // Add the HTTP methods you need
      origin: '*',
    })
  );
  
/* 
  request : POST
*/
export default async function addDelegate( req, res ){
  console.log("am here in the server");
  await cors(req, res);
  await connectToDB();

  try {
    const {
      name,
      lastName,
      email,
      jobTitle,
      companyName,
      phone,
      industry,
      numOfEmployees,
      lookingFor,
      role,
      country,
      type,
      budget,
      timing,
      refName,
      refCompanyName,
      refJobTitle,
      refEmail,
      refPhone
    } = req.body;

    // Validate that all required fields are present
    if (!name|| !lastName || !email || !jobTitle || !companyName || !phone || !industry || !numOfEmployees || !lookingFor || !role || !country || !type || !budget || !timing) {
      // If any required field is missing, send a 400 Bad Request response
      return res.status(400).json({ error: 'Missing required fields in the request body' });
    }

    const newDelegate = new Delegate({
      name,
      lastName,
      email,
      jobTitle,
      companyName,
      phone,
      industry,
      numOfEmployees,
      lookingFor,
      role,
      country,
      type,
      budget,
      timing
    });

    await newDelegate.save();

    if( refName, refCompanyName, refJobTitle, refEmail, refPhone ){
      const nominie = new Nominies({refName, refCompanyName, refJobTitle, refEmail, refPhone, refferedBy : name, refferedEmail : email});
      await nominie.save();
    }

    res.json({ key: "200 ok success" });
  } catch (error) {
    throw new Error(`Failed to create delegate ${error}`);
  }

  // revalidatePath('/dashboard/users');
  // redirect('/dashboard/users')
}