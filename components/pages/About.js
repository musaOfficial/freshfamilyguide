import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>About Us</h1>
            <div className={styles.teamMember}>
               
                <div className={styles.info}>
                    <h2>Musa Arslan (PTM)</h2>
                    <p><strong>Der Frontend und Backend Programmierer, UI/UX Designer</strong></p>
                    <p>ARS210467@spengergasse.at</p>
                </div>
            </div>
            <div className={styles.teamMember}>
              
                <div className={styles.info}>
                    <h2>Jovan Seljakovic (PL)</h2>
                    <p><strong>Dokumentenmanager</strong></p>
                    <p>SEL210484@spengergasse.at</p>
                </div>
            </div>
            <div className={styles.teamMember}>
                
                <div className={styles.info}>
                    <h2>Montassar Chrigui (PTM)</h2>
                    <p><strong>Unterstützt beim Programmieren und Tester</strong></p>
                    <p>chr210471@spengergasse.at</p>
                </div>
            </div>
            <div className={styles.teamMember}>
                
                <div className={styles.info}>
                    <h2>Mohamed Ali (PTM)</h2>
                    <p><strong>Unterstützt beim Programmieren und Tester</strong></p>
                    <p>ALI210465@spengergasse.at</p>
                </div>
            </div>
        </div>
    );
}

export default About;
