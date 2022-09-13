const express = require("express");
const sequelize = require("./database");
const EmployeeModel = require("./sequelize_models/employee_model");

const app = express();

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 8000.");
  }
});


//SEQUELIZE AUTH
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been estabelished successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

//SEQUELIZE SYNC
sequelize
  .sync({force: true})
  .then((result) => {
    console.log("Sequelize unforced SYNC ok!")
  })
  .catch((err) => console.log(err));

//ROUTES

//Listar todos
app.get("/employee", async (req, res) => {
  const all_employees = await EmployeeModel.findAll();
  res.json(all_employees)
});

//Criar novo
app.post("/employee", async (req, res) => {
  const employee = await EmployeeModel.create(req.body);
  res.json(employee);
});

//Buscar por Id
app.get("/employee/:id", async (req, res) => {
  const employee = await EmployeeModel.findByPk(req.params.id);
  res.json(employee);
});

//Editar
app.put("/employee/:id", async (req, res) => {
  const employee = await EmployeeModel.findByPk(req.params.id);
  employee = req.body;

  const savedEmployee = await employee.save();
  res.json(savedEmployee);
});

//Deletar
app.delete("/employee/:id", async (req, res) => {
  const employee = await EmployeeModel.findByPk(req.params.id);
  employee.destroy();
});
