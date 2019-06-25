function FizzBuzz() {

};
FizzBuzz.prototype.play = function(number){
  if (this.isDivisibleBy(number, 15)){
    return "FizzBuzz"
  }
  else if (this.isDivisibleBy(number, 3)){
    return "Fizz"
  }
  else if (this.isDivisibleBy(number, 5)){
    return "Buzz"
  }
  else {
    return(number)
  };
};
FizzBuzz.prototype.isDivisibleBy = function(number, diviser){
  return number % diviser === 0;
}

var fizzbuzz = new FizzBuzz
i = 1
while (i <= 100) {
  console.log(fizzbuzz.play(i))
  i++
}
