import { Page } from 'ui/page';

import imageSource = require("image-source");
import { Image } from 'ui/image';

import fs = require('file-system');
import observableArrayModule = require("data/observable-array");
import { ListView } from 'ui/list-view';

export function pageLoaded(args) {
    let page = <Page>args.object;

    let image = <Image>page.getViewById('image');

    imageSource.fromUrl("https://httpbin.org/image/jpeg")
        .then(
            (res: imageSource.ImageSource) => {
                image.imageSource = res;
            },
            (error) => {
                throw new Error("Error loading image: " + error);
            }
        )

    let list = <ListView>page.getViewById('list');
    let jsonData: JSON;
    let array;

    fs.knownFolders.currentApp()
        .getFile('models/sample.json')
        .readText()
        .then(
            (content) => {
                try {
                    jsonData = JSON.parse(content);
                    array = new observableArrayModule.ObservableArray(jsonData["data"]);
                    list.bindingContext = { myItems: array };
                } catch (err) {
                    throw new Error('Could not parse JSON file');
                }
            },
            (error) => {
                throw new Error('Could not read JSON file');
            }
        );
    page.bindingContext = {
        myItems: []
    };
}