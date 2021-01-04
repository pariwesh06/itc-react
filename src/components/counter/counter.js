import React from "react";

// export function Counter(props){  //props, stateless
//     return (
//     <span>{props.count}</span>
//     )
// }

// class??

export class Counter extends React.Component{
    render(){
        return (
            <span>{this.props.count}</span>
        )
    }
}