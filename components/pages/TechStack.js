import React from "react";
import styles from "./TechStack.module.css";

const TechStack = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading1}>Unser Tech Stack</div>
            <p className={styles.paragraph}>
                In unserem Projekt verwenden wir eine Kombination moderner Technologien, um eine robuste, sichere und skalierbare Anwendung zu erstellen. Unser Tech Stack umfasst MongoDB, Mongoose, React, Next.js, NextAuth, bcrypt, JWT und GridFSStream. Hier ist eine Übersicht und eine detaillierte Erklärung jeder Technologie sowie ihrer Interaktionen.
            </p>

            <div className={styles.heading2}>Zusammenfassung</div>
            <div className={styles.list}>
                <div className={styles.listItem}><strong>MongoDB</strong>: Eine NoSQL-Datenbank, die flexible und skalierbare Datenstrukturen ermöglicht.</div>
                <div className={styles.listItem}><strong>Mongoose</strong>: Eine Object Data Modeling (ODM) Bibliothek für MongoDB und Node.js.</div>
                <div className={styles.listItem}><strong>React</strong>: Eine JavaScript-Bibliothek für den Aufbau von Benutzeroberflächen.</div>
                <div className={styles.listItem}><strong>Next.js</strong>: Ein React-Framework für serverseitiges Rendering und den Aufbau von statischen Webseiten.</div>
                <div className={styles.listItem}><strong>NextAuth</strong>: Eine Authentifizierungsbibliothek für Next.js.</div>
                <div className={styles.listItem}><strong>bcrypt</strong>: Eine Bibliothek zur Passwort-Hashing für die Sicherheit von Benutzerkonten.</div>
                <div className={styles.listItem}><strong>JWT (JSON Web Tokens)</strong>: Ein Standard für die Erstellung von Zugriffstokens, die die Identität eines Benutzers bestätigen.</div>
                <div className={styles.listItem}><strong>GridFSStream</strong>: Ein Werkzeug zum Speichern und Abrufen von großen Dateien in MongoDB.</div>
            </div>

            <div className={styles.heading2}>Im Detail</div>
            <div className={styles.heading3}>MongoDB</div>
            <p className={styles.paragraph}>
                MongoDB ist eine NoSQL-Datenbank, die auf einer dokumentenorientierten Struktur basiert. Im Gegensatz zu relationalen Datenbanken verwendet MongoDB flexible JSON-ähnliche Dokumente, was es einfach macht, Daten in verschiedenen Formaten zu speichern und zu verwalten. Diese Flexibilität macht MongoDB ideal für Anwendungen, die sich schnell weiterentwickeln und skalieren müssen.
            </p>

            <div className={styles.heading3}>Mongoose</div>
            <p className={styles.paragraph}>
                Mongoose ist eine Object Data Modeling (ODM) Bibliothek für MongoDB und Node.js. Es bietet eine strikte Modellierung der Anwendungsdaten durch Schemata, die die Struktur und Validierung der Daten definieren. Mongoose erleichtert die Arbeit mit MongoDB, indem es Middleware, Hooks und umfangreiche Abfrage-APIs bereitstellt.
            </p>

            <div className={styles.heading3}>React</div>
            <p className={styles.paragraph}>
                React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Entwickelt von Facebook, ermöglicht React das Bauen von komponentenbasierten UIs, die wiederverwendbar und effizient sind. React verwendet ein virtuelles DOM, um Änderungen effizient zu verarbeiten und eine hohe Performance zu gewährleisten.
            </p>

            <div className={styles.heading3}>Next.js</div>
            <p className={styles.paragraph}>
                Next.js ist ein Framework für React, das serverseitiges Rendering (SSR) und statische Seitenerzeugung (SSG) unterstützt. Es bietet viele integrierte Funktionen wie Routing, Bildoptimierung und API-Routen, die die Entwicklung von React-Anwendungen vereinfachen. Next.js ist ideal für die Erstellung von schnellen, SEO-freundlichen Webanwendungen.
            </p>

            <div className={styles.heading3}>NextAuth</div>
            <p className={styles.paragraph}>
                NextAuth ist eine Authentifizierungsbibliothek für Next.js. Sie unterstützt verschiedene Authentifizierungsmethoden, einschließlich OAuth, E-Mail-Anmeldung und benutzerdefinierte Anmeldungen. NextAuth bietet eine einfache Integration und robuste Sicherheitsfunktionen, um Benutzerkonten zu schützen und die Anmeldeprozesse zu verwalten.
            </p>

            <div className={styles.heading3}>bcrypt</div>
            <p className={styles.paragraph}>
                bcrypt ist eine Passwort-Hashing-Bibliothek, die verwendet wird, um Passwörter sicher zu speichern. Es verwendet einen Salt-Wert, um das Passwort zu verschlüsseln, was Brute-Force-Angriffe erschwert. bcrypt ist eine bewährte Methode, um Passwörter zu schützen und die Sicherheit der Benutzerdaten zu gewährleisten.
            </p>

            <div className={styles.heading3}>JWT (JSON Web Tokens)</div>
            <p className={styles.paragraph}>
                JWT ist ein Standard für die Erstellung von Zugriffstokens, die die Identität eines Benutzers bestätigen. Ein JWT besteht aus einem Header, einem Payload und einer Signatur. Diese Tokens werden oft für die Authentifizierung und Autorisierung in Webanwendungen verwendet, um sichere API-Interaktionen zu ermöglichen.
            </p>

            <div className={styles.heading3}>GridFSStream</div>
            <p className={styles.paragraph}>
                GridFSStream ist ein Werkzeug zum Speichern und Abrufen von großen Dateien in MongoDB. Es teilt große Dateien in kleinere Chunks auf und speichert diese in einer speziellen Collection. GridFSStream wird häufig verwendet, um Dateien wie Bilder, Videos oder andere große Datensätze in MongoDB zu speichern und zu verwalten.
            </p>

            <div className={styles.heading2}>Integration und Zusammenspiel</div>
            <p className={styles.paragraph}>
                Unser Tech Stack ist sorgfältig ausgewählt, um eine nahtlose Integration und Zusammenarbeit zwischen den verschiedenen Technologien zu gewährleisten:
            </p>
            <div className={styles.list}>
                <div className={styles.listItem}>
                    <strong>MongoDB und Mongoose</strong>: Mongoose erleichtert die Arbeit mit MongoDB, indem es eine Schicht zur Datenmodellierung und -validierung bereitstellt. Es hilft dabei, Datenstrukturen klar zu definieren und erleichtert die Interaktion mit der Datenbank.
                </div>
                <div className={styles.listItem}>
                    <strong>React und Next.js</strong>: React bildet das Fundament unserer Benutzeroberfläche, während Next.js zusätzliche Funktionen wie serverseitiges Rendering und statische Seitenerzeugung bietet, um die Performance und SEO-Freundlichkeit zu verbessern.
                </div>
                <div className={styles.listItem}>
                    <strong>NextAuth und bcrypt</strong>: NextAuth verwaltet die Authentifizierungsprozesse, während bcrypt für die sichere Speicherung der Passwörter sorgt. Diese Kombination gewährleistet eine sichere und robuste Benutzeranmeldung und -authentifizierung.
                </div>
                <div className={styles.listItem}>
                    <strong>JWT</strong>: JWT wird verwendet, um die Authentifizierungstokens zu erstellen und zu verifizieren, die sicherstellen, dass nur autorisierte Benutzer auf geschützte Ressourcen zugreifen können. Es spielt eine Schlüsselrolle bei der Implementierung der Zugriffskontrolle in unserer Anwendung.
                </div>
                <div className={styles.listItem}>
                    <strong className={styles.strong}>GridFSStream</strong>: Für das Speichern und Abrufen von großen Dateien verwenden wir GridFSStream in Kombination mit MongoDB. Dies ermöglicht es uns, große Dateien effizient zu handhaben und in unserer Datenbank zu speichern.
                </div>
            </div>
            <p className={styles.paragraph}>
                Durch die Integration dieser Technologien können wir eine moderne, skalierbare und sichere Webanwendung entwickeln, die sowohl benutzerfreundlich als auch leistungsstark ist. Jede Technologie spielt eine spezifische Rolle und trägt dazu bei, die Gesamteffizienz und Funktionalität unseres Projekts zu verbessern.
            </p>
        </div>
    );
}

export default TechStack;
