const express = require('express');
const app = express();
const {db} = require('./dbconfig')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(express.static(__dirname + '/route'))

const routes = {
    vendors : require('./route/vendors'),
    products: require('./route/products'),
    users: require('./route/users'),
    cartitems : require('./route/cartitems')
 }
app.use('/vendors', routes.vendors)
app.use('/products',routes.products )
app.use('/users', routes.users)
app.use('/carts',routes.cartitems)
app.use('/',express.static(__dirname + '/public')
)
// app.use('/add',
// express.static(__dirname + '/public')
// )

db.sync({ alter : true })
.then( ()=> {
    app.listen(6457,()=>{
        console.log('the server is working fine at http://localhost:6457')
    })
})
.catch((err)=>{
    console.log("what is the error" + err)
})

