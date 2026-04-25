import React from 'react'
import B1 from './B1'


const A1 = () => {
    let name = "bantu"
    let name2 = "bantu kumar"
  return (
    <div>
      <h1>this is A1 component</h1>
      <B1 data = {name} data1 = {name2}/>
    </div>
  )
}

export default A1
