import {Named} from './Named.js';
import Default from './Default.js';

const Parent = (props) => {
    return (
    <>
    This is coming from Parent components <br/>

    <p><Named/></p>
    <p><Default/></p>
    
    </>)

};

export default Parent;