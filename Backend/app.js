const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./Router/auth-router");
const contactRoute = require("./Router/contact-router");
const serviceRoute = require("./Router/service-router");
const adminRoute = require("./Router/admin-router");
const errorMiddleware = require("./Middlewares/error-middleware");

const app = express();

const allowedOrigins = process.env.FRONTEND_URI;

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// Catch-all route (koi bhi unmatched GET/etc request yahan aayega)
app.use("/", (req, res) => {
    res.status(200).json({ message: "success" });
});

// Error handling middleware hamesha sabse aakhri me lagta hai
app.use(errorMiddleware);

const PORT = process.env.PORT || 4041;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
