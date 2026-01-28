# YQ to Dasel

The follow examples show a set of [yq](https://github.com/kislyuk/yq) commands and the equivalent in dasel.

### **Select a single value**


### YQ


```shell
echo 'name: Tom' | yq '.name'
"Tom"
```



### Dasel


```shell
echo 'name: Tom' | dasel -p yaml '.name'
Tom
```


### **Select a nested value**


### YQ


```shell
echo 'user:
  name: Tom
  age: 27' | yq '.user.age'
27
```



### Dasel


```shell
echo 'user:
       name: Tom
       age: 27' | dasel -p yaml '.user.age'
27
```


### **Select an array index**


### YQ


```shell
echo '- 1
- 2
- 3' | yq '.[1]'
2
```



### Dasel


```shell
echo '- 1
- 2
- 3' | dasel -p yaml '.[1]'
2
```


### **Append to an array of strings**


### YQ


```shell
echo '- a
- b
- c' | yq --yaml-output '. += ["d"]'
- a
- b
- c
- d
```



### Dasel


```shell
echo '- a
- b
- c' | dasel put string -p yaml -s '.[]' d
- a
- b
- c
- d
```


### **Update a string value**


### YQ


```shell
echo '- a
- b
- c' | yq --yaml-output '.[1] = "d"'
- a
- d
- c
```



### Dasel


```shell
echo '- a
- b
- c' | dasel put string -p yaml -s '.[1]' d
- a
- d
- c
```


### **Update an int value**


### YQ


```shell
echo '- 1
- 2
- 3' | yq --yaml-output '.[1] = 5'
- 1
- 5
- 3
```



### Dasel


```
echo '- 1
- 2
- 3' | dasel put int -p yaml -s '.[1]' 5
- 1
- 5
- 3
```


### **Overwrite an object**


### YQ


```shell
echo 'user:
  name: Tom
  age: 27' | yq --yaml-output '.user = {"name": "Frank", "age": 25}'
user:
  name: Frank
  age: 25
```



### Dasel put object


```shell
echo 'user:
  name: Tom
  age: 27' | dasel put object -p yaml -t string -t int '.user' name=Frank age=25
user:
  age: 25
  name: Frank
```



### Dasel put document


```shell
echo 'user:
  name: Tom
  age: 27' | dasel put document -p yaml -d json '.user' '{"name":"Frank","age":25}'
user:
  age: 25
  name: Frank
```


### **Append to an array of objects**


### YQ


```shell
echo 'users:
- name: Tom' | yq --yaml-output '.users += [{"name": "Frank"}]'
users:
  - name: Tom
  - name: Frank
```



### Dasel put object


```shell
echo 'users:
- name: Tom' | dasel put object -p yaml -t string '.users.[]' name=Frank
users:
- name: Tom
- name: Frank
```



### Dasel put document


```shell
echo 'users:
- name: Tom' | dasel put document -p yaml -d json '.users.[]' '{"name":"Frank"}'
users:
- name: Tom
- name: Frank
```

