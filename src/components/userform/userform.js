import { Component, useState } from "react";


// function, arrow function
export class Userform extends Component {//ECMA6 class
    constructor() {
        super();
        this.state = {
            fname: 'Ramesh1',
            carBrand: 'audi',
            isChecked:[]
        };
    }
    handleChange = (event) => {
        const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }
    save = () => {
        console.log('current state of component=', this.state);
    }
    render() {
        return (
            <form>
                <label>First Name:
                   <input value={this.state.fname} name='fname' onChange={this.handleChange}></input>
                </label>
                <label>Last Name:
                   <input value={this.state.lastname} name='lastname' onChange={this.handleChange}></input>
                </label>
                <select name='carBrand' onChange={this.handleChange} value={this.state.carBrand}>
                    <option value='mercedes'>Mercedes</option>
                    <option value='bmw'>bmw</option>
                    <option value='audi'>Audi</option>
                    <option value='Hyundai'>Hyundai</option>
                </select>
                <label><input type='radio' value='male' name='gender' checked={this.state.gender == 'male'}
                    onChange={this.handleChange} /> Male</label>
                <label><input type='radio' value='female' name='gender' checked={this.state.gender == 'female'}
                    onChange={this.handleChange} /> Female</label>

                <label><input type='checkbox' name='domestic' checked={this.state.isChecked[0]}
                    onChange={this.handleChange} /> domestic</label>
                <label><input type='checkbox' name='international' checked={this.state.isChecked[1]}
                    onChange={this.handleChange} /> International</label>
                <button type='button' onClick={this.save}>Save</button>
            </form>
        )
    }
}