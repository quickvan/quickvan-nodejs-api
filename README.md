# Quickvan - API

Protótipo da API REST utilizada nas aplicações web e mobile da QuickVan.

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
  [GET]     /api/companies/:id
  [POST]    /api/companies
  [PUT]     /api/companies/:id
  [DELETE]  /api/companies/:id
  ```

- Veículos

  ```
  [GET]     /api/vehicles
  [GET]     /api/vehicles/:id
  [POST]    /api/vehicles
  [PUT]     /api/vehicles/:id
  [DELETE]  /api/vehicles/:id
  ```

- Passageiros/Clientes

  ```
  [GET]     /api/passengers
  [GET]     /api/passengers/:id
  [POST]    /api/passengers
  [PUT]     /api/passengers/:id
  [DELETE]  /api/passengers/:id
  ```

- Viagens

  ```
  [GET]     /api/travels
  [GET]     /api/travels/:id
  [POST]    /api/travels
  [PUT]     /api/travels/:id
  [DELETE]  /api/travels/:id
  ```
