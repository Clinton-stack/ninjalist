import { useRouter } from "next/router";
import { useEffect } from "react";

const { default: Link } = require("next/link")

const NotFound = () => {
const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },5000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooopps.....</h1>
            <h2> That page cannot be found </h2>
            <p> Go back to the <Link href='/'className='not-found-link'>Homepage</Link> </p>
        </div>
     );
}
 
export default NotFound;