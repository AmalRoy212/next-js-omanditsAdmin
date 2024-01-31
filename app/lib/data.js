import Delegate from "./delegateModel";
import Nominies from "./nomination";
import connectToDB from "./utils";

//fetchinig all delegate with pagination
export const fetchDelegates = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Delegate.find({ name: { $regex: regex }, type: { $eq: "delegate" } }).count();
    const delegate = await Delegate.find({ name: { $regex: regex }, type: { $eq: "delegate" } })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, delegate };
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
};

//fetching all speakers with pagination
export const fetchSpeakers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Delegate.find({ name: { $regex: regex }, type: { $eq: "speaker" } }).count();
    const speakers = await Delegate.find({ name: { $regex: regex }, type: { $eq: "speaker" } })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, speakers };
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
};


//fetching all sponsors with pagination
export const fetchSponsors = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 7;

  try {
    await connectToDB();
    const count = await Delegate.find({ name: { $regex: regex }, type: { $eq: "sponsor" } }).count();
    const sponsors = await Delegate.find({ name: { $regex: regex }, type: { $eq: "sponsor" } })
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, sponsors };
  } catch (error) {
    throw new Error(`Failed to fetch delegates: ${error.message}`);
  }
};


//function fetching all the delegates
/* request get */

//fetching all delegates for downloadin pdf
export const fetchAllDelegates = async () => {
  try {
    connectToDB();
    const filteredDelegates = await Delegate.find({ type: { $eq: "delegate" } });
    return filteredDelegates
  } catch (error) {
    throw new Error(`Failed to fetch all delegates: ${error.message}`);
  }
};

// fetching all speakers for download pdf 
export const fetchAllSpeakers = async () => {
  try {
    connectToDB();
    const filteredSpekaers = await Delegate.find({ type: { $eq: "speaker" } });
    return filteredSpekaers
  } catch (error) {
    throw new Error(`Failed to fetch all Speakers: ${error.message}`);
  }
};


// fetching all sponsors for download pdf 
export const fetchAllSponsors = async () => {
  try {
    connectToDB();
    const filteredSponsors = await Delegate.find({ type: { $eq: "sponsor" } });
    return filteredSponsors
  } catch (error) {
    throw new Error(`Failed to fetch all Sponsors: ${error.message}`);
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