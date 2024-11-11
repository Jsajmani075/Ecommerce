// // import express from 'express'
// // import dotenv from "dotenv";
// // import morgan from "morgan";
// // import connectDB from "./config/db.js";
// // import authRoutes from "./routes/authRoute.js";
// // import categoryRoutes from "./routes/categoryRoutes.js";
// // import cors from "cors";
// // //configure env
// // dotenv.config();

// // //databse config
// // connectDB();

// // //rest object
// // const app = express();

// // //middelwares
// // app.use(cors());
// // app.use(express.json());
// // app.use(morgan("dev"));

// // //routes
// // app.use("/api/v1/auth", authRoutes);
// // app.use("/api/v1/category", categoryRoutes);

// // //rest api for home page
// // app.get("/", (req, res) => {
// //   res.send("<h1>Welcome to ecommerce app</h1>");
// // });

// // //PORT
// // const PORT = process.env.PORT || 8080;

// // //run listen
// // app.listen(PORT, () => {
// //   console.log(
// //     `Server Running on port ${PORT}`
// //   );
// // });





// import express from "express";
// import colors from "colors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";

// //configure env
// dotenv.config();

// //databse config
// connectDB();

// //rest object
// const app = express();

// //middelwares
// app.use(express.json());
// app.use(morgan("dev"));

// //routes
// app.use("/api/v1/auth", authRoutes);

// //rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecommerce app</h1>");
// });

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
//       .white
//   );
// });



// import express from "express";

// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import cors from "cors";
// import path from "path";
// import {fileURLToPath} from 'url';

// //configure env
// dotenv.config();

// //databse config
// connectDB();
// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);
// //rest object
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// //routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);
// app.use(express.static(path.join(__dirname, "./client/build")));
// //rest api
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running  on port ${PORT}`
//   );
// });


import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Configure environment
dotenv.config();

// Connect to DB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// Serve React app (built version)
const clientPath = path.join(__dirname, './client/build');
app.use(express.static(clientPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Start the server on dynamic port provided by Render
const PORT = process.env.PORT || 3000;  // Render will set the PORT env variable
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

