import Datastore from "nedb"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import fs from "fs"


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const dbDir = path.join(__dirname, "builder", "data")
const dbPath = path.join(dbDir, "data.db")


if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true })
}

const dataDb = new Datastore({ filename: dbPath, autoload: true })

export default dataDb


