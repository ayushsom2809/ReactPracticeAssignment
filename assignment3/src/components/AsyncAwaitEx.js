import { useEffect , useState} from "react";

const SomeNew = () => {



    const[posts, setPosts] = useState([]);
    const[flag, setFlag] = useState(false)


    // using async function 
    const AsyncFunctionAyush = async function () 
    {
        let datafetch = "";
        datafetch = await fetch("https://randomuser.me/api");

        let resp = "";
        alert("getting data from server");
        resp = await datafetch.json();

        console.log(resp)
        await setPosts(resp);
        setFlag(true);
    }

    //display data function 

    // const displayData = (something) => {
    //     let sampleText = <div key = {something.results}>
    //                         <b>
    //                             <li>{something.results}</li>
    //                         </b>
    //                     </div>
    //         return sampleText;
    // }

    //to display data on page load 
    useEffect(()=>{AsyncFunctionAyush()},[flag]);

    return(
<></>
        // <>
        // <button onClick={AsyncFunctionAyush}>Click to load data from server</button>
        // <div>{!flag && <div>...loading from server</div>}
        //         {flag === true && <ol>
        //                                 <i>below is fetched from server</i>
        //                                 {posts.map(displayData)}
        //                             </ol>}

        // </div>
        
        // </>
    ) 

}

export default SomeNew;