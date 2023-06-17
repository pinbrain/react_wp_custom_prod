cd ~/react_wp_custom_prod
npm run build:prod

rm -rf ~/../var/www/production_project/html
mv ~/react_wp_custom_prod/build ~/../var/www/production_project/html