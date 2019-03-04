#!/bin/sh -x
docker run -p 3306:3306 --name docker-mysql -e MYSQL_ROOT_PASSWORD=PASSWORD -e MYSQL_DATABASE=moviedb -d mysql:5.7;
yarn install;
node_modules/.bin/webpack --progress --hide-modules;
echo "waiting for the container to be ready...";
sleep 10s;
docker exec -i docker-mysql mysql --user=root --password=PASSWORD moviedb < database/migration.sql;
node ./index.js;
