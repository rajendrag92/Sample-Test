'user strict'
let fetch = require('node-fetch');
const pageSize = 25;

class PageDataRepository {

    constructor(baseUrl) {
        this.apiBaseUrl = baseUrl;
    }

    getPageFromServer(index) {

        let getPataUrl = `${this.apiBaseUrl}GetPageData/?index=${index}`;

        return new Promise(function (resolve) {
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
                let pageData = [];

                values.forEach((data) => {
                    if (data != undefined)
                        pageData.push(...data);
                });

                resolve(pageData);
            });
        });

    }

}

module.exports = PageDataRepository;