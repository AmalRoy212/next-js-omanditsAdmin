"use server"

import { revalidatePath } from "next/cache";
import User from "./delegateModel";
import connectToDB from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from '@/app/auth'
import Admin from "./adminModel";
import DirectDelegate from "./directDelegates";
import Delegate from "./delegateModel";

export const addUsers = async function (FormData) {
  const { username, email, password, img, phone, address, isAdmin, isActive } = Object.fromEntries(FormData);

  try {

    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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

export const authenticate = async function (FormData) {
  const { username, password } = Object.fromEntries(FormData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    return { error: "wrong crendetials" }
  }
}

export const setAdmin = async function () {

  try {
    await connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);
    const newAdmin = new Admin({
      username: process.env.ADMIN_USERNAME,
      password: hashedPassword,
      img: process.env.ADMIN_IMG,
      email: process.env.ADMIN_EMAIL
    });

    await newAdmin.save();
    return "done"
  } catch (error) {
    throw new Error('failed to create admin')
  }
}

export const registerDirectDelegates = async function (FormData) {
  const { fname, lname, email, job, companyName } = Object.fromEntries(FormData);;

  try {
    await connectToDB();
    const newDirectDelegate = new DirectDelegate({
      firstName: fname,
      lastName: lname,
      email,
      JobTitle: job,
      companyName
    })

    await newDirectDelegate.save();

    return newDirectDelegate;
  } catch (error) {
    throw new Error(`Failed to create delegate ${error}`);
  }
}

export const updateCheckIns = async function (email) {
  let result = {
    message : "You have already verified"
  }
  try {
    if (!email || typeof email !== 'string') {
      throw new Error('Invalid email parameter');
    }

    await connectToDB();

    const updatedDocuments = await Delegate.find({ email: email });

    if (updatedDocuments[0].checkin) return {result, updatedDocuments}
    
     result = await Delegate.updateOne(
      { email: email },
      { $set: { checkin: true } }
      );
      

      return { result, updatedDocuments };
    } catch (error) {
      throw new Error(`Failed to update check-in status: ${error}`);
    }
};


//util function can update all the documents    
export const updateAllDocs = async function () {
  try {
    await connectToDB(); // Assuming connectToDB is an async function
    await Delegate.updateMany(
      {},
      { $set: { checkin: false } }
    );
    console.log("All documents updated successfully.");
  } catch (error) {
    console.error("Error updating documents:", error);
    // Optionally, you can re-throw the error if you want the caller to handle it
    // throw error;
  }
};