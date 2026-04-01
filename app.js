const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("🚀 CI/CD Pipeline Working Successfully!");
});

app.get("/health", (req, res) => {
    res.send("OK");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});