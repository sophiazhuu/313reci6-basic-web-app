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
    return "Rohan";
  }

  // Handle mathematical queries
  if (query.includes("plus")) {
    return handleAddition(query);
  }

  if (query.includes("multiplied by")) {
    return handleMultiplication(query);
  }

  if (query.includes("which of the following numbers is the largest")) {
    return handleLargestNumber(query);
  }

  if (query.includes("which of the following numbers is both a square and a cube")) {
    return handleSquareAndCube(query);
  }

  return "";
}

// Function to handle addition queries
function handleAddition(query: string): string {
  let numbers = query.match(/\d+/g)?.map(Number);
  if (numbers && numbers.length === 2) {
    return (numbers[0] + numbers[1]).toString();
  }
  return "Invalid addition query";
}

// Function to handle multiplication queries
function handleMultiplication(query: string): string {
  let numbers = query.match(/\d+/g)?.map(Number);
  if (numbers && numbers.length === 2) {
    return (numbers[0] * numbers[1]).toString();
  }
  return "Invalid multiplication query";
}

// Function to handle finding the largest number
function handleLargestNumber(query: string): string {
  let numbers = query.match(/\d+/g)?.map(Number);
  if (numbers && numbers.length > 0) {
    return Math.max(...numbers).toString();
  }
  return "Invalid largest number query";
}

// Function to handle finding a number that is both a square and a cube
function handleSquareAndCube(query: string): string {
  let numbers = query.match(/\d+/g)?.map(Number);
  if (numbers) {
    for (let num of numbers) {
      let root = Math.round(Math.pow(num, 1 / 6)); // A number that is both a square and a cube is a perfect sixth power
      if (Math.pow(root, 6) === num) {
        return num.toString();
      }
    }
  }
  return "No number found that is both a square and a cube";
}
