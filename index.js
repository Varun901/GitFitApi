var express = require('express');
const app = express();
var fileupload = require ('express-fileupload');
app.use(fileupload());

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!');
})


// app.post("/upload", function(req, res, next) {
//   const file = req.files.video;
//   file.mv("./uploads/"+file.name, function(err, result) {
//     if(err)
//       throw err;
//     res.send({
//         success: true,
//       message: "Video Upload successful"
//   });
//   console.log(req.files)
  
//   });
// })

const port = process.env.PORT || 3000;
console.log(process.env.PORT)


app.listen(3000, () => {
  console.log('RESTful API server started on: ' + port);
});



// app.post("/upload", function(req, res, next) {
//   console.log(req.files)
//   res.send({
//     success: true,
//     message: "Video Upload successful"
//   })
// })

