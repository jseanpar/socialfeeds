Para instalar la base de datos:

correr localmente mysql en mi caso use phpmyadmin
crear la base de datos con nombre 'cencosud'
importar archivo mysql con nombre 'cencosud.sql' ubicado en la carpeta Cencosud\BACK-NODE-MYSQL\backup\

para correr node ir a:

cd Cencosud\back-node-mysql\
npm install
Ejecutar comando: npm run start 
node levanta en http://localhost:9000
en la carpeta Cencosud\back-node-mysql\postman\Cencosud.postman_collection.json se encuentran los endpoints 

Cencosud\back-node-mysql\.env
para configurar la conexion a mysql hay un archivo .env en la raiz del proyecto


El Frontend en react y redux para correr react ir a:

cd Cencosud\react-frontend\src
npm install
Ejecutar comando: npm start
react levanta en http://localhost:3000

PD: ocupe CORS Unblock para probar en dev