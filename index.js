const express=require("express");    //importing modules

const app=express();    //assigning express function to app


const port=process.env.PORT||1000;   //port 
app.use(express.urlencoded({
    extended:true                        //body parser
}))

app.get("/",(req,res)=>{    //get method for / route
 
res.sendFile(__dirname+"/index.html");
})

app.post("/submit",(req,res)=>{      //post method
    let {weight,height}=req.body;  //obj. destructring
    let num1=Number(weight);
    let num2=Number(height);
    const result=num1/(num2*num2);
    console.log(result);
   res.send(`The result of that is  ${result}`); //ES6
})
app.get("*",(req,res)=>{
    res.redirect("/");      //redirect user to / route
})

app.listen(port,()=>{          //server is listening on a port 10000
    console.log(`Listening on ${port}`);
})
