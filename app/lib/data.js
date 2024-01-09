import Delegate from "./delegateModel";
import Nominies from "./nomination";
import connectToDB from "./utils";

export const fetchDelegates = async (q, page) => {

  const regex = new RegExp(q,"i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Delegate.find({ name: { $regex: regex } }).count();
    const delegate = await Delegate.find({ name : { $regex : regex }}).sort({ createdAt: -1 }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count,delegate};
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
}

//function fetching all the delegates
/* request get */

export const fetchAllDelegates = async () => {
  try {
    connectToDB();
    const allDelegates = await Delegate.find()
    return allDelegates
  } catch (error) {
    throw new Error(`Failed to fetch all delegates: ${error.message}`);
  }
}

export const fetchInitialData = async () =>{
  try {
    await connectToDB();
    const count = await Delegate.find().count();
    const delegate = await Delegate.find().sort({ createdAt: -1 }).limit(3);
    return { count, delegate }
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
}

export const fetchSingleDelegate = async function(id){
  try {
    await connectToDB();
    const singleDelegate = await Delegate.findById(id);
    return singleDelegate;
  } catch (error) {
    throw new Error(`Failed to fetch single delegate: ${error.message}`);
  }
}

export const fetchNominies = async () => {
  await connectToDB();
  try {
    const nominees = await Nominies.find().sort({ createdAt: -1 });
    return nominees;
  } catch (error) {
    throw new Error(`Failed to fetch nominees: ${error.message}`);
  }
}