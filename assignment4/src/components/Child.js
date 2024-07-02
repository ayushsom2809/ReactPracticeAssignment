const Child = (props) =>{
return <>

<h1>Passed as combined props</h1>
Proof that this is coming from child component <br/>

Plain Title : <b>{props.title}</b><br/>
Object Value 1 : <b>{props.obj.key}</b><br/>
Object Value 2 : <b>{props.obj.key1}</b><br/>

</>
}

export default Child;

export const ChildDestructure = ({title, obj})=>{
    return <>
    <h1>This is destructured props</h1>
    Proof: this is coming from child component 

    Plain Title : <b>{title}</b><br/>
    Object Value 1 : <b>{obj.key}</b><br/>
    Object Value 2 : <b>{obj.key1}</b><br/>
    
    </>
}