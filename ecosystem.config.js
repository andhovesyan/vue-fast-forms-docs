module.exports = {
  apps : [{
    name : 'vue-fast-forms',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'development',
      PORT: 3080,
    },
    env_production : {
      NODE_ENV: 'production',
      PORT: 3080,
    }
  }],

  deploy : {
    production : {
      user : 'andranik',
      host : 'hovesyan.pro',
      ref  : 'origin/master',
      repo : 'git@github.com:andhovesyan/vue-fast-forms-docs.git',
      path : '/home/andranik/vue-fast-forms-docs',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
