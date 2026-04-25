import React, { useState } from 'react'

const UseState = () => {
    let [name, SetName] = useState("anupama");
    let [age, SetAge] = useState(0);
    let [gender, SetGender] = useState("F")
    let [email, SetEmail] = useState("anupama123@gmail.com")
    let [number, SetNumber] = useState(" xxxxxxxxxx ")
  return (
    <div>
        UseState
      
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{gender}</h1> 
    <h1>{email}</h1>
    <h1>{number}</h1>

    <input type="text"  onChange={(x)=>{SetName(x.target.value)}} />

    <input type="text" onChange={(x)=>{SetAge(x.target.value)}} />

    <input type="text"  onChange={(x)=>{SetGender(x.target.value)}} />


    <input type="text"  onChange={(x)=>{SetEmail(x.target.value)}} />

    <input type="text"  onChange={(x)=>{SetNumber(x.target.value)}} />



    </div>
  );
};

export default UseState;
