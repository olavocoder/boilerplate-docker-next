#!/usr/bin/env bash

# Install plugins
echo "Install Wordpress"
cd /var/www/html && composer install

echo "WP-CONFIG..."
cp /var/www/configs/wp-config.php /var/www/html/wp-config.php

echo "Giving permissions to theme folder..."
chmod -R 777 /var/www/html/wp-content/themes/raccoon

# run apache2
apache2-foreground