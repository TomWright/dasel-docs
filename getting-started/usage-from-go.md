# Usage from Go

## Introduction

The dasel CLI is a thin wrapper around dasel's Go API. Your application can use the same API to query, transform, and modify structured data.

## Installation

```bash
go get github.com/tomwright/dasel/v3
```

## External API

Dasel exposes three main functions in the root `dasel` package:

* `Select` - Query data and receive results as native Go types (`any`).
* `Query` - Query data and receive results as `*model.Value` types (preserves ordering and metadata).
* `Modify` - Run a query that modifies the given data in-place.

All three accept variadic `execution.ExecuteOptionFn` options for features like variables.

### Parsing formats

You must import any format parsers you need. The parsers register themselves via `init()`:

```go
import (
    _ "github.com/tomwright/dasel/v3/parsing/json"
    _ "github.com/tomwright/dasel/v3/parsing/yaml"
    _ "github.com/tomwright/dasel/v3/parsing/toml"
    _ "github.com/tomwright/dasel/v3/parsing/xml"
    _ "github.com/tomwright/dasel/v3/parsing/csv"
    _ "github.com/tomwright/dasel/v3/parsing/ini"
    _ "github.com/tomwright/dasel/v3/parsing/hcl"
)
```

Only import the formats you actually use.

## Examples

Up to date examples are maintained within the GitHub repository under [api\_example\_test.go](https://github.com/TomWright/dasel/blob/master/api_example_test.go).

### Select: query with native Go types

Use `Select` when you want results as plain Go values (`string`, `int`, `map[string]any`, etc).

```go
package main

import (
    "context"
    "fmt"

    "github.com/tomwright/dasel/v3"
)

func main() {
    myData := map[string]any{
        "users": []map[string]any{
            {"name": "Alice", "age": 30},
            {"name": "Bob", "age": 25},
            {"name": "Tom", "age": 40},
        },
    }

    result, count, err := dasel.Select(
        context.Background(),
        myData,
        `users.filter(age > 27).map(name)...`,
    )
    if err != nil {
        panic(err)
    }

    fmt.Printf("Found %d results:\n", count)
    for _, r := range result.([]any) {
        fmt.Println(r)
    }

    // Output:
    // Found 2 results:
    // Alice
    // Tom
}
```

### Query: query with model.Value types

Use `Query` when you need to preserve key ordering or access metadata.

```go
package main

import (
    "context"
    "fmt"

    "github.com/tomwright/dasel/v3"
)

func main() {
    myData := map[string]any{
        "name": "Tom",
        "age":  30,
    }

    results, count, err := dasel.Query(
        context.Background(),
        myData,
        `name`,
    )
    if err != nil {
        panic(err)
    }

    fmt.Printf("Found %d results\n", count)
    for _, v := range results {
        str, _ := v.StringValue()
        fmt.Println(str)
    }

    // Output:
    // Found 1 results
    // Tom
}
```

### Modify: update data in-place

Use `Modify` to change values within an existing data structure. The data must be passed as a pointer.

```go
package main

import (
    "context"
    "fmt"

    "github.com/tomwright/dasel/v3"
)

func main() {
    myData := map[string]any{
        "user": map[string]any{
            "name": "Tom",
            "age":  30,
        },
    }

    _, err := dasel.Modify(
        context.Background(),
        &myData,
        `user.name`,
        "Jim",
    )
    if err != nil {
        panic(err)
    }

    fmt.Println(myData["user"].(map[string]any)["name"])

    // Output:
    // Jim
}
```

### Reading and writing structured data (format conversion)

Use parsers to read bytes in one format and write them in another.

```go
package main

import (
    "fmt"

    "github.com/tomwright/dasel/v3/parsing"
    _ "github.com/tomwright/dasel/v3/parsing/json"
    _ "github.com/tomwright/dasel/v3/parsing/yaml"
)

func main() {
    jsonInput := []byte(`{"name": "Tom", "age": 30}`)

    // Read JSON
    reader, _ := parsing.Format("json").NewReader(parsing.DefaultReaderOptions())
    value, err := reader.Read(jsonInput)
    if err != nil {
        panic(err)
    }

    // Write YAML
    writer, _ := parsing.Format("yaml").NewWriter(parsing.DefaultWriterOptions())
    yamlOutput, err := writer.Write(value)
    if err != nil {
        panic(err)
    }

    fmt.Println(string(yamlOutput))

    // Output:
    // name: Tom
    // age: 30
}
```

### Compact output

Set `Compact: true` in writer options to produce compact output with no indentation.

```go
opts := parsing.DefaultWriterOptions()
opts.Compact = true
writer, _ := parsing.Format("json").NewWriter(opts)

output, _ := writer.Write(value)
// {"name":"Tom","age":30}
```

### Using variables

Pass variables into queries using `execution.WithVariable`:

```go
package main

import (
    "context"
    "fmt"

    "github.com/tomwright/dasel/v3"
    "github.com/tomwright/dasel/v3/execution"
)

func main() {
    myData := map[string]any{
        "users": []map[string]any{
            {"name": "Alice", "age": 30},
            {"name": "Bob", "age": 25},
        },
    }

    result, _, err := dasel.Select(
        context.Background(),
        myData,
        `users.filter(age > $minAge).map(name)...`,
        execution.WithVariable("minAge", 27),
    )
    if err != nil {
        panic(err)
    }

    for _, r := range result.([]any) {
        fmt.Println(r)
    }

    // Output:
    // Alice
}
```

### Building model.Value manually

You can construct `model.Value` instances directly without parsing from bytes:

```go
import "github.com/tomwright/dasel/v3/model"

// From a Go value
value := model.NewValue(map[string]any{"key": "value"})

// Typed constructors
strVal := model.NewStringValue("hello")
intVal := model.NewIntValue(42)
mapVal := model.NewMapValue()
_ = mapVal.SetMapKey("key", model.NewStringValue("value"))

// Convert back to Go types
goVal, err := value.GoValue()
```

## Project structure

Dasel has the following main packages:

* [dasel](https://github.com/TomWright/dasel/blob/master) - The external API (`Select`, `Query`, `Modify`).
* [model](https://github.com/TomWright/dasel/tree/master/model) - A wrapper around reflection types. This is what dasel uses to access and modify data internally.
* [parsing](https://github.com/TomWright/dasel/tree/master/parsing) - Parsing implementations for each supported format. Each subdirectory contains a reader and writer.
* [execution](https://github.com/TomWright/dasel/tree/master/execution) - The implementation of all dasel features (functions, operators, etc).
* [selector](https://github.com/TomWright/dasel/tree/master/selector) - Parses dasel query strings and returns an AST used by the `execution` package.
