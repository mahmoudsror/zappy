module.exports = function(app) {

  require('./tweetsRoutes.js')(app);
  
  app.get('/',function(req,res) {
    res.send("Welcome to zappy");
  });
  
  app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}
