import React from 'react';
import styles from './Home.module.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from '../../Components/Shared/Card/Card';
import Button from '../../Components/Shared/Button/Button';
import Navigation from '../../Components/Shared/Navigation/Navigation';


const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const history = useNavigate();
    function startRegister() {
        history('login')
    }
    return (
        <>
        <Navigation/>
        <div className={styles.cardWrapper}>
            
            <Card title="Welcome to CodeOlympus!" icon="logo">
                <p className={styles.text}>
                We're putting the final touches on our codebase at CodeOlympus 
                to ensure a smooth and seamless experience for all users. Thank you for your patience 
                as we work to bring you the best possible product.
                </p>
                <div>
                    
                    <Button onClick={startRegister} text="Let's Go" />
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>
                        Have an invite text?
                    </span>
                </div>
            </Card>
        </div>
        </>
    );
};

export default Home;
