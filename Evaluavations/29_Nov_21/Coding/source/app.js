const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/naukri")
}


const jobSchema = new mongoose.Schema({
    city:{type: String, required: true},
    location_type:{type: String, required: false},
    notice_period:{type: Number, required: true},
    skills:{type: String, required: true},
    num_of_jobs:{type: Number, required: true},
    ratings:{type: Number, required: true}
},{
    versionKey: false,
    timestamps: true
});

const Job = mongoose.model("job", jobSchema);

const app = express()
app.use(express.json())


app.post('/jobs', async(req, res) => {
    try{
        const job = await Job.create(req.body);
        res.status(201).send(job)
        console.log("success")
    }catch(e){
        res.status(500).send({status: e.message})
        console.log("Failed")
    }
})



app.get("/jobs/:city/:skills", async (req, res) => {
    try{
        const jobs = await Job.find({"city": {$eq: req.params.city}, "skills": {$eq: req.params.skills}}).lean().exec();
        return res.status(201).send({ jobs })
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})

app.get("/jobs/:locationType", async(req, res) => {
    try{
        const jobs = await Job.find({"location_type": {$eq: req.params.locationType}}).lean().exec();
        return res.status(201).send({ jobs })
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})

app.get("/jobs/:notice_period", async(req, res) => {
    try{
        const jobs = await Job.find({"notice_period": {$eq: req.params.notice_period}}).lean().exec();
        return res.status(201).send({ jobs })
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})

app.get("/jobs/ratings", async(req, res) => {
    try{
        const jobs = await Job.find().sort({"ratings": -1}).lean().exec();
        return res.status(201).send({ jobs })
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})












app.listen(4321, async (req, res) => {
    await connect()
    console.log("listening on port 4321")
})