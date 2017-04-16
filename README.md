# Quickvan - API

## Instalação

```
git clone git@github.com:quickvan/quickvan-nodejs-api.git
cd quickvan-nodejs-api
npm install
npm run nodemon
```

## Rotas

- Empresas

  ```
  [GET]     /api/companies
  [GET]     /api/companies/:_id
  [POST]    /api/companies
  [PUT]     /api/companies/:id
  [DELETE]  /api/companies/:id
  ```

- Veículos

  ```
  [GET]     /api/vehicles
  [GET]     /api/vehicles/:_id
  [POST]    /api/vehicles
  [PUT]     /api/vehicles/:id
  [DELETE]  /api/vehicles/:id
  ```

- Passageiros/Clientes

  ```
  [GET]     /api/passengers
  [GET]     /api/passengers/:_id
  [POST]    /api/passengers
  [PUT]     /api/passengers/:id
  [DELETE]  /api/passengers/:id
  ```

- Viagens

  ```
  [GET]     /api/travels
  [GET]     /api/travels/:_id
  [POST]    /api/travels
  [PUT]     /api/travels/:id
  [DELETE]  /api/travels/:id
  ```
