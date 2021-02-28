const formatdate = require("../dateobj");
var dateFormat = require("dateformat");

const literallyJustDateNow = () => Date.now();

test("function that Convert a dateObject to a paddedShortDate", () => {
     const realDateNow = Date.now.bind(global.Date);
     const dateNowStub = jest.fn(() => 1530518207007);
     global.Date.now = dateNowStub;
     expect(literallyJustDateNow()).toBe(1530518207007);
     expect(dateNowStub).toHaveBeenCalled();
     expect(formatdate(new Date(), "MM-DD/YYYY")).toBe(dateFormat(new Date(), "mm/dd/yyyy"));
     global.Date.now = realDateNow;
});

test("function that Convert a dateObject to a mediumDate", () => {
     const realDateNow = Date.now.bind(global.Date);
     const dateNowStub = jest.fn(() => 1530518207007);
     global.Date.now = dateNowStub;
     expect(literallyJustDateNow()).toBe(1530518207007);
     expect(dateNowStub).toHaveBeenCalled();
     expect(formatdate(new Date(), "MM-DD/YYYY")).toBe(dateFormat(new Date(), "mm/dd/yyyy"));
     global.Date.now = realDateNow;
});


// const literallyJustDateNow = () => Date.now();

// test('It should call and return Date.now()', () => {
//   const realDateNow = Date.now.bind(global.Date);
//   const dateNowStub = jest.fn(() => 1530518207007);
//   global.Date.now = dateNowStub;

//   expect(literallyJustDateNow()).toBe(1530518207007);
//   expect(dateNowStub).toHaveBeenCalled();

//   global.Date.now = realDateNow;
// });


