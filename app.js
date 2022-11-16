const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');
const { engine } = require('express-handlebars')

const PORT = process.env.PORT || 5000;

const posts = require('./routes/posts');

app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

connectDB();

app.get('/', (req, res) => 
    res.render('index')
)
app.get('/about', (req, res) => 
    res.render('about')
)

app.use('/posts', posts);

app.listen(PORT, () => console.log(`Server khoi dong tai post ${PORT}`));