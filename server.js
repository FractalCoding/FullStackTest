const express = require('express');
const app = express();
const port = 5555;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/sketch.js');
});

app.listen(port, function() {
  console.log(`Server running on port ${port}. If webpage does not appear, try restarting the docker container using the following command: \ndocker run -p 8080:${port} [IMAGE-ID]\nor otherwise specify your own HTML and script files with its own port in your own Dockerfile.`);
});
