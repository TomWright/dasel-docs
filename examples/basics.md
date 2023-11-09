# Basics

## Select

```
$ echo '{"name":"Tom"}' | dasel -r json 'name'
"Tom"
```

## Put

```
$ echo '{"name":"Tom"}' | 
  dasel put -r json -t string -v 'contact@tomwright.me' 'email'
{
  "email": "contact@tomwright.me",
  "name": "Tom"
}
```

## Delete

```
$ echo '{
  "email": "contact@tomwright.me",
  "name": "Tom"
}' | dasel delete -r json 'email'
{
  "name": "Tom"
}
```
