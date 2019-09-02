let PageDataRepo = require('../../client/pageDataRepository.js');

describe('PageDataRepositry unit test cases', function () {

  let baseUrl = "http://localhost:2200/";

  beforeAll(() => {

  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('getDataRangeFromServer(0,1) -> returns reords with indexses [0,1], calls getPageFromServer 1 time with pageIndex 0', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(0, 1);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(1);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(0);

  })

  test('getDataRangeFromServer(0,49) -> returns reords with indexses [0,49], calls getPageFromServer 2 time with pageIndex 0 ,1', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(0, 49);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(2);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(0);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(1);

  })

  test('getDataRangeFromServer(0,49) -> returns reords with indexses [5,51], calls getPageFromServer 3 time with pageIndex 0 ,1,2', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(5, 51);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(3);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(0);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(1);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(2);

  })

  
  test('getDataRangeFromServer(50,99) -> returns reords with indexses [50,99], calls getPageFromServer 2 time with pageIndex 2,3', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(50, 99);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(2);

    expect(_spyGetDataFromServer).toHaveBeenCalledWith(2);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(3);
    
  })

  test('getDataRangeFromServer(55,99) -> returns reords with indexses [55,99], calls getPageFromServer 2 time with pageIndex 2,3', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(55, 99);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(2);

    expect(_spyGetDataFromServer).toHaveBeenCalledWith(2);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(3);
    
  })


  // test('Page data count for Index = 0  should be 25', () => {

  //   new PageDataRepo(baseUrl).getPageFromServer(0).then((pageData) => {
  //     expect(pageData.length).toBe(25);
  //   });



  // })


  // test('Page data count for Index = 1  should be 25', function () {

  //   new PageDataRepo(baseUrl).getPageFromServer(1).then(function (pageData) {
  //     expect(pageData.length).toBe(25);
  //   });
  // })

  // test('Check Unique data exists after each request to getPageFromServer, index = 0 and index = 1 response dataset should not have repeating records', function () {

  //   new PageDataRepo(baseUrl).getPageFromServer(0).then(function (pageData) {

  //     let indexZeroPageData, indexOnePageData;

  //     indexOnePageData = new Set(pageData);

  //     expect(pageData.length).toBe(25);

  //     repo.getPageFromServer(1).then(function (pageData) {

  //       indexZeroPageData = new Set(pageData);

  //       let commonRecords = new Set([...indexZeroPageData].filter(x => indexOnePageData.has(x)));

  //       expect(pageData.length).toBe(25);

  //       //Difference betwen index = 0 and index =1 should be zero
  //       expect(Array.from(commonRecords).length).toBe(0);
  //     });
  //   });


  // })

  // test('getDataRangeFromServer(5,51) page count should be 75 ', function () {

  //   new PageDataRepo(baseUrl).getDataRangeFromServer(5, 51).then(function (pageData) {

  //     let pageDataCount = 0;

  //     Array.from(pageData, (m, i) => pageDataCount += m.length);

  //     expect(pageDataCount).toBe(75);

  //   });

  // })

  // test('For request getDataRangeFromServer(5,51), getPageFromServer calledTimes = 3 ', async () => {

  //   let _repo = new PageDataRepo(baseUrl);
  //   let _spyGetDataFromServer = jest.fn();
  //   _spyGetDataFromServer = spyOn(_repo, "getPageFromServer");

  //   await _repo.getDataRangeFromServer(5, 51);
  //   expect(_spyGetDataFromServer).toHaveBeenCalledTimes(3);
  // })

  // test('For request getDataRangeFromServer(5,51), getDataRangeFromServer calledTimes = 1 ', async () => {

  //   let _repo = new PageDataRepo(baseUrl);
  //   let _spyGetDataRangeFromServer = jest.fn();

  //   _spyGetDataRangeFromServer = spyOn(_repo, "getDataRangeFromServer");

  //   await _repo.getDataRangeFromServer(5, 51);

  //   expect(_spyGetDataRangeFromServer).toHaveBeenCalledTimes(1);

  // })


});
