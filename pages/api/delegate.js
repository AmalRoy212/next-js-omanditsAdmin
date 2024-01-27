"use server"
import Cors from 'cors';
import initMiddleware from '../../app/lib/init-middleware';
import Delegate from '../../app/lib/delegateModel';
import connectToDB from '@/app/lib/utils';
import Nominies from '@/app/lib/nomination';

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

    if(newDelegate){ 
      await newDelegate.save();
    }else{
      return res.status(500).json({ error: 'There is an issue with creating delegate' });
    }    
    
    if( refName, refCompanyName, refJobTitle, refEmail, refPhone ){
      const nominie = new Nominies({refName, refCompanyName, refJobTitle, refEmail, refPhone, refferedBy : name, refferedEmail : email});
      if(nominie){
        await nominie.save();
      }else{
        return res.status(500).json({ error: 'There is an issue with creating delegate nominie' });
      }
    }

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // throw new Error({error : `Failed to create delegate ${error}`});
    // console.error('Error creating delegate:', error);
    return res.status(500).json({ error: 'There is an issue with creating delegate'});
  }

  // revalidatePath('/dashboard/users');
  // redirect('/dashboard/users')
}