import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Rashid" age={19} 
        marks={[91,92,93,94,95]} 
        person={{name:"viky",dept:["AI&DS","CT"]}}
        />
    </div>
  )
}

export default Parent
