# Compare Frameworks/Libraries

This repo contains some 3 identical frontend applications  written in 3 different FrontEnd libraries.

## TL;DR

 - `npm run install:all`
 - `npm run build`
 - `npm start`
 - `./runtest.sh`
 - Open `./sitespeed-result/${dateTime}/index.html`

## Build

After cloning the repo, in order to build the applications you'll first need to install the dependencies using `npm run install:all`

After installing the dependencies, run `npm run build` in order to build all the applications

## Start
 
 After building, run `npm start` to start the server.
 Each application will be available at `http://localhost:8084/${libraryName}`
 
 ## Performance Test
 
 In order to run the performance test, run `./runtest.sh`
 The test results will be located in `./sitespeed-result/${dateTime}`.
 Open the `index.html` file there in order to see the results.
 
 
## (More?) Advanced use-cases

### Increase load

If you want to increase the load on the pages, got to `test-urls.txt` and change the query parameter `?list-items` to however many items you find appropriate.

From experience, around 100k would take quite a few seconds to load.

### Run a single app

In order to run a single app, I'd recommend running the speedtest.io command on it's own and skipping the `runtest.sh` script.
Replace ${APP_NAME} in `docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io ${APP_NAME} -b chrome` in order to run the test for a single app.

### Test on different browsers

In order to run a single app, I'd recommend running the speedtest.io command on it's own and skipping the `runtest.sh` script.
Replace ${BROWSER} in `docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io ./test-urls.txt -b ${BROWSER}` in order to test on different browsers.
