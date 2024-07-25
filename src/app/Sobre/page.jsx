import Link from "next/link";
import styles from "@/components/Topo/Topo.module.css";
import styles_sobre from "./Sobre.module.css";

export default function Sobre() {
    return (
        <section className={styles_sobre.container} >
            <section className={styles_sobre.sub_container} >
                <section className={styles_sobre.h1} >
                    <h1>
                        SOBRE MIM
                    </h1>
                </section>
                <section className={styles_sobre.container_p} >
                    <p>
                        Meu nome é Eliel, desenvolvedor de software focado em front-end. Possuo experiência prática com tecnologias como JavaScript, CSS, HTML, React.js/Next.js, REST e Git.
                    </p>
                    <p>
                        Destaco-me especialmente na criação de aplicações utilizando React.js/Next.js. Busco evoluir como desenvolvedor full-stack, começando por consolidar minha expertise como front-end.
                    </p>
                    <p>
                        Valorizo a meritocracia em meu trabalho, sempre buscando superar desafios e entregar soluções de qualidade.
                    </p>
                </section>
                <section className={styles_sobre.container_link} >
                    <Link href="/Currículo.pdf" className={styles.btn} target="_blank" >
                        Currículo
                    </Link>
                </section>

            </section>
        </section>
    );
};