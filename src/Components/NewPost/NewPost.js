
const NewPost = (props) => {



    return (
        <div className="Content">
         
                <h1>Add a Post</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                    onChange={props.onChange}
                    value={props.title}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                    onChange={props.onChange}
                    value={props.author}
                />

                <button onClick={props.addButtonClicked}>Add post </button>
        </div>
    );

}

export default NewPost;