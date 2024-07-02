import { useState } from "react";

const Practice2 = () =>{

    const [list1, setList1]= useState([
        {title:'Item A'},
        {title:'Item B'},
        {title:'Item C'}
    ]);
    
    const [list2, setList2]= useState([
        {title:'Item 1'},
        {title:'Item 2'},
        {title:'Item 3'}
    ]);
    return(
        <>
        <div>
            <h3>List 1</h3>
            <ul>
                {list1.map((item,idx)=>(
                    <li key={idx}>{item.title}</li>
                ))}
            </ul>
        </div>

        <div>
        <h3>List 2</h3>
            <ul>
                {list2.map((item,idx)=>(
                    <li key={idx}>{item.title}</li>
                ))}
            </ul>
        </div>
        
        
        </>
    )

}

export default Practice2;