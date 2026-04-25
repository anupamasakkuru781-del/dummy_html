import React from 'react'
import C1 from './C1'

const B1 = (props) => {
  return (
    <div>
      <h1 style={{color: "red"}}>this is B1 component</h1>
      {props.data}
        {props.data1}
        <C1/>
      
    </div>
  )
}

export default B1
