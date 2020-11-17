import React from 'react';
import   { reduxForm,Field, InjectedFormProps} from 'redux-form';
import classes from "./login.module.css";
import LoginContainer from "./loginForm/loginFormContainer";




const Login= () => {
    const onSubmit =(formData:any)=>{
        console.log(formData)
    }
    return (
        <div className={classes.block + ' container'}>
                <div className={classes.block_Login}>
                    <LoginContainer/>
                </div>
        </div>
    );
}
export default Login;