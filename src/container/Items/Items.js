import Item from "./Item/Item";

const Items = (props) => {
    return (
        <div>
            {
                props.items ? props.items.map(item => {
                    return <Item item={item}></Item>
                }) : <div> No Item found </div>
            }
        </div>
    );
}

export default Items;