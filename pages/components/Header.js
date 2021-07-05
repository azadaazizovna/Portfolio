import { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import logo from './logo.png'
import styles from '../../styles/Layout.module.css'


export default function Header() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className={styles.header}>
           <div className={styles.img}>
            <Image src={logo} alt='Portfolio' />
           </div>
           <ul style={click? {left: '0'} : {left: '100%'}} className={styles.menu}>
               <li><a href='#'><Link onClick={handleClick} to='intro' smooth={true} duration={1000}>Home</Link></a> </li>
               <li><a href='#'><Link onClick={handleClick} to='skills' smooth={true} duration={1000}>About</Link></a></li>
               <li><a href='#'><Link onClick={handleClick} to='portfolio' smooth={true} duration={1000}>Portfolio</Link></a></li>
               <li><a href='#'><Link onClick={handleClick} to='courses' smooth={true} duration={1000}>Courses</Link></a></li>
               <li><a href='#'><Link onClick={handleClick} to='contact' smooth={true} duration={1000}>Contact</Link></a></li>
               <li><a href='https://github.com/azadaazizovna'> <i style={{fontSize: '24px', color: 'darkblue'}} className="fab fa-github"></i> </a></li>
           </ul>
           <div className={styles.icon}>
           <i onClick={handleClick} className={click ? 'fa fa-times' : 'fa fa-bars'} />
           </div>
        </div>
    )
}

