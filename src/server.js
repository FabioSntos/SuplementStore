const app = require("./app");
const connection = require("./config/connection");

const conect = async () => {
  try {
    await connection.authenticate();
    console.log("db on");
  } catch (error) {
    console.log(error);
  }
};
conect();

app.listen(3333);
