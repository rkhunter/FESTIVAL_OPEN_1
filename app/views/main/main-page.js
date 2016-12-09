"use strict";
var imageSource = require("image-source");
var fs = require("file-system");
var observableArrayModule = require("data/observable-array");
function pageLoaded(args) {
    var page = args.object;
    var image = page.getViewById('image');
    imageSource.fromUrl("https://httpbin.org/image/jpeg")
        .then(function (res) {
        image.imageSource = res;
    }, function (error) {
        throw new Error("Error loading image: " + error);
    });
    var list = page.getViewById('list');
    var jsonData;
    var array;
    fs.knownFolders.currentApp()
        .getFile('models/sample.json')
        .readText()
        .then(function (content) {
        try {
            jsonData = JSON.parse(content);
            array = new observableArrayModule.ObservableArray(jsonData["data"]);
            list.bindingContext = { myItems: array };
        }
        catch (err) {
            throw new Error('Could not parse JSON file');
        }
    }, function (error) {
        throw new Error('Could not read JSON file');
    });
    page.bindingContext = {
        myItems: []
    };
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map