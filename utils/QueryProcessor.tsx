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

  if (query.includes("what is your name?")) {
    return "ChatGPT";
  }

  const sumMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (sumMatch) {
    const num1 = parseInt(sumMatch[1], 10);
    const num2 = parseInt(sumMatch[2], 10);
    return (num1 + num2).toString();
  }

  const threeSumMatch = query.match(/what is (\d+) plus (\d+) plus (\d+)/i);
  if (threeSumMatch) {
    const num1 = parseInt(threeSumMatch[1], 10);
    const num2 = parseInt(threeSumMatch[2], 10);
    const num3 = parseInt(threeSumMatch[3], 10);
    return (num1 + num2 + num3).toString();
  }
}