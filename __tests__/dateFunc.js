const parsedate = require("../dateFunc");


test("function that Parse a date string", () => {
    expect(parsedate("12/10/2009")).toBe("Thu Dec 10 2009 00:00:00 GMT+0200 (Eastern European Standard Time)");
});

