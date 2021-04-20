
## Buscar temperatura por cidades

**Route**: /get-weather  
**Method**: GET

**Query**: 

```
{
  cities: string[]
}
```

**Success Response**:

```
{
  data: {
    weatherCities: [
      {
        city: string,
        temp: number,
        tempMin: number,
        tempMax: number,
        sunrise: number,
        sunset: number
      }
    ]
  },
  status: boolean,
  message: string
}
```