import React, { useState } from 'react'

export default function Counter( {counter, onClick}) {
    const [num, Setnum] = useState(0);
  return (
    <div className='counter'>
        <span className='number'>{num}/{counter}</span>
        <button className='button' onClick={() => {Setnum(num+1) ;
        onClick();
        }}>Add +</button>
    </div>
  )
}
