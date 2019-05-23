const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    database: 'sampledb6', // need to set the database
    username: 'sampleuser3',
    password: 'samplepass3',
    // logging : true 
})
const Vendors = db.define('vendors', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(40),
        allowNull: true
    }
})
const Products = db.define('products', {
    name: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultvalue: 1
    },

})

Vendors.hasMany(Products)
Products.belongsTo(Vendors)

const CartItems = db.define('cartitem', {
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
})


Users.hasMany(CartItems) //creating joins here...
CartItems.belongsTo(Users)

Products.hasMany(CartItems)
CartItems.belongsTo(Products)

module.exports = {
    db,
    Users,
    Products,
    CartItems,
    Vendors
}
// password: 'samplepass4',
// database: 'sampledb4',

// logging: true,