import classes from './Login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {signIn} from "next-auth/react";
function LoginPage(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                password: password,
                email: email,
                redirect: false
            });
            console.log(res);
            if(res.error){
                setError("Invalid Credentials..")
                return;
            }
            router.replace("/");
        } catch (error) {
            console.log(error)
        }
   
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <Image src={"/images/ffglogo.png"} alt='Logo' fill objectFit='cover' />
                </div>
                <div className={classes.big_title}>WELCOME TO</div>
                <div className={classes.bigger_title}>Fresh Family Guide</div>
                <div className={classes.title}>where families find guidance!</div>
                <div className={classes.access}>Log in to access more features!</div>
            </div>
            <form onSubmit={handleSubmit} className={classes.right}>
                <div className={classes.big_title_S}>Log in</div>
                <div className={classes.sep}></div>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className={classes.input} placeholder='Email'/>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input} placeholder='Password' />
                <div>{error}</div>
                <button className={classes.button}>Log in</button>
                <div className={classes.redirection}>Dont have an account? <Link href={"/signup"}><span className={classes.link}>Register</span></Link></div>
            </form>
        </div>
    )
} export default LoginPage;