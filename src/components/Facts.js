import React, { useEffect, useState } from 'react'
import './Fact.css'

const Facts = () => {

  const [fact, setFacts] = useState('')
  const [img, setImg] = useState('')
  const [col, setCol] = useState('white')
  let rgb = [];
  for (var i = 0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 255));

    const getFacts = async () => {
    setCol('rgb(' + rgb.join(',') + ')')
    const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
    let data = await fetch(url)
    let parsedData = await data.json()
    setFacts(parsedData.text)
    // get random images
    const imgUrl = 'https://picsum.photos/1080/720??grayscale'
    let imageData = await fetch(imgUrl)
    setImg(imageData.url)

  }
  useEffect(() => {
     getFacts()
    // eslint-disable-next-line
  }, [])
  return (
    <div className='container' style={{
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '80vh',
      width: "90vw",
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      margin: "10vh 10vw",
      borderRadius: '16px',

    }}>
      <div className='container glass'>
        <h1 style={{color:'white'}}>Do You Know??</h1>
        <h3 style={{
          marginTop: '100px',
          color: `${col}`,

        }}>{fact}</h3>
      </div>
      <button
        style={{
          margin: "20px",
          background: "#f2007b",
          border: 'none',
          padding: '5px 25px',
          borderRadius: "16px",
          color: "white"
        }}
        onClick={getFacts}>NEXT</button>

    </div >

  )
}

export default Facts