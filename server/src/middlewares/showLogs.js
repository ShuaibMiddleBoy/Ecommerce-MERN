// middlewares/showLogs.js

let count = 1;

export const showLogs = (req, res, next) => {
  console.log("\n==============================");
  console.log(`------------>  ${count++}`);
  console.log(`\n req.session.passport -------> `);
  console.log(req.session.passport);
  console.log(`\n req.user -------> `);
  console.log(req.user);
  console.log("\n Session and Cookie");
  console.log(`req.session.id -------> ${req.session.id}`);
  console.log(`req.session.cookie -------> `);
  console.log(req.session.cookie);
  console.log("===========================================\n");

  next();
};
