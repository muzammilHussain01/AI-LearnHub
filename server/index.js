const express = require("express");
const cors = require("cors");
const mainRoutes = require("./src/routes/mainRoutes");
const swaggerUi = require("swagger-ui-express");
const YML = require("yamljs");
const swaggerDocument = YML.load("./src/swagger/swagger.yml")

const app = express();

// Use middleware **before** routes
app.use(cors());
app.use(express.json()); // Needed to parse JSON body

// All your app routes
app.use("/api", mainRoutes); // Now all routes are prefixed with /api
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocument))

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
});
