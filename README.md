# Berikut adalah langkah-langkah umum untuk membuat Swagger pada proyek JavaScript dan PHP

## Langkah 1 : 
Install Swagger JSDoc menggunakan npm:
```bash
npm install swagger-jsdoc --save

```
## langkah 2 : 
Konfigurasi Swagger JSDoc:
```javascript
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'Your API description',
    },
  },
  apis: ['./path/to/your/routes/*.js'], // Ganti dengan path ke file-file Anda
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

```
## Langkah 3 : 
Install swagger-ui-express package
```bash
npm install swagger-ui-express
```
Dalam file aplikasi Express Anda:

```javascript
const express = require('express');
const swaggerSpec = require('./swagger'); // Sesuaikan dengan path file Anda
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ... definisikan rute Anda ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```

## langkah 4 : 

Tambahkan json swagger untuk membuat dokumentasi API pada endpoint /sum yang telah dibuat sebelumnya
```json
{
  "openapi" : "3.0.1",
  "info" : {
    "title" : "Swagger Simple Template",
    "description" : "Sum API Documentation",
    "version" : "1.0.0"
  },
  "servers" : [ {
    "url" : "http://localhost:3000"
  } ],
  "tags" : [
    {
      "name" : "POST",
      "description" : "POST tag description example"
    }
  ],
  "paths" : {
    "/sum/" : {
      "post" : {
        "description" : "Example post description",
        "tags" : [ "POST" ],
        "requestBody" : {
          "content" : {
            "application/json" : {
              "schema" : {
                "$ref" : "#/components/schemas/body"
              },
              "examples" : {
                "Body Request" : {
                  "value": {
                    "firstNumber": 1,
                    "secondNumber": 2
                  }
                },
                "Body Request Lainnya" : {
                  "value": {
                    "firstNumber": 1,
                    "secondNumber": 3
                  }
                }
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "description" : "Sukses",
            "content" : {
              "application/json; charset=utf-8" : {
                "schema" : {
                  "$ref" : "#/components/schemas/response"
                },
                "examples" : {
                  "response": {
                    "value": {
                      "sum": 3,
                      "message": "Sukses"
                    }
                  }
                }
              }
            }
          },
          "400" : {
            "description" : "Bad Request"
          }
        },
        "servers" : [ {
          "url" : "http://localhost:3000"
        } ]
      },
      "servers" : [ {
        "url" : "http://localhost:3000"
      } ]
    }
  },
  "components": {
    "schemas": {
      "body": {
        "type": "object",
        "properties": {
          "firstNumber": {
            "type": "integer"
          },
          "secondNumber": {
            "type": "integer"
          }
        }
      },
      "response": {
        "type": "object",
        "properties": {
          "sum": {
            "type": "integer"
          },
          "message": {
            "type": "string"
          }
        }
      }
    }
  }
}
``` 
## Langkah 5 :
Lakukan indexing file swagger pada file app.js agar dapat diakses pada endpoint yang kita tentukan.
```Js
import express from 'express';
const sumRouter = require('./routes/sum');
import bodyParser from 'body-parser';
const swaggerUi = require('swagger-ui-express');
const swaggerSumDocument = require ('../swaggerSumDocument');

const app = express();

app.use(bodyParser.json());
app.use('/sum', sumRouter);
app.use('/api-docs-sum', swaggerUi.serve, swaggerUi.setup(swaggerSumDocument));

export default app;
```
Done!
Dokumentasi yang kita buat telah dapat diakses melalui localhost:3000/api-docs-sum dan kita juga dapat melakukan pemanggilan API pada endpoint swagger tersebut.
## [Contributing](CONTRIBUTING.md)

## More on OpenApi & Swagger

- https://swagger.io
- https://www.openapis.org
- [OpenApi Documentation](https://swagger.io/docs/)
- [OpenApi Specification](http://swagger.io/specification/)
- [Related projects](docs/related-projects.md)