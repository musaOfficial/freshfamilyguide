import Image from "next/image";
import classes from "./ProductLinks.module.css"
import Link from "next/link";
function ProductLinks(){
    return (
        <div className={classes.container}>
        <h1 className={classes.heading}>Produktliste</h1>
        <div className={classes.iwie}>
            <Link href={"https://www.dm.at/pampers-premium-protection-windeln-gr-4-9-14-kg-monatsbox-p8006540705612.html"}>
            <div className={classes.li}>
                <div className={classes.imgdiv}>
                    <Image src={"/images/babywindel.jpg"} layout="fill" />
                </div>
                Pampers Premium Protection Windeln
                <p>Babywindel in Größen von 2-4</p>
            </div>
            </Link>
            <Link href={"https://www.dm.at/babylove-feuchttuecher-mit-99-prozent-wasser-p4066447382938.html"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/Feuchtetuecher.jpg"} layout="fill" />
                </div>
                Babylove Feuchttücher mit 99% Wasser
                <p>Angenehme Feuchttücher für den Stuhlgang des Babys</p>
            </div >
            </Link>
            <Link href={"https://www.dm.at/balea-med-kids-ultra-sensitive-dusche-und-shampoo-p4066447429169.html"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/babyshampoo.jpg"} layout="fill" />
                </div>
                Balea med Kids Ultra Sensitive Dusche und Shampoo
                <p>Mildes Babyshampoo für jeden Hauttypen</p>
            </div>
            </Link>
            <Link href={"https://www.dm.at/babylove-sensitive-sonnencreme-lsf-50-p4066447579420.html"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/sonnencreme.jpg"} layout="fill" />
                </div>
                Babylove Sensitive Sonnencreme LSF 50
                <p>Sonnencreme für milde und sensible Haut</p>
            </div>
            </Link>

            <Link href={"https://www.dm.at/babylove-babywasser-p4058172425899.html"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/babywasser.jpg"} layout="fill" />
                </div>
                Babylove Babywasser
                <p>Laktose- und glutenfreies Wasser</p>
            </div>
            </Link>
            <Link href={"https://www.dm.at/aptamil-pronutra-anfangsmilch-pre-p4056631001202.html"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/Anfangsmilch.jpg"} layout="fill" />
                </div>
                Aptamil Pronutra Anfangsmilch
                <p>Angenehme Anfangsmilch für Babys</p>
            </div>
            </Link>

            <Link href={"https://www.hessnatur.com/at/decke-aus-reiner-bio-baumwolle/p/531110147?campaign=PSM/Google_NonBrand/19929694934//&layer=/202405FS20PF&utm_id=19929694934&utm_source=google&utm_medium=cpc&utm_campaign=AT_PSM_NonBrand_Low-Focus&gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWheO9A9CIFIcoXuDxaWpjHlAscsGJrwPH4iBWkML8PKZsngvHhD1zBoCzJ4QAvD_BwE"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/waermedecke.jpg"} layout="fill" />
                </div>
               Hessnatur Babydecke aus reiner Bio-Baumwolle
                <p>Babydecke für einen angenehmen Schlaf</p>
            </div>
            </Link>

            <Link href={"https://www.babypark.de/cybex-e-priam-4-kinderwagen-set-4-in-1.html?color=613&gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWnIkhRNoNGKXEqdRTVgyUK8BIQeJLFiiSSID2GZ15YUpHbMTwDR0zRoCqPMQAvD_BwE"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/kinderwagenm(t).jpg"} layout="fill" />
                </div>
                Cybex e-Priam 4 Kinderwagen Set 4-in-1
                <p>Bestes (teuerstes) Kinderwagen der Welt mit der besten Qualität</p>
            </div>
            </Link>
            <Link href={"https://www.mueller.at/p/bayer-chic-2000-kombi-puppenwagen-mika-IPN2902616/?itemId=2902616&_pmclid=b_19105766_wp_4754915_k_6288643&gad_source=1&gclid=CjwKCAjw0YGyBhByEiwAQmBEWiAdK-fpeoa4N-nFnB5fDuU6T7cHwyKxijmIEryXhY0b0gCMetZLhRoCeqsQAvD_BwE"}>
            <div className={classes.li}>
            <div className={classes.imgdiv}>
                    <Image src={"/images/kinderwagen(b).jpg"} layout="fill" />
                </div>
                 <div className={classes.link}>Bayer Chic 2000 Kombi Puppenwagen Mika</div>
                <p>Etwas billigerer Kinderwagen</p>
            </div>
            </Link>
        </div>
    </div>
    )
} export default ProductLinks;