# JQ to Dasel

The follow examples show a set of [jq](https://github.com/stedolan/jq) commands and the equivalent in dasel.

### **Select a single value**


### JQ


```shell
echo '{"name": "Tom"}' | jq '.name'
"Tom"
```



### Dasel


```shell
echo '{"name": "Tom"}' | dasel -p json '.name'
"Tom"
```


### **Select a nested value**


### JQ


```shell
echo '{"user": {"name": "Tom", "age": 27}}' | jq '.user.age'
27
```



### Dasel


```shell
echo '{"user": {"name": "Tom", "age": 27}}' | dasel -p json '.user.age'
27
```


### **Select an array index**


### JQ


```shell
echo '[1, 2, 3]' | jq '.[1]'
2
```



### Dasel


```shell
echo '[1, 2, 3]' | dasel -p json '.[1]'
2
```


### **Append to an array of strings**


### JQ


```shell
echo '["a", "b", "c"]' | jq '. += ["d"]'
[
  "a",
  "b",
  "c",
  "d"
]
```



### Dasel


```shell
echo '["a", "b", "c"]' | dasel put string -p json -s '.[]' d
[
  "a",
  "b",
  "c",
  "d"
]
```


### **Update a string value**


### JQ


```shell
echo '["a", "b", "c"]' | jq '.[1] = "d"'
[
  "a",
  "d",
  "c"
]
```



### Dasel


```shell
echo '["a", "b", "c"]' | dasel put string -p json '.[1]' d
[
  "a",
  "d",
  "c"
]
```


### **Update an int value**


### JQ


```shell
echo '[1, 2, 3]' | jq '.[1] = 5'
[
  1,
  5,
  3
]
```



### Dasel


```shell
echo '[1, 2, 3]' | dasel put int -p json '.[1]' 5
[
  1,
  5,
  3
]
```


### **Overwrite an object**


### JQ


```shell
echo '{"user": {"name": "Tom", "age": 27}}' | jq '.user = {"name": "Frank", "age": 25}'
{
  "user": {
    "name": "Frank",
    "age": 25
  }
}
```



### Dasel put object


```shell
echo '{"user": {"name": "Tom", "age": 27}}' | dasel put object -p json -t string -t int '.user' name=Frank age=25
{
  "user": {
    "age": 25,
    "name": "Frank"
  }
}
```



### Dasel put document


```shell
echo '{"user": {"name": "Tom", "age": 27}}' | dasel put document -p json '.user' '{"name": "Frank", "age": 25}'
{
  "user": {
    "age": 25,
    "name": "Frank"
  }
}
```


### **Append to an array of objects**


### Bash


```shell
echo '{"users": [{"name": "Tom"}]}' | jq '.users += [{"name": "Frank"}]'
{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Frank"
    }
  ]
}
```



### Dasel put object


```shell
echo '{"users": [{"name": "Tom"}]}' | dasel put object -p json -t string '.users.[]' name=Frank
{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Frank"
    }
  ]
}
```



### Dasel put document


```shell
echo '{"users": [{"name": "Tom"}]}' | dasel put document -p json '.users.[]' '{"name":"Frank"}'
{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Frank"
    }
  ]
}
```

