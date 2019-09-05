let PageDataRepo = require('../../client/pageDataRepository.js');

describe('PageDataRepositry unit test cases', function () {

  let baseUrl = "http://localhost:2200/";

  beforeAll(() => {

  })

  afterEach(() => {
    jest.clearAllMocks();
  })


  test('getDataRangeFromServer(0,1) -> returns reords with indexses [0,1], records size = 2', async () => {
    let pageData = await new PageDataRepo(baseUrl).getDataRangeFromServer(0, 1);
    expect(pageData.length).toBe(2);
  })

  test('getDataRangeFromServer(0,1) -> calls getPageFromServer 1 time with pageIndex 0', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(0, 1);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(1);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(0);

  })


  test('getDataRangeFromServer(0,49) -> returns reords with indexses [0,49], records size = 50', async () => {
    let pageData = await new PageDataRepo(baseUrl).getDataRangeFromServer(0, 49);
    expect(pageData.length).toBe(50);
  })

  test('getDataRangeFromServer(0,49) -> calls getPageFromServer 2 time with pageIndex 0 ,1', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(0, 49);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(2);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(0);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(1);

  })
  
  test('getDataRangeFromServer(5,51) -> returns reords with indexses [5,51] , records size = 47', async () => {
    let pageData = await new PageDataRepo(baseUrl).getDataRangeFromServer(5, 51);
    expect(pageData.length).toBe(47);
  })

  test('getDataRangeFromServer(5,51) -> calls getPageFromServer 3 time with pageIndex 0 ,1,2', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(5, 51);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(3);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(0);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(1);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(2);

  })


  test('getDataRangeFromServer(50,99) -> returns reords with indexses [50,99], records size = 50', async () => {
    let pageData = await new PageDataRepo(baseUrl).getDataRangeFromServer(50, 99);
    expect(pageData.length).toBe(50);
  })

  
  test('getDataRangeFromServer(50,99) ->  calls getPageFromServer 2 time with pageIndex 2,3', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(50, 99);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(2);

    expect(_spyGetDataFromServer).toHaveBeenCalledWith(2);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(3);
  })


  test('getDataRangeFromServer(55,99) -> returns reords with indexses [55,99], records size = 45', async () => {
    let pageData = await new PageDataRepo(baseUrl).getDataRangeFromServer(55, 99);
    
    expect(pageData.length).toBe(45);
  })

  test('getDataRangeFromServer(55,99) -> calls getPageFromServer 2 time with pageIndex 2,3', async () => {

    let _repo1 = new PageDataRepo(baseUrl);
    let _spyGetDataFromServer = jest.fn();
    _spyGetDataFromServer = spyOn(_repo1, "getPageFromServer");

    await _repo1.getDataRangeFromServer(55, 99);

    expect(_spyGetDataFromServer).toHaveBeenCalledTimes(2);

    expect(_spyGetDataFromServer).toHaveBeenCalledWith(2);
    expect(_spyGetDataFromServer).toHaveBeenCalledWith(3);

  })

});
