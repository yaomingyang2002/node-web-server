const express = require ('express');
const hbs = require ('hbs');

const port = process.env.PORT || 3000;//PORT for heroku
let app = express ();

hbs.registerPartials(__dirname + '/views/partials');
app.set ('view engine', 'hbs');
app.use (express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentDate', () => {
    return new Date().getFullYear() + '.' +(new Date().getMonth()+1)

});

app.get ('/', (req, res) => {
    //res.send('<h1> Hello Express! I  can see you! </h1>');
    res.render('home.hbs', {
        pageTitle: "Home Page",
        welcomeMessage: 'Welcome to my website',
    });
});

app.use((req, res, next) => {
    let now  = new Date().toString();
    console.log (`${now}: ${req.method} ${req.url}`);
    next();
});

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
     });
});

app.get('/projects', (req, res)=>{
    res.render('projects.hbs', {
    pageTitle: 'Projects',
    });
});



app.listen(port, () => {
    console.log(`Server is up on ${port}`)
});
