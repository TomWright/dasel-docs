# Put document

## Description

This command allows you to modify data at a given selector.

It generally works in the same way as [put](put.md), but allows you to write entire documents with a single command.

Note that `put document` will completely overwrite any existing data at the given selector.

## Usage

```shell
dasel put document -f <file> -d <document-parser> <selector> <document>
```

<table>
  <thead>
    <tr>
      <th style="text-align:left">Flag</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>&lt;document&gt;</code>
      </td>
      <td style="text-align:left">
        <p>The document you want to put, as a marshaled/encoded string.</p>
        <p>This is required.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-d</code>, <code>&lt;document-parser&gt;</code>
      </td>
      <td style="text-align:left">
        <p>Specify the parser to use when reading the document value.</p>
        <p>If no value is provided, the read parser is used.</p>
        <p>See <a href="supported-file-types.md">supported file types</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-f</code>, <code>--file</code>
      </td>
      <td style="text-align:left">
        <p>Specify the file to query. This is required unless you are piping in data.</p>
        <p>If piping in data you can optionally pass <code>-f stdin</code>/<code>-f -</code>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-o</code>, <code>--out</code>
      </td>
      <td style="text-align:left">
        <p>Specify the output file. If present, results will be written to the given
          file. If not present, results will be written to the input file (or stdout
          if none given).</p>
        <p>To force output to be written to stdout, pass <code>-o stdout</code>or<code>-o -</code>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-r</code>, <code>--read</code>
      </td>
      <td style="text-align:left">
        <p>Specify the parser to use when reading the input data.</p>
        <p>This is required if you are piping in data, otherwise dasel will use the
          given file extension to guess which parser to use.</p>
        <p>See <a href="supported-file-types.md">supported file types</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-w</code>, <code>--write</code>
      </td>
      <td style="text-align:left">
        <p>Specify the parser to use when writing the output data.</p>
        <p>If not provided dasel will attempt to use the <code>--out</code> and <code>--read</code> flags
          to determine which parser to use.</p>
        <p>See <a href="supported-file-types.md">supported file types</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-p</code>, <code>--parser</code>
      </td>
      <td style="text-align:left">Shorthand for <code>-r &lt;value&gt; -w &lt;value&gt;</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-m</code>, <code>--multiple</code>
      </td>
      <td style="text-align:left">
        <p>Tells dasel to put multiple items.</p>
        <p>See <a href="flags/multiple.md">multiple</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-s</code>, <code>--selector</code>, <code>&lt;selector&gt;</code>
      </td>
      <td style="text-align:left">
        <p>Specify the selector to use. See <a href="../selectors/introduction.md">selectors</a> for
          more information.</p>
        <p>If no selector flag is given, dasel assumes the first argument given is
          the selector.</p>
        <p>This is required.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-c</code>, <code>--compact</code>
      </td>
      <td style="text-align:left">This tells dasel to output compact data where possible. E.g. not pretty
        printing JSON.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--merge-input-documents</code>
      </td>
      <td style="text-align:left">See <a href="flags/merge-input-documents.md">merge input documents</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--escape-html</code>
      </td>
      <td style="text-align:left">See <a href="flags/escape-html.md">escape html</a>.</td>
    </tr>
  </tbody>
</table>

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
