import Link from "next/link";
import styles from "./Topo.module.css";


export default function Topo() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} >
                <Link className={styles.btn} href="/">
                    HOME
                </Link>
                <Link className={styles.btn} href="/Sobre">
                    SOBRE
                </Link>
                <Link className={styles.btn} href="/Projetos">
                    PROJETOS
                </Link>
            </nav>
        </header>
    );
};