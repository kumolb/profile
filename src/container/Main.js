import { useState } from "react";
import AddItem from "./AddItems/AddItem";
import Items from "./Items/Items";

const Main = () => {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    const onChange = (e) => {
        e.preventDefault();
        setItem(e.target.value);
    }
    const addItem = (e) => {
        e.preventDefault();
        let newItems = [...items, item];
        setItems(newItems);
    }
    return (
        <div>
            Add Items
            <AddItem name="item" value={item} onChange={(e) => onChange(e)}></AddItem> <button onClick={(e) => addItem(e)}>Add</button>

            <br></br>
            <Items items={items}></Items>
        </div>
    );
}

export default Main;