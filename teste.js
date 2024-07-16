import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Configuração para resolver __dirname e __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregamento do arquivo .env
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Verificação das variáveis de ambiente
console.log(process.env.TEST_VARIABLE); // Deve imprimir "hello"
console.log(process.env.PORT); // Deve imprimir "3000"
