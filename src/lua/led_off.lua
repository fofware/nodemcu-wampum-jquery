-- toggles the build in LED off
--
--

return function (connection, req, args)

    dofile("httpserver-header.lc")(connection, 200, "application/json")
    connection:send('{"off"}')

    gpio.mode(4, gpio.OUTPUT)
    gpio.write(4, gpio.HIGH)

end
