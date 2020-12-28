
const MyButton = (props) => { //stateless
    return (
        <button onClick={(event) => {
            console.log('clicked');
            //Ajax call
            fetch('http://localhost:4200/users')
                .then((response) => {
                    response.json().then(data => {
                        console.log(data);
                        data.map(element => {
                            console.log(element);
                            return <div>{element.name}</div>
                        })

                    });

                })
        }}> { props.text} </button >
    )
}

// function MyButton(props){
//     return (
//         <button>{props.text}</button>
//     )
// }

export default MyButton;