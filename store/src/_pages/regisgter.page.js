import React,{useState} from 'react';
// import { Button, Glyphicon } from 'react-bootstrap';
import { Link,withRouter } from "react-router-dom";
import Axios from 'axios';
import {HOST} from '../_constants/other.constants';




const RegisterPage = (props) => {

    const [values,setValues] = useState({
        email: '',
        password: '',
        name: ''
    })

    const [responseMessage,setResponseMessage] = useState(null);

 

    const handleChange = ({target:{name,value}}) => {
        setValues({ ...values, [name]: value });
    };

    const handleClose = () =>{
        setResponseMessage(null);
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await Axios({
                method: 'post',
                url: HOST`/wp-json/wc/v3/customers?consumer_key=ck_7a8da12d8df12441f33614bd57051a3636918f6c&consumer_secret=cs_1dce1e31145ca5f6a7fa10482c13998055a42f9e&email=lkhsdf@gmail.com`,
                headers: {
                  'Content-Type': 'application/json',
                },
                data: values
            });
            if (response.status === 200){
                setResponseMessage("Your user successfully registered");
                props.history.push('/login');
            }
        } catch (error){
            setResponseMessage(error.response.data.message);
        }
    }


    return <div className="col-md-6 col-md-offset-3" >
        <h2>Register</h2>
            <form onSubmit={submitHandler}>

            <div className={'form-group' }>
                <label htmlFor="FullName"> Full Name</label>
                <input type="text" id="name" className="form-control" name="name" value={values.name} onChange={handleChange} required />
               
                    <div className="help-block">First Name is required</div>
                }
            </div>

            <div className={'form-group'}>
                <label htmlFor="Email">Email</label>
                <input type="email" id="email" className="form-control" name="email" value={values.email} onChange={handleChange} required />
              
            </div>

            <div className={'form-group'}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" name="password" value={values.password} onChange={handleChange} required />
              
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
                
                <Link to="/login" className="btn btn-link">Login</Link>
            </div>
                
            </form>
      
      
    </div>
}

withRouter(RegisterPage);
export {RegisterPage};