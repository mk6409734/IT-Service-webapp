require("dotenv").config()

const express = require("express")
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router")
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
 
app.use("/api/auth", authRoute); 
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Create the admin route
app.use("/api/admin", adminRoute)
app.use(errorMiddleware);
// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to world best mern series by Mohit");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("This is about page");
// });

const PORT = 5000;

connectdb().then(() => {
  app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
})})

