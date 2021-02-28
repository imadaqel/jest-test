const addDate = require("../addDate");

const literallyJustDateNow = () => Date.now();

test("function", () => {
     const realDateNow = Date.now.bind(global.Date);
     const dateNowStub = jest.fn(() => 1530518207007);
     global.Date.now = dateNowStub;
     expect(literallyJustDateNow()).toBe(1530518207007);
     expect(dateNowStub).toHaveBeenCalled();
    //  expect(addDate(new Date('2021-02-20T18:45:37.049Z'), "5d")).toBe("2021-02-25T18:45:37.049Z");
     expect(addDate(new Date('2021-02-20T18:45:37.049Z'), "1h")).toBe('Sat Feb 20 2021 21:45:37 GMT+0200 (Eastern European Standard Time)');

     global.Date.now = realDateNow;
});