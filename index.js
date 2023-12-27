// .config()

// const { config, checkConfig } = require("./functions/config");
// const { create } = require("./functions/create");
// const createModel = require("./functions/createModel");
// const { deleteById } = require("./functions/delete");
// const { get } = require("./functions/get");
// const { update } = require("./functions/update");

// .create()

// .update()

// .delete()

// .read()

// .get()

// .getById()

// async function main() {
//   if (checkConfig) {
// config(
//   "mongodb+srv://nithin:XFiCUhBu3l4qUmlC@superuser.5v3sa8m.mongodb.net/"
// );

// createModel(
//   {
//     name: "String",
//     email: {
//       type: "String",
//       required: "[true, `Please enter the email`]",
//     },
//     password: "String",
//     age: "Number",
//   },
//   "user"
// );
// console.log("Finding data");

// const response = await get();
// console.log(response);

// await create({
//   name: "Nithin",
//   email: "nithinsgayathri@gmail.com",
//   password: "12345",
//   age: 19,
// });

// const updatedUser = await update("658c2b9209e9a8b2e874e2eb", {
//   name: "Nithin Sivakumar",
//   email: "nithinsgayathri@gmail.com",
//   password: "nithin24",
//   age: 19,
// });
// console.log(updatedUser);

// const deleteUser = deleteById("658c2b9209e9a8b2e874e2eb");
// console.log(deleteUser);
//   }

//   return;
// }

// main();

console.log(`Thank you for using superuser`);
