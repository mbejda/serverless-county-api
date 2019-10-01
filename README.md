<p align="center">
  <img width="100%" height="auto" src="https://github.com/mbejda/serverless-county-api/blob/master/images/logo.png?raw=true">
</p>

# :coffee: Serverless County API


Serverless API example that returns a GeoJSON containing county boundary coordinates.
It has been designed to work out of the box with minimum configurations and has a small dependency footprint.
:package: Dataset is included. 

### Dependencies
- [Serverless CLI](https://www.npmjs.com/package/serverless)


```
git clone <repo>
npm install
sls deploy
```

# :notebook: API Example
### County Boundaries
```
/api/{state}/county/boundary?name={county}
```

Example Response
```json
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

You can view it in action [here](https://rapidapi.com/not.milos.bejda/api/county-api). <br/>

You can find me on :bird: Twitter -> [@notmilobejda](https://twitter.com/notmilobejda) <br/>
Checkout my blog [mbejda.com](https://mbejda.com). <br/>

**Enjoy <3**
