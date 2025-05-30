FROM php:7.3-cli

RUN apt-get update && apt-get install -y unzip git
WORKDIR /app
COPY . .
RUN curl -sS https://getcomposer.org/installer | php
RUN php composer.phar install

CMD ["php", "-S", "0.0.0.0:9000", "server.php"]