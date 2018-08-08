# WeihanLi-homepage

WeihanLi's homepage powered by angular.

## Develop

run `ng serve` on the shell or command line

## Docker support

### Build docker image

``` bash
docker build -t weihanli-homepage .
```

### Run docker image

``` bash
# specific export 5200
docker run -p 5200:80 --name weihanli-homepage-demo weihanli-homepage

# whatever exported port
docker run -P --name weihanli-homepage-demo weihanli-homepage
```

## Contact

Contact me: weihanli@outlook.com