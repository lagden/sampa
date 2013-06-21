Installation on Windows - Git + Node.js + NPM + Ruby
============================================

This is a tutorial to install `Git` + `Node.js` + `NPM` + `Ruby` on Windows.

### Git

First you need install: [Git for Windows](http://git-scm.com/download/win)

When installing select the options bellow:

**Screen 1:**

- Git Bash Here
- Git GUI Here

**Screen 2**

- Run Git from the Windows Command Prompt

**Screen 3**

- Checkout as-is, commit Unix-style line endings

### Node.js

[Open the link](http://nodejs.org/download/), select the `Windows Binary (.exe)` compatible with your machine and download.   
Open a `command prompt` and type:

	C:\mkdir node
	C:\move c:\downloaded\node.exe c:\node\.
	C:\cd c:\node
	C:\node>set path=%PATH%;%CD%
	C:\node>setx path "%PATH%"
	
The above command adds the `Node.js` in `PATH` so you can execute it in any part of the system.

### NPM - Package Manager

**Attention:** For this part you need the `Git` is working properly.

Open a **new** `command prompt` and type:

	C:\cd c:\node
	C:\node>git config --system http.sslcainfo /bin/curl-ca-bundle.crt
	C:\node>git clone --recursive git://github.com/isaacs/npm.git tmp
	C:\node>node tmp\cli.js install npm
	C:\node>copy C:\node\node_modules\npm\bin\npm c:\node\.
	C:\node>copy C:\node\node_modules\npm\bin\npm.cmd c:\node\.
	C:\node>rmdir C:\node\tmp /s/q
	
### Ruby

The Ruby is more simple, just download and install: [Download Ruby](http://rubyinstaller.org/downloads/)

## Test and Install

Verify if everything is working properly. Open a `command prompt` and type:

### Grunt and Bower

	C:\>git --version
	C:\>node --version
	C:\>npm --version
	C:\>npm install -g bower
	C:\>npm install -g grunt-cli
	
### Compass

	C:\>gem --version
	C:\>gem update --system --no-ri --no-rdoc
	C:\>gem install compass --no-ri --no-rdoc
