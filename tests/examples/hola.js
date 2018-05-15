var webdriver = require('selenium-webdriver'), driver;
 
driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'firefox',
    'platform': 'VISTA',
    'version': 'latest',
    'client_key': process.env.TESTINGBOT_KEY,
    'client_secret': process.env.TESTINGBOT_SECRET,
    'name': (process.env.TRAVIS_JOB_ID ? ("Travis Build " + process.env.TRAVIS_JOB_ID) : "Simple Test")
  }).
  usingServer("https://hola1234:adios1234" +
              "@hub.testingbot.com/wd/hub").
  build();
 
driver.get('https://www.google.com');
 
driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});
 
driver.quit();
