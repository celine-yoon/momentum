const quotes = [
  {
    quote:
      "We are here to laugh at the odds and live our lives so well that Death will tremble to take us.",
    author: "Charles Bukowski",
  },
  {
    quote: "The time is always right to do what is right.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    author: "Maya Angelou",
  },
  {
    quote: "The secret to getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote:
      "Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.",
    author: "William Faulkner",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The biggest risk is not taking any risk. In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    quote:
      "To handle yourself, use your head; to handle others, use your heart.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only wealth which you will keep forever is the wealth you have given away.",
    author: "Marcus Aurelius",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); //span:nth-child(2)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
