# -*- mode: ruby -*-
# vi: set ft=ruby :

vconfig = Hash.new

# CONFIGURATION VARIABLES

vconfig['box_base'] = 'ubuntu/trusty64'
vconfig['box_name'] = 'nodeschool.io'
vconfig['public_ip'] = '192.168.33.50'
vconfig['http_port_guest'] = 5000
vconfig['http_port_host'] = 80
vconfig['bootstrap_filename'] = 'bootstrap-apt.sh'

# -- DON'T CHANGE BELOW THIS LINE--

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
Vagrant.configure("2") do |config|

  config.vm.box = vconfig['box_base']
  config.vm.network "private_network", 
  	ip: vconfig['public_ip']
  config.vm.network "forwarded_port", 
  	guest: vconfig['http_port_guest'], 
    host: vconfig['http_port_host'], 
  	auto_correct: true
  
  config.vm.synced_folder "./", "/vagrant", id: "vagrant-root"

  config.vm.provider "virtualbox" do |v|
  	v.name = vconfig['box_name']
  	v.cpus = 2
	  v.memory = 1024
  end  

  config.vm.provision "file", 
  	source: "./vagrant_provision/.gitconfig", 
  	destination: "~/.gitconfig"
  config.vm.provision "file", 
  	source: "./vagrant_provision/.gitignore-user", 
  	destination: "~/.gitignore"
    
  config.vm.provision :shell, 
    path: File.join(".", "vagrant_provision", vconfig['bootstrap_filename']),
   privileged: false
    
  # config.vm.provision :puppet do |puppet|
  #   puppet.manifests_path = "puppet/manifests"
  #   puppet.options = ['--verbose']
  # end

end
