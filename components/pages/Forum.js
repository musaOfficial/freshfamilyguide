import classes from "./Forum.module.css"
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "../tools/ArticleCard";
import { useEffect, useState } from "react";
function Forum(){
    const router = useRouter();
    const path = router.pathname.replace("/articles/", "");
    var pathName;
    const [cards, setCards] = useState([]);

    if(path === "nutrition"){
        pathName = "Ernährung";
    } else if(path === "sleep"){
        pathName = "Schlaf";
    } else if(path === "hygiene"){
        pathName = "Hygiene"
    } else if(path === "entertainment-babies"){
        pathName = "Unterhaltung für Babies"
    } else if(path === "entertainment-kids"){
        pathName = "Unterhaltung für Kinder"
    }
    const fetchArticles = async () => {
        try {
            const response = await fetch(`/api/get_articles`, {
                method: "GET",
                
            })
            if(response.ok){
                const data = await response.json();
                console.log(data);
                const card_data = data.map((i) => ({
                    content: i.content,
                    title: i.title,
                    image: i.image,
                    category: i.category
                }));
                setCards(data);
            }
        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, [])
    
    console.log(cards);
    

    return (
        <div className={classes.container}>
            <div className={classes.title}>Artikeln über <span className={classes.text}>{`"${pathName}"`}</span></div>
            <div className={classes.grid}>
                {cards.map((card, index) => card.category == pathName && <ArticleCard key={index} content={card.content} image={card.image} title={card.title} />)}
            </div>
        </div>
    )
} export default Forum;