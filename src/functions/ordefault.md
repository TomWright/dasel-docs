# OrDefault

Accepts 2 arguments.

Or default allows you to use another value or selector as a backup when the expected value isn't present.

## Examples

### Simple field selection

```
$ echo '{"name":"Tom","email":"contact@tomwright.me"}' | dasel -r json 'orDefault(phone,string(N/A))'           
"N/A"
```

### Creating a new map with defaults

```
$ echo '[
  {
    "name": "Tom",
    "email": "contact@tomwright.me"
  },
  {
    "name": "Jim",
    "phone": "+441234567890"
  }
]' | go run cmd/dasel/main.go -r json 'all().mapOf(name,name,email,orDefault(email,string(N/A)),phone,orDefault(phone,string(N/A)))'           
{
  "email": "contact@tomwright.me",
  "name": "Tom",
  "phone": "N/A"
}
{
  "email": "N/A",
  "name": "Jim",
  "phone": "+441234567890"
}

```
