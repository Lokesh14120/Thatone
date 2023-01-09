import React from 'react';
import styles from './Login.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from '../../../Components/Shared/Card/Card';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import Button from '../../../Components/Shared/Button/Button';


const Login = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const history = useNavigate();
    function startRegister() {
        history('/text')
    }
    return (
        <>
        <Navigation/>
        <div className={styles.cardWrapper}>
            
            <Card title="Select Email for Authentication" icon="logo">
                <p className={styles.text}>
                here we will authenticate
                </p>
                <div>
                    
                    <Button onClick={startRegister} text="gyus" />
                </div>
                
            </Card>
        </div>
        </>
    );
};

export default Login;
