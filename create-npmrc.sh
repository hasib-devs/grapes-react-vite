echo "Enter GitHub Personal Access Token And Hit Enter: "
stty -echo
read token;
stty echo

echo "@getdokan:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=$token" >> .npmrc
