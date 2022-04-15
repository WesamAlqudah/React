
const Post = (props) => {

    return (
        <div className="Content">
            <div className="Field">
                {props.id}
            </div>
            <h1> {props.title}</h1>
            <div className="Field">
                {props.author}
            </div>
          
        </div>
    );
}

export default Post;

