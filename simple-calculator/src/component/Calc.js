import React, {useState} from 'react'
import Number from './Number';
import '../index.css';

function Calc() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '='){
            const calculator = eval(input);
            setResult(calculator.toString());
        } else if(value === 'C'){
            setInput('');
            setResult('');
        } else if(value === '(' & ')') {
            setInput(input * value)
            setResult(input * value)
        } else{
            setInput(input + value);
        }

    }

  return (
        <div className='container'>
            <div className='container-child'>
                <input className='insert1' type="text" value={input} readOnly />
                <input className='insert2' type='text' value={result} readOnly />
            </div>

            <div>
                <Number number={'7'} handleButtonClick={handleButtonClick} />
                <Number number={'8'} handleButtonClick={handleButtonClick} />
                <Number number={'9'} handleButtonClick={handleButtonClick} />
                <button className='btn' onClick={() => handleButtonClick('(')}>(</button>
                <button className='btn' onClick={() => handleButtonClick(')')}>)</button>
            </div>
            <div>
                <Number number={'4'} handleButtonClick={handleButtonClick} />
                <Number number={'5'} handleButtonClick={handleButtonClick} />
                <Number number={'6'} handleButtonClick={handleButtonClick} />
                <button className='btn' onClick={() => handleButtonClick('*')}>*</button>
                <button className='btn' onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div>
                <Number number={'1'} handleButtonClick={handleButtonClick} />
                <Number number={'2'} handleButtonClick={handleButtonClick} />
                <Number number={'3'} handleButtonClick={handleButtonClick} />
                <button className='btn' onClick={() => handleButtonClick('+')}>+</button>
                <button className='btn' onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div>
                <Number number={'0'} handleButtonClick={handleButtonClick} />
                <button className='btn2' onClick={() => handleButtonClick('C')}>Clear</button>
                <button className='btn' onClick={() => handleButtonClick('=')}>=</button>
            </div>
            
        </div>
    )
}

export default Calc;
