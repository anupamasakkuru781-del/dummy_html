import React from 'react'

const C1 = (x) => {
  return (
    <div>
      <h1>i am c component i a getting the data from B component as a props which is from A1</h1>
      {x.bdata}
    </div>
  )
}

export default C1
