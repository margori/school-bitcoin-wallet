echo ""
echo "Installing server packages..."
echo ""
cd server
composer install
cd ..

echo ""
echo "Installing client packages and build..."
echo ""
cd client
npm ci
npm run build
cd ..

echo ""
echo "Starting docker orchestra..."
echo ""
cd docker

docker-compose up -d
sleep 10
docker exec -ti web ./yii migrate --interactive=0
sleep 1

echo "... Initialization done."
echo ""
echo "App available at http://localhost:8080"