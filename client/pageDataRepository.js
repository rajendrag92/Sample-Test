'user strict'
let fetch = require('node-fetch');
const pageSize = 25;

class PageDataRepository {

    constructor(baseUrl) {
        this.apiBaseUrl = baseUrl;
    }

    getPageFromServer(index) {

        let getPataUrl = `${this.apiBaseUrl}GetPageData/?index=${index}`;

        return new Promise(resolve => {
            fetch(getPataUrl)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                });
        });
    }

    getDataRangeFromServer(startIndex, endIndex) {

        return new Promise(resolve => {

            let startPageIndex = Math.floor(startIndex / pageSize);
            let endPageIndex = Math.floor(endIndex / pageSize);
            let pageRequests = [];

            while (startPageIndex <= endPageIndex) {
                pageRequests.push(startPageIndex);
                startPageIndex++;
            }

            let pageDataValues = Array.from(pageRequests, (x, i) => this.getPageFromServer(x));

            Promise.all(pageDataValues).then(function (values) {
                let pageData = [...Array(startIndex)];

                values.forEach((data) => {
                    if (data != undefined)
                        pageData.push(...data);
                });

                let dataSlice = pageData.slice(startIndex, endIndex + 1); 
                
                resolve(dataSlice);
            });
        });

    }

}

module.exports = PageDataRepository;