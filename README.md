NodeSchool.io Coursework
========================

This is a repository of my [NodeSchool.io](http://nodeschool.io/) course work.  Each branch (as well as sub-directory in /src) represents a course.

Courses (Completed or In Progress):
-----------------------------------

- javascripting ([code repo](https://github.com/sethvincent/javascripting))
- learnyounode ([code repo](https://www.github.com/workshopper/learnyounode))
- Scope Chains & Closures ([code repo](https://www.github.com/jesstelford/scope-chains-closures))
- stream-adventure ([code repo](https://www.github.com/substack/stream-adventure))

Getting Started
---------------

This repo uses a custom Vagrant setup to create a nodejs VirtualBox VM.  The nodejs vagrant box has the following features :

* ubuntu trusty 64 base box
* latest nodejs, git, bower, gulp-cli, yo
* test.js file to easily try nodejs
* the guest listens on 127.0.0.1:5000 the host on 127.0.0.1:80

### How to use

- install latest vagrant (http://www.vagrantup.com) 
- install latest virtualbox (http://www.virtualbox.org)
- clone this repo and ```cd``` into it 
- do a ```vagrant up```
- ssh into the box with ```vagrant ssh```

### TODO :

- install side packages like Gulp, Broccoli, Brunch, Angular, Ember, PhantomJS, CasperJS, Weinre, Cordova/Phonegap, Mocha...
