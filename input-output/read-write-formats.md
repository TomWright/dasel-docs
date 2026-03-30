# Read/Write formats

Dasel supports a number of file formats out of the box.

| Format | Read                 | Write                | Notes                                                                                                                                                                                    |
| ------ | -------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| json   | :white\_check\_mark: | :white\_check\_mark: |                                                                                                                                                                                          |
| yaml   | :white\_check\_mark: | :white\_check\_mark: |                                                                                                                                                                                          |
| hcl    | :white\_check\_mark: | :white\_check\_mark: | [Flags available.](read-writer-flags.md#hcl)                                                                                                                                             |
| csv    | :white\_check\_mark: | :white\_check\_mark: | <p><a href="read-writer-flags.md#csv">Flags available.</a><br>All values read/written as strings.</p>                                                                                    |
| toml   | :grey\_question:     | :grey\_question:     | <p>Generally working.<br>Unsorted maps.</p>                                                                                                                                              |
| xml    | :white\_check\_mark: | :white\_check\_mark: | <p><a href="read-writer-flags.md#xml">Flags available.</a><br>Attribute names are prefixed with a <code>-</code> and should be accessed using <a href="../functions/get.md">get</a>.</p> |
| ini    | :white\_check\_mark: | :white\_check\_mark: | Limited to basic sections + key values.                                                                                                                                                  |
| dasel  | :white\_check\_mark: | :x:                  | This is not a real format, but instead allows dasel literals to be parsed on input strings.                                                                                              |

