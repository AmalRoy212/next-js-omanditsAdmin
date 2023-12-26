import Delegate from "./delegateModel";
import connectToDB from "./utils";

export const fetchDelegates = async (q, page) => {

  const regex = new RegExp(q,"i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Delegate.find({ name: { $regex: regex } }).count();
    const delegate = await Delegate.find({ name : { $regex : regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count,delegate};
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
    
  }
}