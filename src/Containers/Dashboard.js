import Posts from "./Posts/Posts";
import {useState} from 'react';
import NewPost from "../Components/NewPost/NewPost";
import UpdateTitle from "../Components/changeTitle/updateTitle";
import ChangeTitle from "../Components/changeTitle/ChangeTitle";


export default function Dashboard() {

    let i = 4;
    const [postsState, setPostsState] = useState([
        {id: 1, title: "WAA", author: "Mohyee Eldeen"}, {
        id: 2,
        title: "ASD",
        author: "Payman Salek"
    },
        {id: 3, title: "WAP", author: "Bruce Lester"}]);

    const [postState, setPostState] = useState({
        id: 0, title: "", author: ""
    })


    const [post, setPost] = useState({
        title: "",
    });


    const onChange = (events) => {
        console.log(events)

        const copy = {...postState};
        copy[events.target.name] = events.target.value;
        setPost(copy);

    }

    const addButtonClicked = () => {
        const copy = {...postState};
        copy.id = i;
        i++;
        const copyPostsState = [...postsState]
        copyPostsState.push(copy);
        setPostsState(copyPostsState);
    }


    const changeTitleButtonClicked = () => {
        const copy = {...post};
        const copyPostsState = [...postsState]
        copyPostsState[0].title =   copy.title ;
        console.log(copyPostsState[0].title)
        //   copyPostsState.push(copy);
        setPostsState(copyPostsState);
    }


    return (<div>
        <div>
            <Posts posts={postsState}/>
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
        </div>
    </div>)

}