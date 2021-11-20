const express = require('express')
const { sequelize,User } =  require('./models')
const router = require('./index');


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', router)






//merubah struktur model
/*
async function main(){
    await sequelize.sync({force:true})
}

main()
*/

app.listen({port: 5000}, async () =>{
    console.log('Server up on the localhost')
    await sequelize.sync({force:true})
    console.log('Database synced')
})


