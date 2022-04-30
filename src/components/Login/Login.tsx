import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {FormikErrorType} from "../../types/DataTypes";
import style from './Login.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";

export const Login = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    //const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            //rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }

            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            //dispatch(loginTC(values))
            formik.resetForm();
        },
    })

    if(isLoggedIn) {
        return <Navigate to={"/"}/>
    }


    return (
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'} className={style.formContainer}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel className={style.formLabel}>
                            <p>To log in enter:</p>
                            <p>Email: admin@area.ru</p>
                            <p>Password: 1234</p>
                        </FormLabel>

                        <FormGroup>
                            <TextField label="Email"
                                       margin="normal"
                                       {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email &&
                                <div style={{color: "red"}}>{formik.errors.email}</div>}
                            <TextField type="password" label="Password"
                                       margin="normal"
                                       {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password &&
                                <div style={{color: "red"}}>{formik.errors.password}</div>}
                            {/*<FormControlLabel label={'Remember me'} control={<Checkbox*/}
                            {/*    {...formik.getFieldProps('rememberMe')}*/}
                            {/*/>}/>*/}
                            <Button type={'submit'} variant={'contained'} color={'primary'} >
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
};

