Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }

exec { 'add-nodesource-repo':
	command => "curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -",
}
exec { 'add-ubuntu-git-maintainers-repo':
	command => "add-apt-repository ppa:git-core/ppa",
}

class system-update {
	exec { 'apt-get update':
		command => 'apt-get update',
  }
}

class system-upgrade {
	exec { 'apt-get upgrade':
        	command => 'apt-get upgrade -y',
    }
}

class js_packages {
	package { "nodejs":
    		ensure => "latest"
    }
}
class tools_packages {
	package { "git":
		ensure => "latest"
	}
}
class bower_install {
	exec { 'install-bower':
		command => 'npm install -g bower',
	}
}

class gulp_install {
        exec { 'install-gupl':
                command => 'npm install -g gulp-cli',
        }
}

class yo_install {
        exec { 'install-yo':
                command => 'npm install -g yo',
        }
}

include system-update
include system-upgrade
include js_packages
include tools_packages
include bower_install
include gulp_install
include yo_install
