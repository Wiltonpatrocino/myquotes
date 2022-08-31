import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'

import QuoteBox from './Components/QuoteBox'

function App() {



  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex)

  const changuerQuotes = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex)
  }

  console.log(quotes);

  const colors = ['#845EC2', '#D65D81', '#FF6F91', '#845EC2', '#0081CF', '#FF8066', '#4FFBDF', '#936C00', '#00D2FC', '#D63423']
  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className="App">
      <div className="quote" style={{ color: colors[randomColor] }}>
        <div className='bg'>
          <div className="container">
            <div className="card">
              <QuoteBox Quote={quotes[index].quote} Author={quotes[index].author} />

              <div className="d-flex jc-space-between">
                <div></div>
                <button onClick={changuerQuotes}>
                <i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
