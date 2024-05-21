import classes from './Registration.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

function Registration() {
    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const form = {};
        Array.from(e.currentTarget.elements).forEach(f => {
            if(!f.name) return;
            form[f.name] = f.value;
        });
        console.log(form);
        const values = Object.values(firstName, lastName, email, password, confirmPassword);
        if(!values){
            setError("Please fill all the fields");
            return;
        }
        try{
            const response = await fetch("/api/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                })
            });
            if(response.ok){
                const res = await response.json();
                console.log(res);
                const form_element = e.target;
                form_element.reset();
                setSuccess("Registration Successful");
                router.replace("/login");
            }
            const signed_in = await fetch("/api/signedIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: email})
            });
            const {user_signedIn} = await signed_in.json();
            console.log(user_signedIn);
            if(user_signedIn){
                console.log("User already exists..");
                setError("User already exists...");
                return;
            }
        } catch (err) {
            console.error(err);
            return NextResponse.json({ error: "ERROR! ", err});
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <Image src={"/images/ffglogo.png"} alt='Logo' fill objectFit='cover' />
                </div>
                <div className={classes.big_title}>WILLKOMMEN BEI</div>
                <div className={classes.bigger_title}>Fresh Family Guide</div>
                <div className={classes.title}>where the families find guidance</div>
                <div className={classes.access}>Log in to access more features!</div>
            </div>
            <form onSubmit={handleSubmit} className={classes.right}>
                <div className={classes.big_title_S}>Sign up</div>
                <div className={classes.sep}></div>
                <input name='firstname' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} className={classes.input} placeholder='First name' />
                <input name='lastname' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} className={classes.input} placeholder='Last name'/>
                <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className={classes.input} placeholder='Email'/>
                <input name='password' type='password' value={password} onChange={(e) => setpassword(e.target.value)} className={classes.input} placeholder='Create password' />
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={classes.input} placeholder='Confirm Password' />
                <div className={classes.errortext}>{error}</div>
                <button className={classes.button} type='submit'>Sign up</button>
                <div className={classes.redirection}>Already have an account? <Link href={"/login"}><span className={classes.link}>Log in</span></Link></div>
            </form>
        </div>
    );
}

export default Registration;
