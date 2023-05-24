const exprees=require("express")
const cors =require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const mongoose=require("mongoose")

const app=exprees();
app.use(cors())
app.use(bodyParser.json())
dotenv.config();

const RoboticSchema=new mongoose.Schema({
    name:String,
    title:String,
})
const RoboticModel=new mongoose.model("Robotic",RoboticSchema)

//GRUD
app.get('/robotics',async(req,res)=>{
    const robotics=await RoboticModel.find();
    res.status(200).send(robotics)
})

app.get('/robotics/:id',async(req,res)=>{
    const id =req.params.id
    const robotic=await RoboticModel.findById(id);
    res.status().send(robotic)
})
app.post('/robotics',async(req,res)=>{
    const newRobotic=new RoboticModel({
        name:req.body.name,
        title:req.body.title
    })
    await newRobotic.save();
    res.status(201).send(`${newRobotic.name}posted successfully!`)
})

app.delete('/robotic/:id', (req,res)=>{
    const id=req.params.id
    const deleted= RoboticModel.findByIdAndDelete(id).then(()=>{
        res.status(200).send(`${deleted.name} deleted successufully`)
    })
  
})






PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

mongoose.connect('mongodb+srv://aytekin_admin:Admin1234@front.10shrnn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Mongo Db connect');
})
