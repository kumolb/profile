
const AddItem = (props) => {
    return (
        <div>
            <input type="text" onChange={props.onChange} value={props.value} name={props.name}></input>
        </div>
    );
}

export default AddItem;