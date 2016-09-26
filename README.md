# nodemcu-wampum-example

Very simple example for an web project for the ESP8266 or WeMos module.
All the resources are located on the SD card instead of the internal FLASH RAM

## Requirements

### NodeMCU Web server
This project structure is adapted to the [nodemcu-wampum](https://github.com/freegroup/nodemcu-wampum). Just upload this
Lua scripts to your NodeMCU. 

### SD Card
..of course. The NodeMCU is hosting the files direct from the *SD0*. You can use the WeMos mini 1 with an SD shield for you
very first steps.

### FatFS
The SD Card is formated with a simple FAT file system. In this case you must use a NodeMCU firmware with FatFS and SPI support. 

