import { useState } from "react";
import classes from "./ArticleCard.module.css";
import Image from "next/image";

function ArticleCard({ image, title, content }) {
    const [open, setOpen] = useState(false);

    return (
        !open ? (
            <div className={classes.container} onClick={() => setOpen(true)}>
                <Image src={image} alt={title} width={400} height={250} />
                <h3 className={classes.title}>{title}</h3>
            </div>
        ) : (
            <div className={classes.modal_container}>
                <Image src={image} alt={title} width={400} height={250} />
                <div className={classes.close} onClick={() => setOpen(false)}>
                    <Image src={"/images/close.png"} alt="closer" layout="fill" />
                </div>
                <div className={classes.big_title}>{title}</div>
                <div className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        )
    );
}

export default ArticleCard;
