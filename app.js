const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();
const appNames = ['svelte', 'react', 'vue'];

app.use(cookieParser());

// app.use('/', (req, res, next) => {
//     let appName = req.originalUrl;
//     appName = appName.substring(1, appName.length-1)
//     console.log(req.cookies);
//     if (appNames.includes(appName)) {
//         res.cookie('appName', appName, { httpOnly: true });
//     }
//     return next();
// });

app.use('/vue', express.static('public/vue-app/dist'));

app.use('/react', express.static('public/react-app/build'));

app.use('/svelte', express.static('public/svelte-app/public'));

app.listen(8084, () => {
    console.log('Server listening on port 8084');
});
