import Link from "next/link";
import styles_secao_banner from "./Secao_Banner.module.css";
import styles from "../Topo/Topo.module.css";
export default function Secao_Banner() {
    return (
        <section className={styles_secao_banner.container} >
            <section className={styles_secao_banner.sub_container}>
                <h1>
                    ELIEL REIS
                </h1>
                <h2>
                    FRONT-END DEVELOPER
                </h2>
                <section className={styles_secao_banner.container_links} >
                    <Link className={styles.btn} href="https://www.linkedin.com/in/eliel-reis-978b9b224/" target="_blank" >
                        LINKEDIN
                    </Link>
                    <Link className={styles.btn} href="https://github.com/eliel-reis?tab=repositories" target="_blank" >
                        GITHUB
                    </Link>
                </section>
            </section>
        </section>
    );
};