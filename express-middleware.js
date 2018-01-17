const app = require('express')();

app.use(function(req, res, next) {
  console.log('before');
  next();
})

app.get('*', function(req, res, next) {
  console.log('second before');
  next();
})

function fail() {
  return Promise.reject('woops')
}

app.get('/api/', async function(req, res, next) {
  // This middleware throws an error, so Express will go straight to
  // the next error handler
  await fail();
});


app.get('/api/', function(req, res, next) {
  // This middleware is not an error handler (only 3 arguments),
  // Express will skip it because there was an error in the previous
  // middleware
  console.log('this will not print');
});

app.use(function(error, req, res, next) {
  // Any request to this server will get here, and will send an HTTP
  // response with the error message 'woops'
  console.log('last');
  res.json({ message: error.message });
});


app.listen(3000, () => {
  console.log('started!');
} );
