import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Chamika")
})

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

//chcDmdUBLFb9u6On MongoDB Password
// mongodb+srv://chamikashashipriya3:chcDmdUBLFb9u6On@cluster0.nonya.mongodb.net/