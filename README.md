<p align="center">
  <img width="88" height="400" src="">
</p>

#:coffee: Serverless County API


Serverless API that returns a GeoJSON containing county and state boundary coordinates.
It has been designed to work out of the box with minimum configurations and has a small dependency footprint.
:package: Datasets are included. 

### Dependencies
- ![Serverless CLI](https://www.npmjs.com/package/serverless)


```
git clone <repo>
npm install
sls deploy
```

#:notebook: API Example
### County Boundaries
```
/api/{state}/county/boundary?name={county}
```
### State Boundaries
```
/api/{state}/boundary
```

Example Response
```
{
  "response": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -81.65738999999999,
              28.553122
            ],
            [
              -81.657394,
              28.553157
            ],
            [
              -81.657397,
              28.553178
            ],
            .....
```
<hr/>

You can view it in action ![here](https://rapidapi.com/not.milos.bejda/api/county-api). <br/>

You can find me on :bird: twitter ![@notmilobejda](https://twitter.com/notmilobejda) <br/>
Checkout my blog ![mbejda.com](https://mbejda.com). <br/>

**Enjoy <3**
