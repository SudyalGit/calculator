import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [input, setInput] = useState('0');

  // Handling the input
  const inputHandler = (e) => {
    console.log('you pressed: ', e.target.dataset.value);
    const value = e.target.dataset.value;

    if (input === '0' || input === 'OUT OF RANGE' || input === 'INVALID') {
      setInput(value);
      return;
    }

    let str = input + value;
    if (str.length > 16) {
      return;
    }
    setInput(str);
  }

  // Handling clear input
  const clearHandler = () => {
    setInput('0');
  }

  // Handling backspace
  const backspaceHandler = () => {
    if (input.length == 1) {
      setInput('0');
      return;
    }
    setInput(input.substring(0, input.length - 1));
  }

  // Handling Result
  const resultHandler = () => {
    try {
      let ans = eval(input).toString();
      console.log('Answer: ', ans);

      if (ans > (Math.pow(10, 17) - 1)) {
        setInput('OUT OF RANGE');
        return;
      }

      if (ans.length > 16) {
        ans = ans.slice(0, 16);
      }

      setInput(ans);
    } catch (error) {
      setInput('INVALID')
    }
  }

  // Handling plus/minus
  const signToggleHandler = () => {
    let inp = input;
    if(inp === '0'){
      return;
    }
    if (inp.charAt(0) === '-') {
      inp = inp.substring(1, inp.length);
    } else {
      inp = '-' + inp;
    }

    setInput(inp);
  }

  return (
    <>
      <div className="calculator">
        <div className="display-box">
          <div className="display">
            <div className="input">{input}</div>
          </div>
        </div>
        <div className="main-body">
          <div className="rows">
            <div className="keys" onClick={clearHandler}>C</div>
            <div className="keys" onClick={signToggleHandler}>±</div>
            <div className="keys" data-value='%' onClick={inputHandler}>%</div>
            <div className="keys" data-value='/' onClick={inputHandler}>&#247;</div>
          </div>
          <div className="rows">
            <div className="keys" data-value='7' onClick={inputHandler}>7</div>
            <div className="keys" data-value='8' onClick={inputHandler}>8</div>
            <div className="keys" data-value='9' onClick={inputHandler}>9</div>
            <div className="keys" data-value='*' onClick={inputHandler}>&#215;</div>
          </div>
          <div className="rows">
            <div className="keys" data-value='4' onClick={inputHandler}>4</div>
            <div className="keys" data-value='5' onClick={inputHandler}>5</div>
            <div className="keys" data-value='6' onClick={inputHandler}>6</div>
            <div className="keys" data-value='-' onClick={inputHandler}>&#8722;</div>
          </div>
          <div className="rows">
            <div className="keys" data-value='1' onClick={inputHandler}>1</div>
            <div className="keys" data-value='2' onClick={inputHandler}>2</div>
            <div className="keys" data-value='3' onClick={inputHandler}>3</div>
            <div className="keys" data-value='+' onClick={inputHandler}>&#43;</div>
          </div>
          <div className="rows">
            <div className="keys" onClick={backspaceHandler}>⌫</div>
            <div className="keys" data-value='0' onClick={inputHandler}>0</div>
            <div className="keys" data-value='' onClick={inputHandler}>&#8729;</div>
            <div className="keys" onClick={resultHandler}>&#61;</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;