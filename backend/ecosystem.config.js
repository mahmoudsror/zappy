const env = process.env.NODE_ENV;

const devOptions = {
  watch: ['controllers', 'database', 'init','services', 'models', 'routes','test', 'app.js'],
  ignore_watch: ['node_modules']
};

const prodOptions = {
  instances: "max",
  autorestart: true
};

module.exports = {
  apps: [
    {
      name: "Backend",
      script: "./app.js",
      ...(env === 'production' ? prodOptions : devOptions)
    }
  ]
}