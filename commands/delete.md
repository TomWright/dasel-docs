# Delete

The delete command allows you to delete data in any supported data structure.

## Usage

```
$ echo '{"name":{"first":"Tom","last":"Wright"}}' |
  dasel delete -r json 'name.last'
{
  "name": {
    "first": "Frank"
  }
}
```

See the [function documentation](broken-reference) for information on the available selectors.

## Flags/Args

<table><thead><tr><th width="214">Flag</th><th width="128">Type</th><th width="308.3333333333333">Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--colour</code></td><td><code>bool</code></td><td>Print colourised output.</td><td><code>false</code></td></tr><tr><td><code>--escape-html</code></td><td><code>bool</code></td><td>Escape HTML tags when writing output.</td><td><code>false</code></td></tr><tr><td><code>-f</code>, <code>--file</code></td><td><code>string</code></td><td>The file to query.<br>If no file is given dasel reads from <code>stdin</code>.</td><td></td></tr><tr><td><code>-o</code>, <code>--out</code></td><td><code>string</code></td><td>The file to write results to.<br>If no file is given dasel writes to <code>--file</code>.<br>If <code>--file</code> is <code>stdin</code>, dasel writes to <code>stdout</code>.</td><td></td></tr><tr><td><code>--pretty</code></td><td><code>bool</code></td><td>Pretty print the output.</td><td><code>true</code></td></tr><tr><td><code>-r</code>, <code>--read</code></td><td><code>string</code></td><td>The parser to use when reading.<br>If no parser is given dasel attempts to find a parser from the <code>--file</code> flag.</td><td></td></tr><tr><td><code>-s</code>, <code>--selector</code></td><td><code>string</code></td><td>The selector used to query the input data.<br>If no flag is given dasel attempts to use the first argument as the selector.</td><td></td></tr><tr><td><code>-w</code>, <code>--write</code></td><td><code>string</code></td><td>The parser to use when writing.<br>If no parser is given dasel attempts to find a parser from the <code>--out</code> flag.<br>If no <code>--out</code> flag is given dasel uses the <code>--read</code> flag.</td><td></td></tr><tr><td><code>--csv-comma</code></td><td><code>string</code></td><td>The separator used when working with csv files.</td><td><code>,</code></td></tr><tr><td><code>--csv-write-comma</code></td><td><code>string</code></td><td>The separator used when writing csv files.</td><td>value of <code>--csv-comma</code> </td></tr><tr><td><code>--csv-comment</code></td><td><code>string</code></td><td>The comment character used when working with csv files.</td><td></td></tr><tr><td><code>--csv-crlf</code></td><td><code>bool</code></td><td>True to write csv files with a <code>\r\n</code> instead of <code>\n.</code></td><td><code>false</code></td></tr></tbody></table>
