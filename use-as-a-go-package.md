# Use as a go package

Dasel can be imported and used just like any other go package. This can be very useful if you need to manipulate data from your own applications.

## Import

As with any other go package, just use `go get`.

```bash
go get github.com/tomwright/dasel
```

## Usage

Once imported you do something like the following:

```go
package main
import (
    "encoding/json"
    "fmt"
    "github.com/tomwright/dasel"
)

func main() {
    var data interface{}
    _ = json.Unmarshal([]byte(`[{"name": "Tom"}, {"name": "Jim"}]`), &data)

    rootNode := dasel.New(data)

    result, _ := rootNode.Query(".[0].name")
    printNodeValue(result) // Tom

    results, _ := rootNode.QueryMultiple(".[*].name")
    printNodeValue(results...) // Tom\nJim

    _ = rootNode.Put(".[0].name", "Frank")
    printNodeValue(rootNode) // [map[name:Frank] map[name:Jim]]

    _ = rootNode.PutMultiple(".[*].name", "Joe")
    printNodeValue(rootNode) // [map[name:Joe] map[name:Joe]]

    outputBytes, _ := json.Marshal(rootNode.InterfaceValue())
    fmt.Println(string(outputBytes)) // [{"name":"Joe"},{"name":"Joe"}]
}

func printNodeValue(nodes ...*dasel.Node) {
    for _, n := range nodes {
        fmt.Println(n.InterfaceValue())
    }
}
```

From then on the rest of the docs and comments should be enough to get you going.

Just know that when using the command-line tool the `-m`,`--multiple` flag tells dasel to use `QueryMultiple`/`PutMultiple` instead of `Query`/`Put`.

If the information provided here isn't good enough please raise an issue/discussion.

## Struct types

As of `v1.25.0` dasel supports dasel nodes containing struct values.

[Example usage](https://github.com/TomWright/dasel/blob/145555353236caf73607d3eb07132c8efe842db1/node\_test.go#L681):

```go
type user struct {
    Name string
    Age  int
}
value := []user{
    {
        Name: "Tom",
        Age:  27,
    },
    {
		Name: "Jim",
        Age:  27,
    },
    {
        Name: "Amelia",
        Age:  25,
    },
}

err := dasel.New(value).PutMultiple(".[*].Name", "Frank")
if err != nil {
    t.Errorf("unexpected query error: %s", err)
    return
}

exp := []user{
    {
        Name: "Frank",
        Age:  27,
    },
    {
        Name: "Frank",
        Age:  27,
    },
    {
        Name: "Frank",
        Age:  25,
    },
}

if !reflect.DeepEqual(exp, value) {
    t.Errorf("expected %v, got %v", exp, value)
}
```
