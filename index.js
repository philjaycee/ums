const express = require('express')
const router = express.Router();
const { User} = require('./models')

router.get('/', async(req,res) => {
    const users = await User.findAll({
        raw:true

    }).catch(error=>console.log(error))
   await res.render('home', {users})
})

router.get('/create', (req,res) => {
    res.render('create')
})

router.get('/edit', (req,res) => {
    res.render('edit')
})

router.get('/card', async(req,res) => {
    await res.render('card')
})

router.post('/create', async(req,res) =>{
    const {name,email,phone}=  req.body

    try{
        const user = await User.create({name,email,phone})
        return res.render('main')
    }
    catch(err){
    console.log(err)
        return res.status(500).json(err)

    }
})


module.exports = router;
