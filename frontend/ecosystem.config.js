module.exports = {
  apps: [
    {
      "name": "backoffice",
      "script": "npm",
      "args" : "run preview",
      "instances": 0,
      "exec_mode": 'cluster',
      "env": {
        "COMMON_VARIABLE": 'true',
      },
      "env_production": {
        "NODE_ENV": 'production',
      },
      "autorestart": true,
      "error_file": "./storage/logs/backoffice-err.log",
      "out_file": "./storage/logs/backoffice-out.log"
    },
    
  ],
  deploy: {
    "dev-backoffice": {
      "user": "ec2-user",
      "host": ["13.215.233.219"],
      "ref": "origin/main",
      "repo": "git@gitlab.com:project-h1/backoffice-project-h-vue3.git",
      "path": "/data/source",
      "key": "~/.ssh/PN-Dev.pem",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-setup": "cp .env.production .env",
      "pre-deploy-local": "echo 'This is a local executed command'",
      "post-deploy": "pm2 kill && cp .env.production .env && npm install && pm2 startOrRestart ecosystem.config.js --env production",
      "env": {
        "NODE_ENV": "development"
      },
      "out_file": "/dev/null",
      "error_file": "/dev/null"
    }
  }
}
// ECDSA key fingerprint is SHA256:mmkQ4P/dMoAQz765MnA+zxCcNlf7uZiseXZbcOEkYEA.
// ECDSA key fingerprint is MD5:9e:69:b0:b4:9c:5a:5b:0e:8b:9b:c8:14:ea:8c:4e:ca.