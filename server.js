const express = require("express");
const app = express();

app.use(express.json());

// Import Routes
const orderRoutes = require("./routes/orderRoutes");

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Use Order Routes
app.use("/orders", orderRoutes);

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
