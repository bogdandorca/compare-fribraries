const express = require('express');
const app = express();

app.use('/vue', express.static('public/vue-app/dist'));

app.use('/react', express.static('public/react-app/build'));

app.use('/svelte', express.static('public/svelte-app/public'));

app.listen(8084, () => {
    console.log('Server listening on port 8084');
});
