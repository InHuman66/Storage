import React from 'react';
import classes from "./form.module.css";
import {FormikProps} from "formik";
import {FormikValuesType} from "./loginFormContainer";

type propTypes ={
    formik: FormikProps<FormikValuesType>
}

const LoginForm:React.FC<propTypes>= (props) => {
    return (
        <form onSubmit={props.formik.handleSubmit}>
            <div>
                <input className={classes.login_input} {...props.formik.getFieldProps('email')} placeholder={'Login'}/>
            </div>
            <div>
                <input className={classes.password_input} {...props.formik.getFieldProps('password')} placeholder={'Password'}/>
            </div>
            <div className={classes.rememberMe_Block}>
                <input name={'rememberMe'} onChange={props.formik.handleChange} checked={props.formik.values.rememberMe} type={'checkbox'}/>
                <p>Remember me</p>
            </div>
            <div className={classes.wrapper_button}>
                <button className={classes.login_button}>Login</button>
            </div>
        </form>
    );
}

export default LoginForm;