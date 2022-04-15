import { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import axios from "axios";


const Posts = (props) => {

    console.log("Post UPDATE");

    const [posts, setPosts] = useState(
        [
            { id: 1, title: "iphone 13", author: 1100 },
            { id: 2, title: "s22", author: 1150 },
         ]
    )
    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/posts',{
            headers: {
                "x-apikey": "API_KEY",
            },
            responseType: "json",
            mode: 'same-origin',

        })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // fetchProducts();    TRY THIS 
    useEffect(() => {
            fetchProducts()
        },
        [props.fetchFlag]) //ADD THIS LATER - props.fetchFlag


    const postsList = posts.map(product => {
        return <Post
            name={product.title}
            price={product.author}
            id={product.id}
            key={product.id}
            setSelected={() => { props.setSelected(product.id) }}
        />
    });

    return postsList;
}

export default Posts;