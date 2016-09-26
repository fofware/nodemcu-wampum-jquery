# nodemcu-wampum-jquery

Very simple example for an web project for the ESP8266 or WeMos module.
All the resources are located on the SD card instead of the internal FLASH RAM


This demo switch on/off the buildin LED of the WeMos (ESP8266) with an jQuery ajax call.



![WebServer](/teaser.png?raw=true "ESP8266 as full web server")


## Requirements

### NodeMCU Web server
This project structure is adapted to the [nodemcu-wampum](https://github.com/freegroup/nodemcu-wampum). Just follow
the instructions of this project how to enable the ESP8266 Web server with SD card support.

## How to build

You need bower and grunt to build the demo app.
Grunt runs on Node.js, so if you don't have npm installed already, go ahead and install it.

## To install Grunt's command line interface run:

```
npm install -g grunt-cli
```

With the flag -g you installed it globally and now you can access it from anywhere on your system.

## Bower
Installing bower couldn't be simpler. Just go:
```
npm install -g bower
```
and you have it.

## Download used js libs
and all required libraries in the right version with one command

```
bower install
```
now you have all used js libraries in the right version in your project.


## Install dependencies for the Gruntfile.js
```
npm install
```

##Build the project
Just type:
```
grunt
```
and you find the result in the **dist** folder.
