# Usage from Go

## Introduction

The dasel CLI is a basic package that uses the dasel external API to query and modify data.

Your application can do the same.

## External API

{% hint style="info" %}
Ensure you have imported the appropriate parsing packages. [See parsing](https://github.com/TomWright/dasel/tree/master/parsing).
{% endhint %}

Dasel exposes a simple API that can be consumed by your go packages/modules.

There are three main funcs of interest:

* `Select` - Query some data and receive the results in Go types.
* `Query` - Query some data and receive the results in Dasel `model.Value` types.
  * `model.Value` is more verbose to work with, but maintains ordering and retains metadata.
  * See the [model package](https://github.com/TomWright/dasel/tree/master/model) for implementation details.
* `Modify` - Perform a query that will modify the given data in-place.

Read [api.go](https://github.com/TomWright/dasel/blob/master/api.go) for more details information.

### Processing byte data

Dasel queries generally expect `model.Value` input data. These can be constructed manually by you, or you can use dasel parsers to read structured data from JSON, YAML, etc.

```go
var inputBytes []byte // Your data
reader, _ := parsing.Format("json").NewReader(readerOptions)
inputData, _ := reader.Read()
```

Or you can use an in-memory value:

```go
inputData := model.NewValue([]string{"foo", "bar", "baz"})
```

It's worth noting that any data passed to the external API are converted to a `model.Value` internally using `model.NewValue`.

You can convert dasel values back to bytes with `parsing.Format("json").NewWriter` or back to a standard go data type with `myValue.GoValue()`.

### Parsing formats

Please note that you will have to import any dasel parser that you wish to use in your application. The Dasel CLI does this in [cmd/dasel/main.go](https://github.com/TomWright/dasel/blob/master/cmd/dasel/main.go). E.g.

```go
_ "github.com/tomwright/dasel/v3/parsing/csv"
_ "github.com/tomwright/dasel/v3/parsing/d"
_ "github.com/tomwright/dasel/v3/parsing/hcl"
_ "github.com/tomwright/dasel/v3/parsing/ini"
_ "github.com/tomwright/dasel/v3/parsing/json"
_ "github.com/tomwright/dasel/v3/parsing/toml"
_ "github.com/tomwright/dasel/v3/parsing/xml"
_ "github.com/tomwright/dasel/v3/parsing/yaml"
```

## Dasel project structure

Dasel has the following main packages:

* [dasel](https://github.com/TomWright/dasel/blob/master) - The external API.
* [model](https://github.com/TomWright/dasel/tree/master/model) - A wrapper around reflection types. This is what Dasel uses to access and modify data internally.
* [parsing](https://github.com/TomWright/dasel/tree/master/parsing) - Parsing implementations for each of the supported languages (e.g. `JSON`). Each subdirectory contains a read and writer implementation.
* [execution](https://github.com/TomWright/dasel/tree/master/execution) - The real code implementation of all dasel features.
* [selector](https://github.com/TomWright/dasel/tree/master/selector) - Parse dasel queries and returns an AST which can be used by the `execution` package.

## Examples

Up to date examples are maintained within the GitHub repository under [api\_example\_test.go](https://github.com/TomWright/dasel/blob/master/api_example_test.go).

### Selecting basic data from an in-memory map

```go
package main

import (
	"context"
	"fmt"
	"github.com/tomwright/dasel/v3"
	"github.com/tomwright/dasel/v3/execution"
)

func main() {
	// Define the data that you want to query.
	myData := map[string]any{
		"users": []map[string]any{
			{"name": "Alice", "age": 30},
			{"name": "Bob", "age": 25},
			{"name": "Tom", "age": 40},
		},
	}
	
	// Define the query to run.
	query := `users.filter(age > 27).map(name)...`
	
	// Perform the dasel query.
	selectResult, numResults, err := dasel.Select(
		context.Background(),
		myData,
		query,
	)
	if err != nil {
		panic(err)
	}
	fmt.Printf("Found %d results:\n", numResults)

	// Select usually returns an array of type any, however this may change.
	// You should validate the type assertion in real code.
	selectResults := selectResult.([]any)
	
	// Do something with the results.
	for _, result := range selectResults {
		fmt.Println(result)
	}

	// Output:
	// Found 2 results:
	// Alice
	// Tom
}

```
