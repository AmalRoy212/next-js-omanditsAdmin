import User from "./usersModel";
import connectToDB from "./utils";

export const fetchUsers = async (q, page) => {

  const regex = new RegExp(q,"i");
  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username : { $regex : regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {count,users};
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
}
