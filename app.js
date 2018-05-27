let createError = require('http-errors');

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

/*let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');*/
let list = require('./routes/crud/list');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*let park = require('./Models/parking')

// modules chargeé de lire du fichier
let fs = require('fs')


// lecture du fichier => les donnee dans la variable data
fs.readFile('fist.json', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    // parsing JSON vers un oarrat of objects
    let array = JSON.parse(data)
    // on boucle sur le tableau
    for (let i = 0; i < array.length; i++) {
        let object = array[i]
        // creation d'un objet parking
        let parking = new park({
            OBJECTID: object['OBJECTID'],
            Name: object['NOM_PARC'],
            type: object['TYPE'],
            ETIQUETTE: object['ETIQUETTE'],
            ZONE_TARIFAIRE: object['ZONE_TARIFAIRE'],
            NB_PLACE_TOTAL: object['NB_PLACE_TOTAL'],
            SHAPE_AREA: object['SHAPE.AREA'],
            SHAPE_LEN: object['SHAPE.LEN'],
            NB_PLACE_VEHIC_ELEC: object['NB_PLACE_VEHIC_ELEC'],
            NB_PLACE_GIGGIC: object['NB_PLACE_GIGGIC'],
            coordinates: object['coordinates']
        })

        // insertion de l'objet creer dans la base
        parking.save()
    }
    console.log('data saved you can stop the app')
    // cool huh :D
});

let tranc = require('./Models/trancon')
let Type = require('type-of-is')
let data = fs.readFileSync('second.json', 'utf-8')
let array = JSON.parse(data)
console.log(array.length)
for (let i = 0; i < array.length; i++) {
    let object = array[i]

    let num = object['NUM_VOIE']
    if (Type(num) !== 'Number') {
        num = 0
    }

    let trancon = new tranc({
        VOIE: object['VOIE'],
        NUM_VOIE: num,
        OBJECTID: object['OBJECTID'],
        EMPLACEMENT: object['EMPLACEMENT'],
        TYPE_STATIONNEMENT: object['TYPE_STATIONNEMENT'],
        ZONE_TARIFICATION: object['ZONE_TARIFICATION'],
        SHAPE_LEN: object['SHAPE.LEN'],
        CAPACITE: object['CAPACITE'],
        ID_TR_SIGU: object['ID_TR_SIGU'],
        NUM_ARRETE: object['NUM_ARRETE'],
        DATE_ARRETE: object['DATE_ARRETE'],
        coordinates: object['coordinates']
    })
    trancon.save()
}
console.log('data saved you can stop the app')*/

/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/


app.use('/', list)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
