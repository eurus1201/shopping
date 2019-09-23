import React,{useState} from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link,withRouter } from "react-router-dom";
import {  } from "react-bootstrap";
import { connect } from "react-redux";
import { authenticationAction } from "../_actions";


const LoginPage = (props) => {

    const {dispatch,loginRequest} = props;

    const [values,setValues] = useState({
        login: '',
        password: ''
    })
    const [responseMessage,setResponseMessage] = useState(null);

    // const classes = useStyles();

    const handleChange = ({target:{name,value}}) => {
        setValues({ ...values, [name]: value });
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        
        dispatch(authenticationAction.login(values.login,values.password,props.history));
    }

 


    return <div className="col-md-6 col-md-offset-3" >
           <h2>Login</h2>
            <form onSubmit={submitHandler}>
                
            <div className={'form-group'}>
                <label htmlFor="username">Email</label>
                <input type="text" className="form-control" name="login" value={values.login} onChange={handleChange} />
               
               
                
                {/* className={classes.textField} */}
            </div>
                  
            <div className={'form-group' }>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="form-control" name="password" value={values.password} onChange={handleChange} />
             
                
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">{loginRequest ?"loading..." : 'Login'}</button>
                
                <Link to="/register" className="btn btn-link">Register</Link>
            </div>            
            </form>
        </div>
        
        
 
}

const mapStateToProps = state => {
    const {loginRequest} = state.authentication;
    
    return { loginRequest };
};

const ConnectedLoginPage = withRouter(connect(mapStateToProps)(LoginPage));
export {ConnectedLoginPage as LoginPage};