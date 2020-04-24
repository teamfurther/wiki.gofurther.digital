---
layout: page
title: "Server & CI/CD Set-up"
permalink: 'project-workflow/server-and-ci-cd-setup'
---
<small class="owner">Owner: Project Lead</small>

A guide to installing LEMP Stack (Linux - nginx - MariaDB - PHP) on VPS and setting up a continuous deployment process from a Bitbucket GIT repository.

- [Linode](#server-and-ci-cd-setup-linode)
- [Firewall](#server-and-ci-cd-setup-firewall)
- [nginx](#server-and-ci-cd-setup-nginx)
- [DNS](#server-and-ci-cd-setup-dns)
- [SSL](#server-and-ci-cd-setup-ssl)
- [PHP](#server-and-ci-cd-setup-php)
- [MariaDB](#server-and-ci-cd-setup-mariadb)
- [PhpMyAdmin](#server-and-ci-cd-setup-phpmyadmin)
- [Composer](#server-and-ci-cd-setup-composer)
- [GIT](#server-and-ci-cd-setup-git)
- [NPM](#server-and-ci-cd-setup-npm)
- [Jenkins](#server-and-ci-cd-setup-jenkins)
{: .toc}

### Linode[#](#server-and-ci-cd-setup-linode)
Our preferred VPS provider is Linode. The below pages are taken from their guidelines, but should apply to any VPS provider.

- Getting Started [&#x2197;](https://www.linode.com/docs/getting-started/){:target="_blank"}
- Securing Server [&#x2197;](https://www.linode.com/docs/security/securing-your-server/){:target="_blank"}

### Firewall[#](#server-and-ci-cd-setup-firewall)
- ```$``` ```sudo ufw enable```
- ```$``` ```sudo ufw allow ssh```
- ```$``` ```sudo ufw allow http```
- ```$``` ```sudo ufw allow https```

### nginx[#](#server-and-ci-cd-setup-nginx)
- ```$``` ```ssh {user}@{ip}```
- ```$``` ```sudo apt-get update```
- ```$``` ```sudo apt-get upgrade```
- ```$``` ```sudo apt-get install nginx```
- Go to ```{ip}``` in your browser, you should see Welcome to nginx! page. If it’s not running, then: ```$``` ```sudo service nginx start```

### DNS[#](#server-and-ci-cd-setup-dns)
Our preferred DNS provider is Cloudflare.

- Create an ```A``` record pointing to ```{ip}```
- Configure production and staging websites in ```/etc/nginx/sites-available/```
- Go to ```{url}```

### SSL[#](#server-and-ci-cd-setup-ssl)
- ```$``` ```sudo apt-get install software-properties-common```
- ```$``` ```sudo add-apt-repository universe```
- ```$``` ```sudo add-apt-repository ppa:certbot/certbot```
- ```$``` ```sudo apt-get update```
- ```$``` ```sudo apt-get install certbot python-certbot-nginx```
- ```$``` ```sudo certbot certonly --nginx```
- Test automatic renewal with ```$``` ```sudo certbot renew --dry-run```
- Update nginx configuration in ```/etc/nginx/sites-available/```
- Check if SSL certificate is working
    
### PHP[#](#server-and-ci-cd-setup-php)
- ```$``` ```sudo apt-get install python-software-properties```
- ```$``` ```sudo add-apt-repository ppa:ondrej/php```
- ```$``` ```sudo apt-get update```
- ```$``` ```sudo apt-get install php7.4-fpm php7.4-cli php7.4-common```
- ```$``` ```sudo apt-get install php7.4-curl php7.4-gd php7.4-json php7.4-mbstring php7.4-mysql php7.4-xml```
- Check status with ```$``` ```service php7.4-fpm status // check status```. If it's not running, then ```$``` ```sudo service php7.4-fpm start```

### MariaDB[#](#server-and-ci-cd-setup-mariadb)
- ```$``` ```sudo apt-get install mariadb-client mariadb-server```
- ```$``` ```sudo mysql_secure_installation```
- If you can't connect to mysql with root user:
    - ```sudo mysql```
    - ```UPDATE mysql.user SET plugin = 'mysql_native_password'```;
    - ```FLUSH PRIVILEGES```;
- Create database and user
    - ```mysql -u root -p```
    - ```CREATE DATABASE {database};```
    - ```CREATE USER '{username}'@'localhost' IDENTIFIED BY '{password}';```
    - ```GRANT ALL ON {database}.* TO {username}@`localhost`;```
    - ```FLUSH PRIVILEGES;```
    
### PhpMyAdmin[#](#server-and-ci-cd-setup-phpmyadmin)
- ```$``` ```sudo apt-get install phpmyadmin```
- ```$``` ```sudo ln -s /usr/share/phpmyadmin /path/to/project/public/folder```

<small class="note">Never leave it installed for projects in production!</small>

### Composer[#](#server-and-ci-cd-setup-composer)
- ```$``` ```curl -sS https://getcomposer.org/installer -o composer-setup.php```
- ```$``` ```sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer```
- Check of correctly installed ```$``` ```composer```
- Install ```unzip```, which is necessary for ```composer install```
    - ```$``` ```sudo apt-get install unzip```
    
### GIT[#](#server-and-ci-cd-setup-git)
- Generate SSH key
    - ```$``` ```ssh-keygen -t rsa```
- Set up SSH key in Bitbucket
    - ```$``` ```cat ~/.ssh/id_rsa.pub```
    - Copy key to clipboard
    - Go to ```Bitbucket -> Settings -> General -> Access keys``` and paste your key
    
- ```$``` ```sudo apt-get install git```

- ```$``` ```mkdir /var/www/{appdomain.com}```
- ```$``` ```sudo chown -R www-data:www-data /var/www/{appdomain.com}```
- ```$``` ```cd /var/www/{appdomain.com}```
- ```$``` ```git clone git@bitbucket.org:{repo_url}.git .```

- ```$``` ```mkdir /var/www/{dev.appdomain.com}```
- ```$``` ```sudo chown -R www-data:www-data /var/www/{dev.appdomain.com}```
- ```$``` ```cd /var/www/{dev.appdomain.com}```
- ```$``` ```git clone git@bitbucket.org:{repo_url}.git .```
- ```$``` ```git checkout dev // or staging```

### NPM[#](#server-and-ci-cd-setup-npm)
- ```$``` ```sudo apt-get install npm```
- ```$``` ```sudo npm install --unsafe-perm```

### Jenkins[#](#server-and-ci-cd-setup-jenkins)
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
- Add ```jenkins``` public key to access keys on Bitbucket repo
- Create hook in Bitbucket (```Settings / Webhooks```): ```https://ci.gofurther.digital/bitbucket-hook/```
- Create ```jenkins``` user on __remote server__ and give ```sudo``` rights
    - ```$``` ```sudo adduser jenkins```
    - ```$``` ```sudo adduser jenkins sudo```
- Add ```jenkins``` public key to ```~/.ssh/authorized_keys``` on __remote server__
- Add line ```jenkins ALL=(ALL) NOPASSWD: ALL``` to ```/etc/sudoers``` on __remote server__