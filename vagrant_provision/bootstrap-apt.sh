#!/usr/bin/env bash

# Setup a color prompt in ~/.bashrc
echo 'export PS1="\[\e[00;36m\]\u\[\e[0m\]\[\e[00;37m\]@\[\e[0m\]\[\e[00;32m\]\h\[\e[0m\]\[\e[00;37m\]:\[\e[0m\]\[\e[00;33m\]\w\[\e[0m\]\[\e[00;37m\]\n\\$ \[\e[0m\]"' >> /home/vagrant/.bashrc

# Setup Python Path
echo 'export PYTHONPATH=$PYTHONPATH:/usr/bin/python' >> /home/vagrant/.bashrc

# Setup Default Folder upon Login
echo 'cd /vagrant' >> /home/vagrant/.bashrc

# Installation Requirements
# PHP, GIT, Apache
sudo apt-get update -y -qq
sudo apt-get install -y -qq git apache2

# Install NodeJS (Needed for Development Only)
curl --silent --location https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y -qq nodejs

# fix npm config so you don't need sudo
# use `$npm config get prefix` to see where the npm base dir is
mkdir /home/vagrant/.npm-global
npm config set prefix '/home/vagrant/.npm-global'
echo 'export PATH=/home/vagrant/.npm-global/bin:$PATH' >> /home/vagrant/.bashrc
echo 'export NODE_PATH=/home/vagrant/.npm-global/lib/node_modules:$NODE_PATH' >> /home/vagrant/.bashrc

# Temporarily set the NPM paths for the current user
export PATH=/home/vagrant/.npm-global/bin:$PATH
export NODE_PATH=/home/vagrant/.npm-global/lib/node_modules:$NODE_PATH

# Install Bower, Gulp
npm install -g bower gulp-cli
npm install -g yo
