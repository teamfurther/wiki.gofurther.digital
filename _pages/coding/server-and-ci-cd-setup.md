---
layout: page
title: "Server & CI/CD Set-up"
permalink: 'coding/server-and-ci-cd-setup'
---
<small class="owner">Owner: Project Lead</small> _Last revision: 12.11.2021_

A guide to installing LEMP Stack (Linux - nginx - MariaDB - PHP) on VPS and setting up a continuous deployment process from a Github repository.

- [Linode](#linode)
- [Firewall](#firewall)
- [nginx](#nginx)
- [DNS](#dns)
- [SSL](#ssl)
- [PHP](#php)
- [MariaDB](#mariadb)
- [PhpMyAdmin](#phpmyadmin)
- [Composer](#composer)
- [GIT](#git)
- [NPM](#npm)
- [Jenkins](#jenkins)
- [Backups](#backups)
{: .toc}

### Linode[#](#linode)
Our preferred VPS provider is Linode. The below pages are taken from their guidelines, but should apply to any VPS provider.

- Getting Started [&#x2197;](https://www.linode.com/docs/getting-started/){:target="_blank"}
- Securing Server [&#x2197;](https://www.linode.com/docs/security/securing-your-server/){:target="_blank"}

### Firewall[#](#firewall)
- ```$``` ```sudo ufw enable```
- ```$``` ```sudo ufw allow ssh```
- ```$``` ```sudo ufw allow http```
- ```$``` ```sudo ufw allow https```

### nginx[#](#nginx)
- ```$``` ```sudo apt-get install nginx```
- Go to ```{ip}``` in your browser, you should see Welcome to nginx! page. If it’s not running, then: ```$``` ```sudo service nginx start```

### DNS[#](#dns)
Our preferred DNS provider is Cloudflare.

- Create an ```A``` record pointing to ```{ip}```
- Configure production and staging websites in ```/etc/nginx/sites-available/```
- Go to ```{url}```

### SSL[#](#ssl)
- ```$``` ```sudo apt-get install software-properties-common```
- ```$``` ```sudo add-apt-repository universe```
- ```$``` ```sudo add-apt-repository ppa:certbot/certbot```
- ```$``` ```sudo apt-get update```
- ```$``` ```sudo apt-get install certbot python3-certbot-nginx```
- ```$``` ```sudo certbot certonly --nginx```
- Test automatic renewal with ```$``` ```sudo certbot renew --dry-run```
- Update nginx configuration in ```/etc/nginx/sites-available/```
- Check if SSL certificate is working
    
### PHP[#](#php)
- ```$``` ```sudo apt-get install software-properties-common```
- ```$``` ```sudo add-apt-repository ppa:ondrej/php```
- ```$``` ```sudo apt-get update```
- ```$``` ```sudo apt-get install php8.0-fpm php8.0-cli php8.0-common```
- ```$``` ```sudo apt-get install php8.0-curl php8.0-gd php8.0-json php8.0-mbstring php8.0-mysql php8.0-xml```
- Check status with ```$``` ```service php8.0-fpm status // check status```. If it's not running, then ```$``` ```sudo service php8.0-fpm start```

### MariaDB[#](#mariadb)
- ```$``` ```sudo apt-get install mariadb-client mariadb-server```
- ```$``` ```sudo mysql_secure_installation```
- If you can't connect to mysql with root user:
    - ```sudo mysql```
    - ```UPDATE mysql.user SET plugin = 'mysql_native_password';```
    - ```FLUSH PRIVILEGES;```
- Create database and user
    - ```mysql -u root -p```
    - ```CREATE DATABASE {database};```
    - ```CREATE USER '{username}'@'localhost' IDENTIFIED BY '{password}';```
    - ```GRANT ALL ON {database}.* TO {username}@`localhost`;```
    - ```FLUSH PRIVILEGES;```
    
### PhpMyAdmin[#](#phpmyadmin)
- ```$``` ```sudo apt-get install phpmyadmin```
- ```$``` ```sudo ln -s /usr/share/phpmyadmin /path/to/project/public/folder```

<small class="note">Never leave it installed for projects in production!</small>

### Composer[#](#composer)
- ```$``` ```curl -sS https://getcomposer.org/installer -o composer-setup.php```
- ```$``` ```sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer```
- Check of correctly installed ```$``` ```composer```
- Install ```unzip```, which is necessary for ```composer install```
    - ```$``` ```sudo apt-get install unzip```
    
### GIT[#](#git)
- Generate SSH key (for ```root``` user)
    - ```$``` ```ssh-keygen -t rsa```
- Set up SSH key in Github
    - ```$``` ```cat ~/.ssh/id_rsa.pub```
    - Copy key to clipboard
    - Go to ```Github repository -> Settings -> Deploy keys``` and add your key
    
- ```$``` ```sudo apt-get install git```

- ```$``` ```mkdir /var/www/{appdomain.com}```
- ```$``` ```sudo chown -R www-data:www-data /var/www/{appdomain.com}```
- ```$``` ```cd /var/www/{appdomain.com}```
- ```$``` ```git clone git@github.com:{repo_url}.git .```

- ```$``` ```mkdir /var/www/{staging.appdomain.com}```
- ```$``` ```sudo chown -R www-data:www-data /var/www/{staging.appdomain.com}```
- ```$``` ```cd /var/www/{staging.appdomain.com}```
- ```$``` ```git clone git@github.com:{repo_url}.git .```
- ```$``` ```git checkout staging // or develop```

### NPM[#](#npm)
- ```$``` ```sudo apt-get install npm```
- ```$``` ```sudo npm install --unsafe-perm```

### Jenkins[#](#jenkins)
- Set up Jenkins pipeline
    - Clone an existing project
    - Change repo
    - Change script file path
    
<div class="thumb">
    <a href="/dist/media/ci-cd-setup-jenkins.png" target="_blank">
        <img src="/dist/media/ci-cd-setup-jenkins.png" alt="" />
    </a>
</div>

- Create script file on __CI/CD server__ in ```/var/lib/jenkins/scripts```
- Make sure the __CI/CD server__ ```jenkins``` user has SSH access to __remote server__
- Add deploy keys to GitHub repo (```Settings / Deploy keys```) for user that handles pull on __remote server__ (usually ```root```, as commands run with ```sudo```)
- Create push webhook on GitHub repo (```Settings / Webhooks```): ```https://ci.gofurther.digital/github-webhook/```
- Create ```jenkins``` user on __remote server__ and give ```sudo``` rights
    - ```$``` ```sudo adduser jenkins```
    - ```$``` ```sudo adduser jenkins sudo```
- Add ```jenkins``` public key to ```~/.ssh/authorized_keys``` on __remote server__
- Add line ```jenkins ALL=(ALL) NOPASSWD: ALL``` to ```/etc/sudoers``` on __remote server__
- Clone GIT repo into ```/var/build``` (and ```/var/www``` if you haven't done o yet)

### Backups[#](#backups)
All the following step shall be done on the __CI/CD server__:

- ```$``` ```mkdir /var/remote_backups/{appdomain.com}```
- ```$``` ```chown jenkins:jenkins /var/remote_backups/{appdomain.com}```
- Edit ```/var/lib/jenkins/scripts/backups.sh``` and add a new block for the project by copying and adapting an existing project