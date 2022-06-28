# Put object

## Description

This command allows you to modify data at a given selector.

It generally works in the same way as [put](put.md), but allows you to write entire maps with a single command.

Note that `put object` will completely overwrite any existing data at the given selector.

## Usage

```shell
dasel put object -f <file> -t <type> -t <type> <selector> <value:key=value> <value:key=value>
```

{% hint style="info" %}
Omit the types and values to create an empty object/map.
{% endhint %}

<table>
  <thead>
    <tr>
      <th style="text-align:left">Flag</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>-t</code>, <code>&lt;type&gt;</code>
      </td>
      <td style="text-align:left">
        <p>The type of value you want to put.</p>
        <p>You must repeat this argument for each value provided.</p>
        <p>Available arguments:</p>
        <ul>
          <li>string</li>
          <li>int</li>
          <li>bool</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>&lt;value&gt;</code>
      </td>
      <td style="text-align:left">
        <p>The key + value to write as<code>key=value</code>
        </p>
        <p>Dasel will parse this value as a string, int, or bool depending on the
          given <code>type</code>.</p>
        <p>This is required.</p>
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
      <td style="text-align:left"><code>--plain</code>
      </td>
      <td style="text-align:left">
        <p>By default, dasel formats the output using the specified parser.</p>
        <p>If this flag is used no formatting occurs and the results output as a
          string.</p>
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

### Put object

```shell
$ echo "" | dasel put object -p yaml -t string -t int "my.favourites" colour=red number=3
my:
  favourites:
    colour: red
    number: 3
```
