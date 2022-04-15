import Posts from "./Posts/Posts";
import { useState } from 'react';
import NewPost from "../Components/NewPost/NewPost";
import UpdateTitle from "../Components/changeTitle/updateTitle";
import ChangeTitle from "../Components/changeTitle/ChangeTitle";


export default function Dashboard() {

    let i = 114;
    const [postsState, setPostsState] = useState([
        { id: 111, title: "Happiness", author: "John" },
        {
            id: 112, title: "MIU", author: "Dean"
        },
        { id: 113, title: "Enjoy Life", author: "Jasmine" }]);

    const [postState, setPostState] = useState({
         title: "", author: ""
    })


    const [post, setPost] = useState({
        title: "",
    });


    const onChange = (events) => {
        console.log(events)

        const copy = { ...postState };
        copy[events.target.name] = events.target.value;
        setPost(copy);

    }
    

    const addButtonClicked = () => {
        const copy = { ...postState };
        copy.id = i;
        i++;
        const copyPostsState = [...postsState]
        copyPostsState.push(copy);
        setPostsState(copyPostsState);
    }


    const changeTitleButtonClicked = () => {
        const copy = { ...post };
        const copyPostsState = [...postsState]
        copyPostsState[0].title = copy.title;
        console.log(copyPostsState.title)
        //   copyPostsState.push(copy);
        setPostsState(copyPostsState);
    }


    return (<div>
        <div>
            <Posts posts={postsState} />
        </div>


        <div>
            <UpdateTitle
                title={post.title}
                onChange={(event) => {
                    onChange(event);
                }}
                changeButtonClicked={changeTitleButtonClicked}
            />
        </div>
                
        <div>
        {/* <NewPost
                title={postState.title}
                author={postState.author}
                onChange={(event) => { onChange(event) }}
                addButtonClicked={addButtonClicked}
            /> */}
        </div>
    </div>)

}