import express from 'express';
import path from 'path';
import con from './database/dbconnection';
import results from './services/results';
import webpackConfig from '../webpack.config';
import webpack from 'webpack';

//Using Express framework
let app = express()


var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use('/dist', express.static(path.join(__dirname, '/../dist')))

const data = results;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

app.listen(3000, () =>  {
  console.log('Example app listening on port 3000!')
})
