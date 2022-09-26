# Put document

## Description

This command allows you to modify data at a given selector.

It generally works in the same way as [put](put.md), but allows you to write entire documents with a single command.

Note that `put document` will completely overwrite any existing data at the given selector.

## Usage

```shell
dasel put document -f <file> -d <document-parser> <selector> <document>
```

| Flag                                                           | Description                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<document>`                                                   | <p>The document you want to put, as a marshaled/encoded string.</p><p>This is required.</p>                                                                                                                                                                                 |
| <p><code>--value-file</code><br>Since <code>v1.27.0</code></p> | <p>A path to a file containing the document.<br>If present, the contents of the file takes precedence over <code>&#x3C;document></code>.</p>                                                                                                                                |
| `-d`, `<document-parser>`                                      | <p>Specify the parser to use when reading the document value.</p><p>If no value is provided, the read parser is used.</p><p>See <a href="supported-file-types.md">supported file types</a>.</p>                                                                             |
| `-f`, `--file`                                                 | <p>Specify the file to query. This is required unless you are piping in data.</p><p>If piping in data you can optionally pass <code>-f stdin</code>/<code>-f -</code>.</p>                                                                                                  |
| `-o`, `--out`                                                  | <p>Specify the output file. If present, results will be written to the given file. If not present, results will be written to the input file (or stdout if none given).</p><p>To force output to be written to stdout, pass <code>-o stdout</code>or<code>-o -</code>.</p>  |
| `-r`, `--read`                                                 | <p>Specify the parser to use when reading the input data.</p><p>This is required if you are piping in data, otherwise dasel will use the given file extension to guess which parser to use.</p><p>See <a href="supported-file-types.md">supported file types</a>.</p>       |
| `-w`, `--write`                                                | <p>Specify the parser to use when writing the output data.</p><p>If not provided dasel will attempt to use the <code>--out</code> and <code>--read</code> flags to determine which parser to use.</p><p>See <a href="supported-file-types.md">supported file types</a>.</p> |
| `-p`, `--parser`                                               | Shorthand for `-r <value> -w <value>`                                                                                                                                                                                                                                       |
| `-m`, `--multiple`                                             | <p>Tells dasel to put multiple items.</p><p>See <a href="flags/multiple.md">multiple</a>.</p>                                                                                                                                                                               |
| `-s`, `--selector`, `<selector>`                               | <p>Specify the selector to use. See <a href="../selectors/introduction.md">selectors</a> for more information.</p><p>If no selector flag is given, dasel assumes the first argument given is the selector.</p><p>This is required.</p>                                      |
| `-c`, `--compact`                                              | This tells dasel to output compact data where possible. E.g. not pretty printing JSON.                                                                                                                                                                                      |
| `--merge-input-documents`                                      | See [merge input documents](flags/merge-input-documents.md).                                                                                                                                                                                                                |
| `--escape-html`                                                | See [escape html](flags/escape-html.md).                                                                                                                                                                                                                                    |

## Example

### Put YAML document into JSON

```shell
$ echo '{"people":[]}' | dasel put document -p json -d yaml '.people.[]' 'name: Tom
colours:
- red
- green
- blue'
```

```json
{
  "people": [
    {
      "colours": ["red", "green", "blue"],
      "name": "Tom"
    }
  ]
}
```
