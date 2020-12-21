import { Component, useState } from "react";
import ApiService from "../../service/service";


// function, arrow function
export class Userform extends Component {//ECMA6 class
    skills = ["java", 'javascript', 'React'];

    constructor() {
        super();
        this.state = {
            users: [], formdata: {
                fname: 'Ramesh1',
                carBrand: 'audi',
                isChecked: {},
                gender: 'male'
            }
        }
    }
    createSelectItems = () => {
        let items = [];
        for (let i = 0; i < this.skills.length; i++) {
            items.push(<option key={i} value={this.skills[i]}>{this.skills[i]}</option>);
        }
        return items;
    }
    handleChange = (event) => {
        const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            ...this.state,
            formdata: { ...this.state.formdata, [event.target.name]: event.target.value }
        })
    }
    save = () => {//button click
        console.log('current state of component=', this.state);
        console.log(ApiService.post(this.state.formdata, (response) => {
            console.log(response);
            this.setState({
                users: [...this.state.users, response]
            })
        }));;
    }
    render() {
        return (
            <form>
                <label>First Name:
                   <input value={this.state.formdata.fname} name='fname' onChange={this.handleChange}></input>
                </label>
                <label>Last Name:
                   <input value={this.state.formdata.lastname} name='lastname' onChange={this.handleChange}></input>
                </label>
                <select name='carBrand' onChange={this.handleChange} value={this.state.formdata.carBrand}>
                    <option value='mercedes'>Mercedes</option>
                    <option value='bmw'>bmw</option>
                    <option value='audi'>Audi</option>
                    <option value='Hyundai'>Hyundai</option>
                </select>
                <label><input type='radio' value='male' name='gender' checked={this.state.formdata.gender == 'male'}
                    onChange={this.handleChange} /> Male</label>
                <label><input type='radio' value='female' name='gender' checked={this.state.formdata.gender == 'female'}
                    onChange={this.handleChange} /> Female</label>

                <label><input type='checkbox' name='domestic' checked={this.state.formdata.isChecked[0]}
                    onChange={this.handleChange} /> domestic</label>
                <label><input type='checkbox' name='international' checked={this.state.formdata.isChecked[1]}
                    onChange={this.handleChange} /> International</label>
                <select name='skills' value={this.state.formdata.skills} onChange={this.handleChange}>
                    {this.skills.map((skill, index) => <option key={index} value={skill}>{skill}</option>)}
                </select>
                <button type='button' onClick={this.save}>Save</button>
                <ol>
                    {this.state.users.map((user, index) => <li key={index} >{user.fname}</li>)}
                </ol>
            </form>
        )
    }
}