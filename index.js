const express = require("express");
const cors = require("cors");
const  route  = require("./router/email.router");
const app = express();

app.use('/',route)
app.listen(8090,()=>{
    console.log("listening on port 5678");
})