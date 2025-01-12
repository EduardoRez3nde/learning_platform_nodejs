import { ComponentLoader } from "adminjs";
import path from "path";
import { fileURLToPath } from "url";


const componentLoader = new ComponentLoader();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Components = {
    Dashboard: componentLoader.add("Dashboard", path.join(__dirname, "./components/Dashboard"))
}

export { componentLoader, Components }