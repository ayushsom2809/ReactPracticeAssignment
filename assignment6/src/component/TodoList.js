import React, { useState } from "react";


function TodoList(){

    const [activity , setActivity]= useState('');
    const [ listData, setListData] =useState([]);


    function addActivity(){
        setListData((listData)=>{
            const updatedList = [...listData,activity];
            setActivity("");
            return updatedList;
        })

    }

    function removeActivity(i){

        const updatedList = listData.filter((elem,id)=>{
            return i!=id;
        })
        setListData(updatedList)

    }


    return (
        <>
        <div>Todo List</div>
        <input type="text" placeholder="add something" value = {activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>

        {listData != [] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>{data}</p>
                <button onClick={()=>removeActivity(i)}>remove</button>
                </>
            )
        })}
        
        </>
    )
    
}

export default TodoList;