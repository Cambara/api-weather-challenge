# Erros

# Bad Request (400)

```
{
  "errors": string[],
  "status": boolean,
  "message": string
}
```

-----

# Not Found Request (404)

```
{
  "status": boolean,
  "message": string
}
```

-----

# Server Error Request (500)

```
{
  "status": boolean,
  "message": string,
  "errorMessage": string
}
```