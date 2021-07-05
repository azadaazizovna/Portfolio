import styles from '../styles/Contact.module.css'
import { Link } from 'react-scroll'

export default function Contact() {
    return (
        <div className={styles.contact} id='contact'>
        <div className={styles.container}>
            <li> <span><i className="far fa-address-book"></i> <i className="fab fa-whatsapp"> +97333503902 </i></span></li> 
            <li> <i className="far fa-envelope"> azadaaziz@mail.ru</i></li> 
            <li> <i className="fab fa-github"> azadaazizovna  </i></li>
            <li> <i className="fab fa-instagram"> azadaalkhaja </i></li>  
        </div>
        <Link to='intro' smooth={true} duration={900} className={styles.back}><i className="fas fa-arrow-circle-up"></i> </Link>
        </div>
    )
}
