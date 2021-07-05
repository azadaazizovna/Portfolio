import styles from '../styles/Courses.module.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import Image from 'next/image'
import react from './images/react.jpg'
import redux from './images/redux.jpg'
import js from './images/js.jpg'

export default function Courses() {
    return (
        <div className={styles.courses} id='courses'>
         <h1>My Courses from Udemy</h1>
         <Slide className={styles.slider}>
            <div className={styles.eachSlide}>
              <Image className={styles.img} src={react} alt='/' />
            </div>
            <div className={styles.eachSlide}>
              <Image className={styles.img} src={js} alt='/' />
            </div>
            <div className={styles.eachSlide}>
              <Image className={styles.img} src={redux} alt='/' />
            </div>
          </Slide>
        </div>
    )
}
