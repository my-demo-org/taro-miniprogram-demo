let hello = require("./index.js");
test('should get "Hello world"', () => {
  expect(hello()).toBe("Hello world"); // 测试成功
  // expect(hello()).toBe('Hello') // 测试失败
});
