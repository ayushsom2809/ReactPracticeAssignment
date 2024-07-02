 import Child from "./Child";
 import {ChildDestructure} from './Child'

 const Parent = ()=>{
    const propTitle  = 'this is prop title';

    const propObject = {
        "key" : "combined prop value",
        "key1" : "combined prop value1" 
    };

    const propTitleDestructured = " this is destructued prop title";
    const propObjectDestructured = {
        "key": "destructured value",
        "key1": "destructured value1"
    };
 

 return <>
 
 Proof this message is from Parent compoent <br/>
 <Child title = {propTitle} obj = {propObject}/>
 <ChildDestructure title = {propTitleDestructured} obj ={propObjectDestructured}/>
 
 </>
 }
 export default Parent;