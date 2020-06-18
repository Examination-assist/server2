# TexteditTranslate

##### Step 1: run client side
  ```
  cd client
  yarn 
  yarn start
  ```
##### Step 2: run server side
   ```
 cd server
  cd laravel
  composer install 
  php artisan storage:link
  php artisan migrate
  php artisan db:seed
  php artisan serve
  ```
##### Step 3: setup DB
   ```
 open .env in server/laravel/
  set:
  DB_HOST
  DB_PORT
  DB_DATABASE
  DB_USERNAME
  DB_PASSWORD
  according to your MySQL setup
   ```
##### Step 4: Run
  ```
  open browser in localhost:xxxx
  by default port: 3000
cd client
  yarn 
  yarn start
  ```
