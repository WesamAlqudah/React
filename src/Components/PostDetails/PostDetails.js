import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PostDetails.css'
import {Fragment} from "react";
import Comment from "../Comment/Comment";

const PostDetails = (props) => {
    const [postDetail, setPostDetail] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts/' + props.id + '/comments')
            .then(response => {
                setPostDetail(response.data)
            }).catch(err => console.log(err.message))
    },[props.id]);

    const deleteButtonClicked = (id) => {
      axios.delete('http://localhost:8080/api/posts/' +id)
          .then(response=>{
              props.changeFetchFlag();
          }).catch(err=> console.log(err.message))
    }

    const space = <Fragment>&nbsp;&nbsp;</Fragment>;
    let postDetailDisplay = null;
    if(props.id!==0){
     postDetailDisplay = (
         <div className="PostDetail">
             <div>
                 Post Details
             </div>
             <h1> {postDetail.title}</h1>
             <div >
                 {postDetail.content}
                 <br />
                 <div style={{ textAlign: "left" }}>
                     {space} Comments <br />
                     {postDetail.comment != null ? postDetail.comment.map(comments => {
                         return <Comment comment={comments.comment} key={comments.id}/>
                     }) : null}
                 </div>



             </div>
             <button onClick={ () => {deleteButtonClicked(props.id)}}> Delete</button>
         </div>
     )
    }
return postDetailDisplay

}

export default PostDetails;