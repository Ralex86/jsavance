yarn install;
node_modules/.bin/webpack --progress --hide-modules;
docker run -p 3306:3306 --name docker-mysql -e MYSQL_ROOT_PASSWORD=PASSWORD -e MYSQL_DATABASE=moviedb -d mysql:5.7;
echo "waiting for the container to be ready...";
sleep 10s;
docker exec -i docker-mysql mysql -uroot -pPASSWORD moviedb < database/migration.sql;
node ./index.js;
