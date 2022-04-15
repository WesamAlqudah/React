import { useState } from "react";

const NewPost = (props) => {



    return (
        <div className="Content">
         
                <h1>Add a Post</h1>

                <label>title</label>
                <input type="text"
                    label={'title'}
                    name={'title'}
                    onChange={props.onChange}
                    value={props.title}
                />

                <label>author</label>
                <input type="text"
                    label={'author'}
                    name={'author'}
                    onChange={props.onChange}
                    value={props.author}
                />

                <button onClick={props.addButtonClicked}>Add post </button>
        </div>
    );

}

export default NewPost;