import {randomSuperhero} from 'superheroes';
import express from "express";
const app = express();
const port = 3000;


app.get("/", (req,res)=>{
const a = randomSuperhero();
res.send(`<h1> Behold, I am a ${a}!</h1>`);
});

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});



