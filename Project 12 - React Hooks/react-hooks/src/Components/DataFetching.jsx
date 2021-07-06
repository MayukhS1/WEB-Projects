import React, {useState, useEffect} from 'react'
import axios from 'axios';


function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClicked}`)
            .then(res=>{
                console.log(res);
                setPost(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[buttonClicked]);

    return (
        <div>
            <input type="text" value={id} 
                onChange={(e)=>{
                    setId(e.target.value);
                }}
            ></input>
            <button onClick={()=>{
                setButtonClicked(id);
            }}>Get Result</button>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default DataFetching
