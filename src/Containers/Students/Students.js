import Student from "../../Components/Student/student";

const Students = (props) => {

    const students = props.Students.map(students => {

        return <Student
            key={props.id}
            id={props.id}
            title={props.title}
            author={props.author}

        />

    });
    return students

}


export default Students;