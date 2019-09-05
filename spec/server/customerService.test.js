let request = require('request');
let server_url = 'http://localhost:2200/';
let customerApi = require('../../server/customerService.js')

describe('Customer API Unit test',function(){
    
    describe('Customer API status code 200',function(){
        
        it('Status code 200', async function(done){
            await request.get(server_url,function(error,response,body){
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it('API GetPageData status code 200',async function(done){
            await request.get(server_url +"GetPageData/?index=2",function(error,response,body){
                expect(response.statusCode).toBe(200);
                done();
            });
        });

    });
})