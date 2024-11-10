// import bcrypt from "bcrypt";

// //this is a function which is used to hash a password
// export const hashPassword = async (password) => {
//   try {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   } 
//    catch (error) {
//     console.log(error);
//   }
// };
// //this is used to compare a password so that user can login successfully

// export const comparePassword = async (password, hashedPassword) => {
//   return bcrypt.compare(password, hashedPassword);
// };

import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};