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
