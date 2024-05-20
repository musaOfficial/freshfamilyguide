import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>About Us</h1>
            <div className={styles.teamMember}>
               
                <div className={styles.info}>
                    <h2>Musa Arslan</h2>
                    <p><strong>Der Führer des Projekts, der Frontend und Backend Programmierer, UI/UX Designer</strong></p>
                    <p>
                        Musa Arslan ist das Herz und die Seele unseres Projekts. Mit seiner umfangreichen Erfahrung in Frontend- und Backend-Programmierung sowie seinem ausgeprägten Sinn für UI/UX-Design hat er die technische Architektur unseres Projekts gestaltet und entwickelt. Musa ist bekannt für seine Fähigkeit, komplexe Probleme zu lösen und innovative Lösungen zu finden. Seine Leidenschaft für Technologie und Design spiegelt sich in jeder Facette unserer Plattform wider.
                    </p>
                    <p>
                        Musa hat sich als Entwickler einen Namen gemacht, indem er nahtlose und benutzerfreundliche Schnittstellen erstellt hat. Seine Erfahrung und seine Fähigkeit, sowohl das große Ganze als auch die Details im Blick zu behalten, machen ihn zu einem unverzichtbaren Mitglied unseres Teams. Seine Führungsqualitäten und sein Engagement treiben das gesamte Team an, stets das Beste zu geben.
                    </p>
                </div>
            </div>
            <div className={styles.teamMember}>
              
                <div className={styles.info}>
                    <h2>Jovan Seljakovic</h2>
                    <p><strong>Dokumentenmanagement</strong></p>
                    <p>
                        Jovan Seljakovic spielt eine zentrale Rolle in unserem Team als Verantwortlicher für das Dokumentenmanagement. Seine organisatorischen Fähigkeiten und seine Liebe zum Detail gewährleisten, dass alle Dokumente und Aufzeichnungen präzise und aktuell sind. Jovan sorgt dafür, dass unser Team jederzeit auf die benötigten Informationen zugreifen kann, was unsere Effizienz erheblich steigert.
                    </p>
                    <p>
                        Mit seiner systematischen Herangehensweise stellt Jovan sicher, dass alle Projektdokumentationen klar und strukturiert sind. Seine Fähigkeit, komplexe Informationen zu ordnen und zugänglich zu machen, ist ein wesentlicher Faktor für den reibungslosen Ablauf unserer täglichen Arbeit. Jovan ist ein unverzichtbarer Bestandteil unseres Teams, dessen Arbeit oft im Hintergrund bleibt, aber dennoch entscheidend für unseren Erfolg ist.
                    </p>
                </div>
            </div>
            <div className={styles.teamMember}>
                
                <div className={styles.info}>
                    <h2>Montassar Chrigui</h2>
                    <p><strong>Unterstützt beim Programmieren und Tester</strong></p>
                    <p>
                        Montassar Chrigui bringt seine umfassenden Fähigkeiten als Entwickler und Tester in unser Projekt ein. Seine Expertise in verschiedenen Programmierbereichen ermöglicht es ihm, effektiv zur Codebasis beizutragen und sicherzustellen, dass unsere Anwendungen robust und fehlerfrei sind. Montassar ist bekannt für seine präzisen Tests und sein tiefes Verständnis der Softwareentwicklung.
                    </p>
                    <p>
                        Durch seine akribische Arbeit als Tester identifiziert Montassar potenzielle Schwachstellen und sorgt dafür, dass unsere Anwendungen reibungslos funktionieren. Sein Engagement und seine Liebe zum Detail tragen dazu bei, dass wir qualitativ hochwertige Produkte liefern können. Montassar ist ein Teamplayer, dessen Beiträge wesentlich zur Verbesserung unserer Softwarequalität beitragen.
                    </p>
                </div>
            </div>
            <div className={styles.teamMember}>
                
                <div className={styles.info}>
                    <h2>Mohamed Ali</h2>
                    <p><strong>Unterstützt beim Programmieren und Tester</strong></p>
                    <p>
                        Mohamed Ali ergänzt unser Team mit seinen Fähigkeiten im Programmieren und Testen. Seine analytischen Fähigkeiten und sein technisches Know-how sind entscheidend für die Entwicklung und Verbesserung unserer Softwarelösungen. Mohamed arbeitet eng mit den anderen Entwicklern zusammen, um sicherzustellen, dass alle Komponenten optimal integriert sind.
                    </p>
                    <p>
                        Als Tester stellt Mohamed sicher, dass unsere Produkte höchsten Qualitätsstandards entsprechen. Seine Fähigkeit, Fehler zu identifizieren und Lösungen vorzuschlagen, ist von unschätzbarem Wert. Mohamed ist für seine Zuverlässigkeit und sein technisches Geschick bekannt, was ihn zu einem unverzichtbaren Mitglied unseres Teams macht.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
