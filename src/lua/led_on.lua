-- toggles the build in LED on
--
--

return function (connection, req, args)
    dofile("httpserver-header.lc")(connection, 200, "application/json")
    connection:send('{"on"}')

    gpio.mode(4, gpio.OUTPUT)
    gpio.write(4, gpio.LOW)

end
