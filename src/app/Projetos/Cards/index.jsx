import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards({ titulo, sub_titulo, descricao }) {
    return (
        <section className={styles.container}>
            <section className={styles.btn} >
                <Link className={styles.pos_btn} href="/">
                    <h3>
                        {titulo}
                    </h3>
                    <span>
                        {sub_titulo}
                    </span>
                </Link>
            </section>
            <section className={styles.descricao} >
                <p>
                    {descricao}
                </p>
            </section>

        </section>
    );
};