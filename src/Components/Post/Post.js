
const Post = (props) => {

    return (
        <div className="Content">
            <h1> {props.title}</h1>
            <div className="Field">
                {props.author}
            </div>
        </div>
    );
}

export default Post;

