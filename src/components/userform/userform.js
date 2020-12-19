import { Component } from "react";


// function, arrow function
export class Userform extends Component {//ECMA6 class
    users = [{ "name": "Ajay" }, { "name": "Ram" }]; //model
    save() {
        console.log('clicked');
    }
    render() {
        return (
            <div>
                <input></input>
                <button onClick={this.save}>Save</button>
               { this.users.map(u => <div>{u.name}</div>)}
            </div>
        )
    }
}