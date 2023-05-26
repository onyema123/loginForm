import './Loginform.css'

import { Component } from 'react'

class LoginForm extends Component {
    state = {
        firstname: "",
        lastname: "",
    }
    handleChange = (event) => {
        this.setState({
           firstname:event.target.value 
        })
    }
    handleLastNameChange = (event) => {
        this.setState({
            firstname:event.target.value,
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
    console.log({
            firstname:this.state.firstname
        })
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Username</h1>
                    <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.firstname} />
                    {/* <input type="text"/> */}
    
                    
                    {/* <input value={this.state.lastname}  */}
                    {/* type='text'  */}
                    {/* // onChange={this.handleLa} /> */}
                    <h1>Password</h1>
                    <input type='text' />
                    <div className='btn2'>
                        <button className='display-two' type='submit'>Submit</button>
                    </div>
                </form>
            </div> 
        )



         
    
  }
}
export default LoginForm;