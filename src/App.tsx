import quotes from "./assets/quotes.json";
import { useState } from "react";
interface Quotes {
  quote: string,
  author: string,
}

const getRandomQuotes = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const App = () => {

  const [quote, setQuote] = useState<Quotes>(getRandomQuotes());

  const handleClick = () => {
    setQuote(getRandomQuotes());
  }

  return (
    <div className="w-screen h-screen bg-green-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded text-green-500 w-[500px]" id="quote-box">
        <h2 id="text" className="font-medium">{quote.quote}</h2>
        <p id="author" className="text-right my-4">- {quote.author}</p>
        <div className="flex items-center justify-between">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=${quote.quote}`} target="_blank">
            <div className="bg-blue-500 p-3 rounded w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="white"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </div>
          </a>
          <button id="new-quote" onClick={handleClick} className="bg-green-500 p-2 rounded text-white">New Quote</button>
        </div>
      </div>
    </div>
  )
}
export default App