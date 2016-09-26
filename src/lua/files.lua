-- list all files located on the SD0/lua and SD0/html directory
-- on the SD card
--
--

return function (connection, req, args)
    dofile("httpserver-header.lc")(connection, 200, "html")
    connection:send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Server File Listing</title></head>')
    connection:send('<body>')

    connection:send('<h1>SD Card file listing</h1>')

    local total=file.fsinfo()
    connection:send("<b>Total size: </b> " .. total .. " bytes<br/>\n")

    connection:send("<p>\n")
    connection:send("<b>'SD0/lua' Files:</b><br/>\n")
    connection:send("<ul>\n")

    file.chdir("/SD0/lua")
    for name, size in pairs(file.list()) do
        connection:send('   <li><a href="' .. name .. '">' .. name .. "</a> (" .. size .. " bytes)</li>\n")
    end
    connection:send("</ul>\n")
    connection:send("</p>\n")


    connection:send("<p>\n")
    connection:send("<b>'SD0/html' Files:</b><br/>\n")
    connection:send("<ul>\n")
    file.chdir("/SD0/html")
    for name, size in pairs(file.list()) do
        connection:send('   <li><a href="' .. string.gsub(name,".gz","") .. '">' .. name .. "</a> (" .. size .. " bytes)</li>\n")
    end
    connection:send("</ul>\n")
    connection:send("</p>\n")


    file.chdir("/FLASH")

    connection:send("<a href='index.html'>back to index</a>\n")
    connection:send('</body></html>')
end