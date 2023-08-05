import React, { useState } from 'react';
import './App.css';


const Accordian = ({ data }) => {

    const [text, setText] = useState(false);

    const handleClick = () => {
        setText(!text);
    }


    return (
        <div className='container'>
            <div className='accordian'>
                <div className='question'>
                    <h2>{data.question}</h2>
                    <p onClick={handleClick}>{(text) ? <i class="fa-solid fa-sort-up"></i> : <i class="fa-solid fa-sort-down"></i>}</p>
                </div>

                {text ? (<div className='answer'>
                             <p>{data.answer}</p>
                         </div>) : '' }


            </div>
        </div>
    )
}

export default Accordian