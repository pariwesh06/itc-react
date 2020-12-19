
function List (props){
    return (
        props.list.map(element => <div>{element.name}</div>)
    )
}

export default List;