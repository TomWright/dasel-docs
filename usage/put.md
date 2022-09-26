# Put

## Description

This command allows you to modify data at a given selector.

Dasel will create any data items that do not already exist allowing you to create entire data structures from nothing.

## Usage

```shell
dasel put <type> -f <file> <selector> <value>
```

{% hint style="warning" %}
If `--file` is used without `--out` then the source file will be updated.
{% endhint %}

| Flag                                                                         | Description                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<type>`                                                                     | <p>The type of value you want to put.</p><p>Available arguments:</p><ul><li>string</li><li>int</li><li>bool</li><li><a href="put-object.md">object</a></li><li><a href="put-document.md">document</a></li></ul>                                                                         |
| <p><code>&#x3C;value></code></p><p><code>-v</code>, <code>--value</code></p> | <p>The value to write.</p><p>Dasel will parse this value as a string, int, or bool from this value depending on the given <code>type</code>.</p><p>If no <code>-v</code>, <code>--value</code> flag is given, the value is assumed to be the last argument.</p><p>This is required.</p> |
| <p><code>--value-file</code><br>Since <code>v1.27.0</code></p>               | <p>A path to a file containing the value.<br>If present, the contents of the file takes precedence over <code>-v, --value</code>.</p>                                                                                                                                                   |
| `-f`, `--file`                                                               | <p>Specify the file to query. This is required unless you are piping in data.</p><p>If piping in data you can optionally pass <code>-f stdin</code>/<code>-f -</code>.</p>                                                                                                              |
| `-o`, `--out`                                                                | <p>Specify the output file. If present, results will be written to the given file. If not present, results will be written to the input file (or stdout if none given).</p><p>To force output to be written to stdout, pass <code>-o stdout</code>or<code>-o -</code>.</p>              |
| `-r`, `--read`                                                               | <p>Specify the parser to use when reading the input data.</p><p>This is required if you are piping in data, otherwise dasel will use the given file extension to guess which parser to use.</p><p>See <a href="supported-file-types.md">supported file types</a>.</p>                   |
| `-w`, `--write`                                                              | <p>Specify the parser to use when writing the output data.</p><p>If not provided dasel will attempt to use the <code>--out</code> and <code>--read</code> flags to determine which parser to use.</p><p>See <a href="supported-file-types.md">supported file types</a>.</p>             |
| `-p`, `--parser`                                                             | Shorthand for `-r <value> -w <value>`                                                                                                                                                                                                                                                   |
| `-m`, `--multiple`                                                           | <p>Tells dasel to put multiple items.</p><p>See <a href="flags/multiple.md">multiple</a>.</p>                                                                                                                                                                                           |
| `-s`, `--selector`, `<selector>`                                             | <p>Specify the selector to use. See <a href="../selectors/introduction.md">selectors</a> for more information.</p><p>If no selector flag is given, dasel assumes the first argument given is the selector.</p><p>This is required.</p>                                                  |
| `--plain`                                                                    | <p>By default, dasel formats the output using the specified parser.</p><p>If this flag is used no formatting occurs and the results output as a string.</p>                                                                                                                             |
| `-c`, `--compact`                                                            | This tells dasel to output compact data where possible. E.g. not pretty printing JSON.                                                                                                                                                                                                  |
| `--merge-input-documents`                                                    | See [merge input documents](flags/merge-input-documents.md).                                                                                                                                                                                                                            |
| `--escape-html`                                                              | See [escape html](flags/escape-html.md).                                                                                                                                                                                                                                                |

## Example

### Put string

```shell
$ echo "name: Tom" | ./dasel put string -p yaml ".name" Jim
name: Jim
```

### Create documents from scratch

You can pipe multiple dasel commands together in order to build entire documents or make multiple changes:

```shell
$ echo '' |
dasel put string -p yaml '.servers.[].bind_dn' 'x' |
dasel put string -p yaml -m '.servers.[*].attributes.name' 'y' |
dasel put string -p yaml -m '.servers.[*].group_mappings.[].group_dn' 'a' |
dasel put string -p yaml -m '.servers.[*].group_mappings.[].group_dn' 'b'
servers:
  - attributes:
      name: "y"
    bind_dn: x
    group_mappings:
      - group_dn: a
      - group_dn: b
```
