import styles from '../styles/Skills.module.css'
import { Link } from 'react-scroll'

export default function Skills() {
    return (
        <div className={styles.skill} id='skills' >
            <div className={styles.skillTitle}>
                <h1>Skills &amp; Experience</h1>
                <p>
                Since beginning my study in Frontend  developer, nearly one year ago I’ve done study <span> HTML </span>, <span> CSS </span>, <span> Javascript </span>, <span> React </span> and <span> Next Js </span> , many frameworks like <span> Bootstrap </span>, <span> Material-UI </span> and <span> Theme-UI</span>. I also have some experience with server- side website programming. 
                </p>
                <p> 
                I can create successful responsive websites that are fast, easy to use. Currently I’m learning to <span> React-redux</span>.
                </p>
                <p>
                Visit my Portfolio for more details.
                </p>
                <p>
                <Link to='portfolio' smooth={true} duration={800} > <button className={styles.btn}> Visit Portfolio </button> </Link>
                </p>
            </div>
            <div className={styles.skillBar}>
                <ul>
                    <li><h3>HTML</h3><span className={styles.bar}><span className={styles.html}></span></span></li>
                    <li><h3>CSS</h3><span className={styles.bar}><span className={styles.css}></span></span></li>
                    <li><h3>JAVASCRIPT</h3><span className={styles.bar}><span className={styles.js}></span></span></li>
                    <li><h3>REACT</h3><span className={styles.bar}><span className={styles.react}></span></span></li>
                    <li><h3>NEXT JS</h3><span className={styles.bar}><span className={styles.next}></span></span></li>
                </ul>
            </div>
        </div>
    )
}
