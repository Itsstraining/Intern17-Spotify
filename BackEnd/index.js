const express = require('express'),
//     bodyParser = require('body-parser'),
//     path = require('path'),
//     fs = require('fs'),
    app = express();

// const SoundCloudAudio = require('soundcloud-audio');

// // create new instance of audio
// // clientId is optional but without it you cannot play tracks directly from SoundCloud API
// const scPlayer = new SoundCloudAudio('YOUR_CLIENT_ID');

// // if you have a SoundCloud api stream url you can just play it like that
// scPlayer.play({
//     streamUrl: 'http://localhost:3000/:name'
// });


// // app.use('/mp3', express.static(__dirname + '/mp3'));

// app.get('/', (req, res) => {
//     console.log(req.headers.range)
// })

// app.get('/:name', (req, res) => {
//     const file = __dirname + '/CaoOc20-BRayDatGMasewKICM-6008352.mp3';
//     const stat = fs.statSync(file);
//     const total = stat.size;
//     filePath = 'CaoOc20-BRayDatGMasewKICM-6008352.mp3';
//     if (req.headers.range) {
//         var range = req.headers.range;
//         var parts = range.replace(/bytes=/, "").split("-");
//         var partialstart = parts[0];
//         var partialend = parts[1];
//         var start = parseInt(partialstart, 10);
//         var end = partialend ? parseInt(partialend, 10) : total - 1;
//         var chunksize = (end - start) + 1;
//         var readStream = fs.createReadStream(filePath, { start: start, end: end });
//         res.writeHead(206, {
//             'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
//             'Accept-Ranges': 'bytes', 'Content-Length': chunksize,
//             'Content-Type': 'video/mp3'
//         });
//         readStream.pipe(res);
//     } else {
//         res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mp3' });
//         fs.createReadStream(file).pipe(res);
//     }
// });

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/:name', (req, res) => {
    let result = req.params.name;
    res.send({ 'rest': result });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

