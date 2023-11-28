# Using dasel as a go package

## Getting a root node

You can convert values into something usable by `dasel` with [`dasel.ValueOf`](https://github.com/TomWright/dasel/blob/09ffcb6c1f500c1a9cd231684d7830d4c6a3a2a2/value.go#L18).

```go
myValue := map[string]any{
    "name": "Tom"
}
rootNode := dasel.ValueOf(myValue)
```

It's worth mentioning that this step isn't required because the commands listed below will do this conversion internally.

## Running commands



### [Select](https://github.com/TomWright/dasel/blob/09ffcb6c1f500c1a9cd231684d7830d4c6a3a2a2/context.go#L115)

```go
func main() {
	myValue := map[string]any{
		"firstName": "Tom",
		"lastName":  "Wright",
	}
	values, err := dasel.Select(myValue, "firstName")
	if err != nil {
		log.Fatalf("could not select: %s", err)
	}

	results := values.Interfaces()
	stringResults := make([]string, len(results))
	for k, v := range results {
		stringResults[k] = fmt.Sprint(v)
	}
	fmt.Printf("select result: %s", strings.Join(stringResults, ", "))
	// select result: Tom
}
```

### [Put](https://github.com/TomWright/dasel/blob/09ffcb6c1f500c1a9cd231684d7830d4c6a3a2a2/context.go#L127C6-L127C9)

```go
func main() {
	myValue := map[string]any{
		"firstName": "Tom",
		"lastName":  "Wright",
	}
	result, err := dasel.Put(myValue, "firstName", "Hello")
	if err != nil {
		log.Fatalf("could not select: %s", err)
	}

	fmt.Printf("original value: %v\n", myValue)
	fmt.Printf("put result: %v", result.Interface())
	// original value: map[firstName:Tom lastName:Wright]
	// put result: map[firstName:Hello lastName:Wright]
}
```

Note that is you pass a pointer, the original value also gets updated.

```go
func main() {
    myValue := map[string]any{
       "firstName": "Tom",
       "lastName":  "Wright",
    }
    result, err := dasel.Put(&myValue, "firstName", "Hello")
    if err != nil {
       log.Fatalf("could not select: %s", err)
    }

    fmt.Printf("original value: %v\n", myValue)
    fmt.Printf("put result: %v", result.Interface())
    // original value: map[firstName:Hello lastName:Wright]
    // put result: map[firstName:Hello lastName:Wright]
}
```

### [Delete](https://github.com/TomWright/dasel/blob/09ffcb6c1f500c1a9cd231684d7830d4c6a3a2a2/context.go#L143)

```go
func main() {
	myValue := map[string]any{
		"firstName": "Tom",
		"lastName":  "Wright",
	}
	result, err := dasel.Delete(myValue, "firstName")
	if err != nil {
		log.Fatalf("could not select: %s", err)
	}

	fmt.Printf("original value: %v\n", myValue)
	fmt.Printf("put result: %v", result.Interface())
	// original value: map[firstName:Tom lastName:Wright]
	// put result: map[lastName:Wright]
}
```

Note that if you pass a pointer, the original value also gets updated.

```go
func main() {
	myValue := map[string]any{
		"firstName": "Tom",
		"lastName":  "Wright",
	}
	result, err := dasel.Delete(&myValue, "firstName")
	if err != nil {
		log.Fatalf("could not select: %s", err)
	}

	fmt.Printf("original value: %v\n", myValue)
	fmt.Printf("put result: %v", result.Interface())
	// original value: map[lastName:Wright]
	// put result: map[lastName:Wright]
}
```
