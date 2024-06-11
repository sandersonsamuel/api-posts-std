import app from './app'
import {configDotenv} from "dotenv";

configDotenv()
const PORT = process.env.PORT || 3000

app.listen(3000, () => {
    console.log('Server running on port in ' + `http://localhost:${PORT}`)
})