const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/naukri")
}


const jobSchema = new mongoose.Schema({
    city: {type: String, required: true},
    location: {type: String, required: false},
    notice_period: {type: Number, required: true},
    skills: {type: String, required: true},
    work_from_home: {type: String, required: true},
    num_of_jobs: {type: Number, required: true}
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
    }catch(e){
        res.status(500).send({status: e.message})
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

app.get("/jobs/:work_from_home", async(req, res) => {
    try{
        const jobs = await Job.find({"work_from_home": {$eq: 2}}).lean().exec();
        return res.status(201).send({ jobs })
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})

app.get("/jobs/:notice_period", async(req, res) => {
    try{
        const jobs = await Job.find({"notice_period": {$eq: 2}}).lean().exec();
        return res.status(201).send({ jobs })
    }catch(e){
        return res.status(500).json({ status: e.message })
    }
})












app.listen(4321, async (req, res) => {
    await connect()
    console.log("listening on port 4321")
})