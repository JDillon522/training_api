# TRAINING API
Hosted at `http://training-api-pgh.herokuapp.com/`

## Users
### GET `/users`
Returns an array of objects.
```
[
  {
    "id": 1,
    "first_name": "Gomer",
    "last_name": "Pyle",
    "email": "jellyDoughnut@gmail.com"
  },
  {
    "id": 2,
    "first_name": "Thor",
    "last_name": "OdinSon",
    "email": "mjolnir@gmail.com"
  }
]
```

### GET `/users/:user_id`
Returns a single user object by its id.
```
{
  "id": 2,
  "first_name": "Thor",
  "last_name": "OdinSon",
  "email": "mjolnir@gmail.com"
}
```

### POST `/users`
Adds a user to the database. Submit data according to the following schema:
```
{
  "first_name": "Loki",
  "last_name": "NotOdinSon",
  "email": "daddyIssues@gmail.com"
}
```

### PUT `/users/:user_id`
Updates a user in the database. Submit data according to the following schema:
```
{
  "first_name": "Ragnar",
  "last_name": "Lothbrok",
  "email": "king@gmail.com"
}
```

### DELETE `/users/:user_id`
Deletes a user in the database by its id.
