// fs module: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
// path module: https://nodejs.org/api/path.html#path_path_join_path


var path = require('path');
var fs = require('fs');
var jsonPath = path.join(__dirname, '/../database/dinosaurs.json');

exports.dinosaurs = function (req, res) {
	fs.readFile(jsonPath, 'utf-8', function (err, data) {
	    if (err) { throw err; };
	    res.send(JSON.parse(data))
	});
};

exports.addDinosaurs = function (req, res) {
	fs.readFile(jsonPath, 'utf-8', function (err, data) {
	    if (err) { throw err; };
	    var dinosaurs = JSON.parse(data);
	    
	    dinosaurs.push(req.body);

		fs.writeFile(jsonPath, JSON.stringify(dinosaurs), function (err, data) {
			if (err) { throw err; };
			res.send(dinosaurs);
		});
	});
};