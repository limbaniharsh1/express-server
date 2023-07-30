const express = require("express");
const { connection } = require("./db");
const user = require("./user.schema");
const checking = require("./checking");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await user.find();
  res.send(data);
});

app.post("/",checking, async (req, res) => {
  // console.log(req.body);
  await user.create(req.body);
  res.send("done");
});

app.patch("/update/:id",  async(req, res) => {
  console.log(req.params);
  let { id } = req.params;
  await user.findByIdAndUpdate(id, req.body);
  res.send("updated");
});

app.delete('/delete/:id',async(req,res)=>{
  let{id} = req.params
  await user.findByIdAndDelete(id)
  res.send('delete')
})

app.listen(8090, () => {
  console.log("server running on port 8090");
  connection();
});
