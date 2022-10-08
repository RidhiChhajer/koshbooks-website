const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const session = require('express-session')
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const User = require('./models/User');
const bookRouter = require('./router/bookRouter');
const { authCheck } = require('./middleware/checkAuth')

dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        key: 'user_sid',
        secret: "random1234567890",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000,
        },
    })
)

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie("user_sid");
    }
    next();
});

const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect("/dashboard");
    } else {
        next();
    }
};

app.get("/", sessionChecker, (req, res) => {
    res.redirect("/login");
});

app.use("/book", bookRouter);

app.get("/dashboard", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(__dirname + "/public/dashboard.html");
    } else {
        res.send("<h1>Unauthorized</h1><a href=\"/login\">Login</a>");
    }
})

// route for user logout
app.get("/logout", (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie("user_sid");
        res.redirect("/");
    } else {
        res.redirect("/login");
    }
});

app
    .route("/login")
    .get(sessionChecker, (req, res) => {
        res.sendFile(__dirname + "/public/login.html");
    })
    .post(async (req, res) => {
        var username = req.body.username,
            password = req.body.password;

        try {
            var user = await User.findOne({ username: username }).exec();
            if (!user) {
                res.redirect("/login");
            }
            user.comparePassword(password, (error, match) => {
                if (!match) {
                    res.redirect("/login");
                }
            });
            req.session.user = user;
            res.redirect("/dashboard");
        } catch (error) {
            console.log(error)
        }
    });

app
    .route("/signup")
    .get(sessionChecker, (req, res) => {
        res.sendFile(__dirname + "/public/signup.html");
    })
    .post((req, res) => {
        var user = new User({
            username: req.body.username,
            phone: req.body.phone,
            password: req.body.password,
            role: req.body.phone === process.env.ADMIN_PHONE ? "ADMIN" : "USER",
        });
        user.save((err, docs) => {
            if (err) {
                res.redirect("/signup");
            } else {
                req.session.user = docs;
                res.redirect("/dashboard");
            }
        });
    });

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).send("<h1>Sorry page not found !!</h1>");
});

const CONNECTION_URL = 'mongodb://localhost:27017/koshbooks';
const PORT = process.env.PORT;
mongoose
    .connect(CONNECTION_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        app.listen(PORT || 5000, () => {
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.error('Error starting server and DB');
    })