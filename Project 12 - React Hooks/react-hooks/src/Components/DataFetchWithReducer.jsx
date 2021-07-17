import React, {useEffect, useReducer} from 'react'
import axios from 'axios';

const intialState = {
    flag : true,
    error: "",
    post: {}
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS' : 
            return{
                flag : false,
                error: '',
                post : action.payload
            }
        case 'FETCH_ERROR' : 
            return{
                flag : false,
                post : {},
                error: '404 NOT FOUND!'
            }
        default : 
            return state
    }
}

function DataFetchWithReducer() {

    // const [flag, setFlag] = useState(true);
    // const [error, setError] = useState('');
    // const [post, setPost] = useState({});

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(response =>{
    //         setFlag(false);
    //         setPost(response.data);
    //         setError('');
    //     })
    //     .catch(error=>{
    //         setFlag(false);
    //         setPost({});
    //         setError('404 NOT FOUND');
    //     })
    // },[])

    const [state, dispatch] = useReducer(reducer, intialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload : response.data})
        })
        .catch(error=>{
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])
    

    return (
        <div>
            <h1>{state.flag? 'Loading...' : state.post.title}</h1>
            {state.error? state.error: null}
        </div>
    )
}

export default DataFetchWithReducer
