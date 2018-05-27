const express = require('express')
const router = express.Router()
let model = require('./../../Models/parking')

router.get('/', (req, res) => {

    model.find().then((result) => {
        if (!result || result.length === 0) {
            console.log('no data')
        } else {
            res.render('playground/test', {
                parcs: result
            })
        }
    })
})

module.exports = router