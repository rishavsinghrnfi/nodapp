module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
  const addhar = require("../controllers/addhar.controller.js");
  const user = require("../controllers/users.controller.js");
  const controller = require("../controllers/file.controller");
  // Create a new Customer
  app.post("/api/customers", customers.create);

  // Retrieve all Customers
  app.get("/api/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/api/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/api/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/api/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/api/customers", customers.deleteAll);

// Create a new Addhar Verification
  app.post("/api/addhar_send", addhar.create);

  app.post("/api/addhar_otp_send", addhar.initiateaadhaar);

  app.post("/api/verify_aadhar", addhar.verifyaadhar);


  app.post("/api/add_user", user.create);


  app.post("/api/upload", controller.upload);
  app.get("/api/files", controller.getListFiles);
  app.get("/api/files/:name", controller.download);
};
