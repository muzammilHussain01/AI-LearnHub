const express = require("express");
const cors = require("cors");
const mainRoutes = require("./src/routes/mainRoutes");
const swaggerUi = require("swagger-ui-express");
const YML = require("yamljs");
const swaggerDocument = YML.load("./src/swagger/swagger.yml")
const functions = require("firebase-functions");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", mainRoutes);
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocument))
exports.api = functions.https.onRequest(app);

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running at port no. ${PORT}`);
// });
