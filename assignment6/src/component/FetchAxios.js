import React, { useEffect,useState } from "react";
import axios from "axios";
// const url = “https://jsonplaceholder.typicode.com/users”;

function FetchAxios (){
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [data, setData]= useState([]);

    const fetchInfo = () =>{
        return axios.get(url)
                .then((response)=>setData(response.data));
            }
    useEffect(()=>{
        fetchInfo();
    },[])
    return(
        <>
        <div>Using axios</div>
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

export default FetchAxios;