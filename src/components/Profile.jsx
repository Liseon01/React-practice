import React from 'react'
import Avartar from './Avartar'

export default function Profile({url, name, title, isNew}) {
  return (
    <div className='profile'>
        <Avartar url = {url} isNew={isNew}/>
        <h1> {name}</h1>
        <p> {title}</p>
    </div>
  )
}
