"use server"

import { revalidatePath } from "next/cache";
import User from "./delegateModel";
import connectToDB from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from '@/app/auth'
import Admin from "./adminModel";

export const addUsers = async function (FormData) {
  const { username, email, password, img, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);

  try {
    
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
      username, 
      email, 
      password : hashedPassword, 
      phone, 
      address, 
      isAdmin, 
      isActive
    })

    await newUser.save();

  } catch (error) {
    throw new Error(`Failed to create user ${error}`);
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users')
}

export const authenticate = async function(FormData) {
  const { username, password } = Object.fromEntries(FormData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    return {error : "wrong crendetials"}
  }
}

export const setAdmin = async function (){
  
  try {
    await connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
    const newAdmin = new Admin({
      username: process.env.ADMIN_USERNAME,
      password : hashedPassword,
      img: process.env.ADMIN_IMG,
      email : process.env.ADMIN_EMAIL
    });

    await newAdmin.save();
    return "done"
  } catch (error) {
    throw new Error('failed to create admin')
  }
}