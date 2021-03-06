import {FizzBuzz} from '../src/fizzbuzz';

describe("FizzBuzz should return", () => {
    it("the number when number fizz buzz not met", () => {
        expect(FizzBuzz(1)).toEqual(1);
        expect(FizzBuzz(2)).toEqual(2);
        expect(FizzBuzz(98)).toEqual(98);
    })
    it("fizz when number is divisible by 3", () => {
        expect(FizzBuzz(3)).toEqual('Fizz');
        expect(FizzBuzz(9)).toEqual('Fizz');
    })
    it("buzz when number is divisible by 5", () => {
        expect(FizzBuzz(10)).toEqual('Buzz');
        expect(FizzBuzz(50)).toEqual('Buzz');
    })
    it("fizzbuzz when number is divisible by 3 and 5", () => {
        expect(FizzBuzz(15)).toEqual('FizzBuzz');
        expect(FizzBuzz(30)).toEqual('FizzBuzz');
    })
})