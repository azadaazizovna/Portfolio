import styles from '../styles/Intro.module.css'
import { Link } from 'react-scroll'
import Typed from 'react-typed'
import Image from 'next/dist/client/image'
import ava from '../section/images/ava.jpg'

export default function Intro() {
    

    return (
        <div className={styles.intro} id='intro'>
            <div className={styles.introTitle}>
                <p>Hi There, I'm </p>
                <h1> Azada Alkhaja</h1>
                <p>Junior | <span> 
                <Typed 
                className='typed-text'
                strings={[' Designer', ' Frontend Developer']}
                typeSpeed={70}
                backSpeed={80} 
                loop />
                </span>
                </p>
                <Link to='skills' smooth={true} duration={900}> <button className={styles.btn}>Learn More</button> </Link>
            </div>
           
        </div>
    )
}
