import express from 'express';
import cors from 'cors';
import routes from "./routes";
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

const app = express();
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(cors());
app.use(routes);

export default app;

