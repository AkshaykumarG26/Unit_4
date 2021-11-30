const express = require("express")

const mongoose = require("mongoose")


const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/entertainment", {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
    })
}


const movieSchema = new mongoose.Schema({
    id : {type: Number, required: true, unique: true},
	movie_name : {type: String, required: true},
	movie_genre : {type: String, required: true},
	production_year : {type: Number, required: true},
	budget : {type: Number, required: true}
},{
    versionKey: false,
    timestamps: true
})

const app = express()

app.use(express.json())
const Movie =  mongoose.model("moviedata", movieSchema)

app.get("/movies", async(req, res) => {
    try{
        const movies = await Movie.find({}).lean().exec();
        res.status(201).json({ movies })
    }catch(e){
        res.status(500).send({status: e.message})
    }
})


app.post("/movie", async(req, res) => {
    try{
        const movie = await Movie.create(req.body);
        res.status(201).send(movie)
    }catch(e){
        res.status(500).send({status: e.message})
        // res.send("failed")
    }
})




app.get("/:movieName", async(req, res) => {
    try{
        const movie = await Movie.find({"movie_name": {$eq: req.params.movieName}}).lean().exec();
        res.status(201).send({movie})
    }catch(e){
        res.status(500).send({status: e.message})
    }
})


app.patch("/:movieName", async(req, res) => {
    try{
        const movie = await Movie.findOneAndUpdate({"movie_name": {$set: req.body}}, {new: true}).lean().exec();
        res.status(201).send({movie})
    }catch(e){
        res.status(500).send({status: e.message})
    }
})



app.delete("/:id", async (req, res) => {
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(movie)
    }catch(e){
        res.status(500).send({status: e.message})
    }
})












const start = async () => {
    await connect();
    app.listen(2121, () => {
        console.log("Listening on port 2121")
    }) 
}

start()