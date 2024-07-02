import { useEffect, useState } from "react";

function FetchData (){
const url = "https://jsonplaceholder.typicode.com/users";

const[data, setData] = useState([])
const fetchInfo = () =>{
    return fetch(url)
            .then((res)=> res.json())
            .then((d)=>setData(d))
}
useEffect(()=>{
    fetchInfo();
},[])

    return(
        <>
            <div>Using js inbuilt api</div>
            {data.map((data, index)=>{
                return(
                    <>
                    <p key={index}>{data.name}</p>
                    </>
                )
            })}
        </>
    )
}

export default FetchData;