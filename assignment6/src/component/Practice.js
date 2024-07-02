import React, { useEffect } from "react";
import { useState } from "react";

const countries = [
    { name: "India",value:"IN", cities: ["Delhi", "Mumbai"]},
    { name: "Pak", value:"PAK" ,cities: ["Lahore", "islamabad"] },
    { name: "Bangladesh",value:"BAN", cities: ["Dhaka"]}
  ];


 function Practice () {


const[country, setCountry] = useState();


  return (
      <>
      <div>
        <select value={country} onChange={(e)=>{setCountry([e.target.value])}}>
          {countries.map((item,index) => {
            return(
              <option key={index} value={index}>{item.name}</option>
            )
          })}
        </select>

        <select>
        {countries[country] && countries[country].cities.map((item,index)=>{
            return(
              <option value={index} >{item}</option>
            )
          })
        }  
        </select>  

      </div>
      </>
    );
  }
  
  export default Practice;
  