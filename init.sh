cd docker
docker-compose up -d

sleep 10

docker exec -ti web ./yii migrate --interactive=0

cd ..
cd client
npm ci
npm run build

sleep 1

echo ""
echo "App available at http://localhost:8080"