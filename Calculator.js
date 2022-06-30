import React,{useState} from 'react'
import "./Calculator.css"

function Calculator() {

  const [result, setResult] = useState('')

  const clickHandler = (e) =>{
    setResult(result.concat(e.target.value))
  }

  const clearDisplay = () =>{
    setResult('')
  }

  const calculate = () =>{
    setResult(eval(result).toString())
  }

  

  return (
    <div className='calculator'>
      <h3><i>Calculator</i></h3>
       <input type="text" placeholder='0' id='output' value={result}/>
       <input type="button" value="9" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="8" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="7" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="6" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="5" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="4" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="3" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="2" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="1" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="0" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="." className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="+" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="-" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="*" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="/" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="%" className='button bg-light' onClick={clickHandler}/>
       <input type="button" value="clear" className='button bg-light btn1' onClick={clearDisplay} />
       <input type="button" value="=" className='button bg-light btn1' onClick={calculate}/>
    </div>
  )
}

export default Calculator