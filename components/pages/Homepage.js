import classes from "./Homepage.module.css"
import Link from "next/link";
import Image from "next/image";
function Homepage(){
    return (
        <div className={classes.container}>
            <div className={classes.title}>Welcome to Freshfamilyguide</div>
            <div className={classes.description}>Dive into a World of Engaging Articles on Raising a Child, explore our extensive collection of insightful and inspiring articles, offering practical tips on every aspect of parenting. Join our community and discover new ideas to support your child{"'"}s growth and development.</div>
            <div className={classes.buttons}>
                <Link href={"/articles"}><div className={classes.button}>Discover</div></Link>
                <Link href={"/signup"}><div className={classes.button}>Get Started</div></Link>
            </div>
            <div className={classes.background}>
                <div className={classes.img}>
                    <Image src={"/images/homeimg.jpeg"} alt="homeimg" layout="fill" />
                </div>
            </div>
        </div>
    )
} export default Homepage;