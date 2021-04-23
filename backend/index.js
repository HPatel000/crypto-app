const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/cryptoDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    process.exit(1);
  }
};

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
