import React, { useState } from 'react'

function App() {
  const [str, setStr] = useState("")
  const [table, setTable] = useState([])

  function transfer() {
    let sth = str.split("\n")
    for (let i in sth) sth[i] = sth[i].split("\t")
    setTable(sth)
  }

  const listItems = table.map(item =>
    <div>
      <h3>Formulars for symbol {item[0]}</h3>
      <p>
        Coordinate: <code>\left({item[2]}\cos\left(\frac&#123;{item[3]}&#125;&#123;180&#125;\right),{item[2]}\sin\left(\frac&#123;{item[3]}&#125;&#123;180&#125;\right)\right)</code><br />
        Wave form: <code>y={item[2]}\sin\left(2\pi {(item[1].split("Hz"))[0]}x+\left(\frac&#123;{item[3]}&#125;&#123;180&#125;\pi\right)\right)\left\&#123;0\le x\le1\right\&#125;</code>
      </p>
    </div>
  )

  return (
    <div className="App">
      <h1>Desmos Signal Engineer Tool</h1>
      <h2>Step 1: paste encoding table directly below</h2>
      <textarea onChange={e => setStr(e.target.value)}></textarea>
      <h2>Step 2: press this button</h2>
      <button onClick={transfer}>Transfer!</button>
      <h2>Step 3: get the result, copy to Desmos</h2>
      {listItems}
    </div>
  );
}

export default App;
