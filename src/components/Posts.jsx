import { useState } from "react"

function getData(){
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`)
    .then(res=>{ return res.json()})
}

function Posts(){

    const[Posts,setPosts]=useState([]);

    const handleFetchData = async() =>{

        try{
            const data = await getData();
            setPosts(data)
        }
        catch(err){
            console.log(err)
        }

    }

    return(
        <div>
            <h3>Posts</h3>
            <button onClick={handleFetchData}>Get Posts</button>
            <ul>
                {Posts.map(item=><li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )

}
export default Posts