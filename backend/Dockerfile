FROM wordpress:apache

# Install linux utilities packages (uncomment line)
RUN apt update && apt install -y nano python3-certbot-apache curl

# Enable ssl
RUN a2enmod ssl

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy WP files
COPY ./wordpress /html

# Copy wp-config
COPY ./configs/wp-config.php /var/www/configs/wp-config.php

# Custom entrypoint
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

ENTRYPOINT ["docker-entrypoint.sh"]