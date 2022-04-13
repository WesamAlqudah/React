

const newStudent = () => {
    return (

        <div className="Content">


            <input type="text"
                label={'name'}
                name={'name'}
                onChange={props.onChange}
                value={props.name}

            />
            <button onClick={props.addButtonClicked}>Change Name </button>
        </div>
    );

}


export default newStudent;