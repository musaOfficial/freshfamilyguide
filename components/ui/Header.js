import Link from "next/link";
import classes from "./Header.module.css"
import Image from "next/image";
import { useState } from "react";
import {signOut, useSession, signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
function Header(){
    const ruter = useRouter();
    const [articlesOpen, setArticlesOpen] = useState(false);
    const [headerOpen, setHeaderOpen] = useState(false);
    const {data: session} = useSession();
    const signedIn = session?.user;
    const handleSignOut = async () => {
        try{
            await signOut();
            ruter.push("/");
        }
        catch(err){
            console.error("Error,", err);
        }
    }

    return (
        <>
        <header className={classes.header} onMouseLeave={() => setArticlesOpen(false)}>
        
        <div className={`${classes.container}`}>
            <div className={classes.left}>
                <div className={classes.flex}>
                    <div className={classes.logo}>
                        <Image src={"/images/ffglogo.png"} layout="fill" alt="logo" />
                    </div>
                    <div className={classes.logotitle}>
                        Freshfamilyguide
                    </div>
                </div>
                <div className={`${classes.toggler}`} onClick={() => setHeaderOpen(d => !d)}>
                {
                    headerOpen ? <div className={classes.opt}><Image src={"/images/close.png"} layout='fill' alt="image" /></div> : <div className={classes.opt}><Image src={"/images/menu.png"} layout='fill' alt="image" /></div>
                }
                </div>
            </div>
            <div className={`${classes.right} ${!headerOpen && classes.closeright}`}>
                <Link href={"/"}><div className={classes.link}>Home</div></Link>
                <div className={classes.link} onMouseEnter={() => setArticlesOpen(true)}>Artikeln <div className={`${classes.chevron} ${articlesOpen && classes.rotate}`}><Image src={"/images/chevron.png"} alt="chevron" layout="fill" /></div></div>
                <div className={classes.more_links}>
                    <Link href={"/articles/nutrition"}><div className={classes.article}>Ernährung</div></Link>
                    <Link href={"/articles/sleep"}><div className={classes.article}>Schlaf</div></Link>
                    <Link href={"/articles/hygiene"}><div className={classes.article}>Hygiene</div></Link>
                    <Link href={"/articles/entertainment-babies"}><div className={classes.article}>Unterhaltung für Babies</div></Link>
                    <Link href={"/articles/entertainment-kids"}><div className={classes.article}>Unterhaltung für Kinder</div></Link>
                </div>
                <Link href={"/about-us"}><div className={classes.link}>Über uns</div></Link>
                <Link href={"/tech-stack"}><div className={classes.link}>TechStack</div></Link>
                {!signedIn ?
                <><Link href={"/login"}><div className={classes.button}>Anmelden</div></Link>
                <Link href={"/signup"}><div className={classes.button}>Registrieren</div></Link></> : <><Link href={"/editor"}><div className={classes.button_long}>Schreibe einen Beitrag</div></Link><div className={classes.signout} onClick={() => handleSignOut()}>Logout</div></>}
            </div>
        </div>
        {articlesOpen && <div className={classes.articles_container}>
            <Link href={"/articles/nutrition"}><div className={classes.article}>Ernährung</div></Link>
            <Link href={"/articles/sleep"}><div className={classes.article}>Schlaf</div></Link>
            <Link href={"/articles/hygiene"}><div className={classes.article}>Hygiene</div></Link>
            <Link href={"/articles/entertainment-babies"}><div className={classes.article}>Unterhaltung für Babies</div></Link>
            <Link href={"/articles/entertainment-kids"}><div className={classes.article}>Unterhaltung für Kinder</div></Link>
        </div>}
        </header>
        </>
    )
}
export default Header;