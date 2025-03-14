import React from 'react'

export default function Avartar({url, isNew}) {
    return (
        <div className='avartar'>
            <img className ='photo' src={url} alt="NO IMAGE" />
            {isNew&&<span className='new'>New</span>}
        </div>
      )
}
