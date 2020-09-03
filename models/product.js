//working with files
//fs - file system;

const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(wishTitle, wishImage, wishPrice, wishDescription){
        this.title = wishTitle;
        this.image = wishImage,
        this.price = wishPrice;
        this.description = wishDescription;
    }

    saveProduct() {
        //path to the wish.json file
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );
        fs.readFile(dataPath, (error, fileContent) => {
            let products = [];
            if(!error){
                products = JSON.parse(fileContent);
            }
            products.push(new Product(this.title, this.image, this.price, this.description));

            //saving products array in json format to the file
            fs.writeFile(dataPath, JSON.stringify(products), (error) => {
                console.log(error);
            });

        });
        //before we save data to the file, we need to read it first

    }
    //to read the products.json file content
    static fetchAllProducts(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );

        fs.readFile(dataPath, (error, fileContent) => {
            //in case of  error while opening the file
            if(error){
                return callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
}