describe("FizzBuzz", function(){
  var fizzbuzz = new FizzBuzz;
  it("should print Fizz when number is divisible by 3", function(){
    expect(fizzbuzz.play(3)).toEqual("Fizz");
  });
  it("should print Buzz when number is divisible by 5", function(){
    expect(fizzbuzz.play(5)).toEqual("Buzz");
  });
  it("shold print FizzBuzz when number divisible by 3 and 5", function(){
    expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
  });
  it ("should print number when not divisible by 3, 5 or 15", function(){
    expect(fizzbuzz.play(7)).toEqual(7);
  });
});
