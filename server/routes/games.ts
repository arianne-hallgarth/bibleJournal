import express from "express"
import * as db from '../db/db' 

const router = express.Router()

router.get(`/`, async (req, res) =>{
    try{
        const games = await db.getAllGames()
        res.json(games) 
    }
    catch (err){
        console.log(err)
        res.status(500).send('Error!')
    }
})