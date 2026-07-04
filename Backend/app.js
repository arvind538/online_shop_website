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

app.use(
    cors({
        origin: process.env.FRONTEND_URI,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true, // "withCredentials" cors option nahi hai, sahi naam "credentials" hai
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
