# Supported file types

Dasel attempts to find the correct parser for the given file type, but if that fails you can choose which parser to use with the `-p` or `--parser` flag.

## JSON

```bash
-p json
```

Using [golang.org/pkg/encoding/json](https://golang.org/pkg/encoding/json/).

### **Multi-document files**

Multi-document files are decoded into an array, with `[0]` being the first document, `[1]` being the second and so on.

Once decoded, you can access them using any of the standard selectors provided by Dasel.

## TOML

```bash
-p toml
```

Using [github.com/pelletier/go-toml](https://github.com/pelletier/go-toml).

## YAML

```bash
-p yaml
```

Using [gopkg.in/yaml.v2](https://gopkg.in/yaml.v2).

### **Multi-document files**

Multi-document files are decoded into an array, with `[0]` being the first document, `[1]` being the second and so on.

Once decoded, you can access them using any of the standard selectors provided by Dasel.

## XML

```bash
-p xml
```

Using [github.com/clbanning/mxj](https://github.com/clbanning/mxj).

### **Data Format**

XML documents within dasel are stored as a map of values.

This is just how dasel stores data and is required for the general functionality to work. An example of a simple documents representation is as follows:

```markup
<Person active="true">
  <Name main="yes">Tom</Name>
  <Age>27</Age>
</Person>
```

```go
map[
  Person:map[
    -active:true
    Age:27
    Name:map[
      #text:Tom
      -main:true
    ]
  ]
]
```

In general this won't affect you, but on the odd occasion in specific instances it could lead to unexpected output.

If you are struggling with this please open a [discussion](https://github.com/TomWright/dasel/discussions) for support. This will also help me know when the docs aren't sufficient.

### **Debugging**

You can run select commands with the `--plain` flag to see the raw data that is stored within dasel. This can help you figure out the exact properties you may need to target when it isn't immediately obvious.

### **Arrays/Lists**

Due to the way that XML is decoded, dasel can only detect something as a list if there are at least 2 items.

If you try to use list selectors \(dynamic, index, append\) when there are less than 2 items in the list you will get an error.

There are no plans to introduce a workaround for this but if there is enough demand it may be worked on in the future.

## CSV

```bash
-p csv
```

Using [golang.org/pkg/encoding/csv](https://golang.org/pkg/encoding/csv/).

### **Adding data**

New columns will be detected and added to the end of the CSV output.

Column deletion is not supported.

## Plain

```bash
-p plain
```

This outputs the data using `fmt.Sprint(x)`, displaying whatever underlying value is present as a string.

