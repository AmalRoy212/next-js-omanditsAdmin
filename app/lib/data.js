import Delegate from "./delegateModel";
import Nominies from "./nomination";
import connectToDB from "./utils";

export const fetchDelegates = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Delegate.find({ name: { $regex: regex } }).count();
    const delegate = await Delegate.find({ name: { $regex: regex } })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, delegate };
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
};

//function fetching all the delegates
/* request get */

export const fetchAllDelegates = async () => {
  try {
    connectToDB();
    const allDelegates = await Delegate.find();
    allDelegates.forEach((delegate) => {
      Object.defineProperty(delegate, 'removed', {
        value: false,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    });
    return allDelegates;
  } catch (error) {
    throw new Error(`Failed to fetch all delegates: ${error.message}`);
  }
};

export const fetchInitialData = async () => {
  try {
    await connectToDB();
    const count = await Delegate.find().count();
    const delegate = await Delegate.find().sort({ createdAt: -1 }).limit(3);
    return { count, delegate };
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
};

export const fetchSingleDelegate = async function (id) {
  try {
    await connectToDB();
    const singleDelegate = await Delegate.findById(id);
    return singleDelegate;
  } catch (error) {
    throw new Error(`Failed to fetch single delegate: ${error.message}`);
  }
};

export const fetchNominies = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Nominies.find({ refName: { $regex: regex } }).count();
    const nominees = await Nominies.find({ refName: { $regex: regex } })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, nominees };
  } catch (error) {
    throw new Error(`Failed to fetch nominees: ${error.message}`);
  }
};

export const fetchAllNominees = async function () {
  try {
    await connectToDB();
    const allNominees = await Nominies.find().sort({ createdAt: -1 });
    return allNominees;
  } catch (error) {
    throw new Error(`Failed to fetch nominees: ${error.message}`);
  }
};


//fetching single refference 

export const fetchSingleNominee = async function(id){
  try {
    await connectToDB();
    const singleNominee = await Nominies.findById(id);
    return singleNominee;
  } catch (error) {
    throw new Error(`Failed to fetch nominee: ${error.message}`);
  }
}