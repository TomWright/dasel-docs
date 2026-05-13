# Read/Writer flags

Some parsers accept options that aren't available in others, for this we use read/writer flags.

## Format

```
--read-flag foo=bar
--write-flag foo=bar
```

## Flags by parser

### CSV

| Read/Write | Name          | Values                                                    | Description                                                |
| ---------- | ------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| read/write | csv-delimiter | Any single character to use as a delimiter. E.g. `,`, `;` | Changes the delimiter used when reading/writing CSV files. |

### XML

| Read/Write | Name     | Values     | Description                                                      |
| ---------- | -------- | ---------- | ---------------------------------------------------------------- |
| read       | xml-mode | structured | Changes the internal structure that XML documents are read into. |

### HCL

| Read/Write | Name             | Values | Description                                                                                                                                                                                                     |
| ---------- | ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| read       | hcl-block-format | array  | HCL block contents usually expand to an array when duplicate labels are defined on another block. Setting this to `array` will force blocks to always be an array of values, even when there are no duplicates. |

### KDL

| Read/Write | Name        | Values | Description                                                                                                                                                        |
| ---------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| write      | kdl-version | 1, 2   | Controls the output KDL version. Version `2` (default) uses `#true`, `#false`, `#null`. Version `1` uses bare `true`, `false`, `null`. |

