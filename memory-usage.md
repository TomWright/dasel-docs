# Memory usage

Dasel does not perform partial reads or streaming. As a result the dasel executable will read the entire given document into memory.

You should be aware that dasel will attempt to allocate a lot of memory if you are processing very large documents.
