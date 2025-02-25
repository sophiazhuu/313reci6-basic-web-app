export default function QueryProcessor(query: string): string {
  query = query.toLowerCase();

  if (query.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.includes("andrew id")) {
    return "sophiazh";
  }

  if (query.includes("what is your name?")) {
    return "Rohan";
  }

  // Handle any number of addition queries
  const additionMatch = query.match(/what is ((?:\d+ plus )+\d+)/i);
  if (additionMatch) {
    const numbers = additionMatch[1].split(" plus ").map(Number);
    return numbers.reduce((sum, num) => sum + num, 0).toString();
  }

  // Handle three-number addition
  const threeSumMatch = query.match(/what is (\d+) plus (\d+) plus (\d+)/i);
  if (threeSumMatch) {
    const num1 = parseInt(threeSumMatch[1], 10);
    const num2 = parseInt(threeSumMatch[2], 10);
    const num3 = parseInt(threeSumMatch[3], 10);
    return (num1 + num2 + num3).toString();
  }

  // Handle subtraction queries
  const subtractionMatch = query.match(/what is (\d+) minus (\d+)/i);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1], 10);
    const num2 = parseInt(subtractionMatch[2], 10);
    return (num1 - num2).toString();
  }

  // Handle multiplication queries
  const multiplicationMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }

  // Handle exponentiation queries
  const powerMatch = query.match(/what is (\d+) to the power of (\d+)/i);
  if (powerMatch) {
    const base = parseInt(powerMatch[1], 10);
    const exponent = parseInt(powerMatch[2], 10);
    return Math.pow(base, exponent).toString();
  }

  // Handle finding the largest number
  const largestNumberMatch = query.match(/which of the following numbers is the largest: ([\d, ]+)/i);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(", ").map(Number);
    return Math.max(...numbers).toString();
  }

  // Handle prime number queries
  const primeNumberMatch = query.match(/which of the following numbers are primes: ([\d, ]+)/i);
  if (primeNumberMatch) {
    const numbers = primeNumberMatch[1].split(", ").map(Number);
    const primes = numbers.filter(isPrime);
    return primes.length > 0 ? primes.join(", ") : "No prime numbers found";
  }

  // Handle finding a number that is both a square and a cube (perfect sixth power)
  const squareAndCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d, ]+)/i);
  if (squareAndCubeMatch) {
    const numbers = squareAndCubeMatch[1].split(", ").map(Number);
    for (let num of numbers) {
      let root = Math.round(Math.pow(num, 1 / 6));
      if (Math.pow(root, 6) === num) {
        return num.toString();
      }
    }
    return "No number found that is both a square and a cube";
  }

  return "";
}

// Helper function to check if a number is prime
function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
