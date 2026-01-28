# Select

## Description

This command allows you to select data from data structures.

It will not modify the source data in any way.

## Usage

```shell
dasel select -f <file> <selector>
```

### Flags

<table>
  <thead>
    <tr>
      <th style="text-align:left">Flag</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>-f</code>, <code>--file</code>
      </td>
      <td style="text-align:left">
        <p>Specify the file to query. This is required unless you are piping in data.</p>
        <p>If piping in data you can optionally pass <code>-f stdin</code>/<code>-f -</code>.</p>
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
        <p>If not provided dasel will attempt to use the<code>--read</code> flag to
          determine which parser to use.</p>
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
        <p>Tells dasel to select multiple items.</p>
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
      <td style="text-align:left"><code>-n</code>, <code>--null</code>
      </td>
      <td style="text-align:left">
        <p>Output <code>null</code> instead of <code>ValueNotFound</code> errors.</p>
        <p>See <a href="flags/null.md">null</a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>-c</code>, <code>--compact</code>
      </td>
      <td style="text-align:left">This tells dasel to output compact data where possible. E.g. not pretty
        printing JSON.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--length</code>
      </td>
      <td style="text-align:left">
        <p>This tells dasel to output the length of the value found.</p>
        <ul>
          <li><code>[1, 2, 3]</code> - <code>3</code>: The number of elements within the
            array.</li>
          <li><code>{&quot;a&quot;: 1, &quot;b&quot;: 2}</code> - <code>2</code>: The
            number of elements within the map.</li>
          <li><code>&quot;Hello there&quot;</code> - <code>11</code>: The number of characters
            in the string.</li>
          <li>Any other values are converted to strings and then treated as such:
            <ul>
              <li><code>12345</code> - <code>5</code>: Numbers are converted to strings.</li>
              <li><code>123.45</code> - <code>6</code>: Floats/decimals are converted to strings.</li>
              <li><code>true</code> - <code>4</code>: Bools are converted to strings.</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--merge-input-documents</code>
      </td>
      <td style="text-align:left">See <a href="flags/merge-input-documents.md">merge input documents</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--format</code>
      </td>
      <td style="text-align:left">See <a href="flags/format.md">format</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--colour</code>
      </td>
      <td style="text-align:left">Colourise output.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--color</code>
      </td>
      <td style="text-align:left">Alias of <code>--colour.</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--escape-html</code>
      </td>
      <td style="text-align:left">See <a href="flags/escape-html.md">escape html</a>.</td>
    </tr>
  </tbody>
</table>

## Example

### **Select the image within a kubernetes deployment manifest file:**

```text
$ dasel select -f deployment.yaml "spec.template.spec.containers.(name=auth).image"
"tomwright/auth:v1.0.0"
```

### **Piping data into the select:**

```text
$ cat deployment.yaml | dasel select -p yaml "spec.template.spec.containers.(name=auth).image"
"tomwright/auth:v1.0.0"
```
