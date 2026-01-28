# Filtering objects based on present/missing key

## Find users that have a non-empty `name` field.

```sh
$ echo '{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "false"
    },
    {
      "name": true
    },
    {
      "wrong_name": "Jim"
    },
    {
      "name": ""
    }
  ]
}' | dasel -r json 'users.all().filter(name?.len())'
{
  "name": "Tom"
}
{
  "name": "false"
}
{
  "name": true
}
```

## Find users with an empty or missing `name` field.

```sh
$ echo '{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "false"
    },
    {
      "name": true
    },
    {
      "wrong_name": "Jim"
    },
    {
      "name": ""
    }
  ]
}' | dasel -r json 'users.all().filter(not(name?.len()))'
{
  "wrong_name": "Jim"
}
{
  "name": ""
}
```

## Find users with a `name` field

```sh
$ echo '{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "false"
    },
    {
      "name": true
    },
    {
      "wrong_name": "Jim"
    },
    {
      "name": ""
    }
  ]
}' | dasel -r json 'users.all().filter(keys().all().filter(equal(.,name)))'
{
  "name": "Tom"
}
{
  "name": "false"
}
{
  "name": true
}
{
  "name": ""
}
```

## Find users without a `name` field

```shell
$ echo '{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "false"
    },
    {
      "name": true
    },
    {
      "wrong_name": "Jim"
    },
    {
      "name": ""
    }
  ]
}' | dasel -r json 'users.all().filter(not(keys().all().filter(equal(.,name)).len()))'
{
  "wrong_name": "Jim"
}
```
