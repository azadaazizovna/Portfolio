import styles from '../styles/Portfolio.module.css'
import Image from 'next/image'
import shop from './images/shop.jpg'
import quiz from './images/quiz.jpg'
import shop2 from './images/shop2.jpg'
import note from './images/note.jpg'
import recipe from './images/recipe.jpg'
import next from './images/next.jpg'

export default function Portfolio() {
    return (
        <div className={styles.portfolio} id='portfolio'>
            <div className={styles.container}>
               <a href='https://best-react-shop-app.herokuapp.com/' className={styles.item}>
                   <Image className={styles.img} src={shop} alt='Shop' />
                   <h3>Shopping App</h3>
               </a>
               <a href='https://azadaazizovna.github.io/Quiz-app/' className={styles.item}>
                   <Image className={styles.img}  src={quiz} alt='Shop' />
                   <h3>Quiz App</h3>
               </a>
               <a href='https://azadaazizovna.github.io/sneaker-shop/' className={styles.item}>
                   <Image className={styles.img} src={shop2} alt='Shop' />
                   <h3>Shop App</h3>
               </a>
               <a href='https://azadaazizovna.github.io/note-app/' className={styles.item}>
                   <Image className={styles.img} src={note} alt='Shop' />
                   <h3>Note App</h3>
               </a>
               <a href='https://azadaazizovna.github.io/react-recipe-app/' className={styles.item}>
                   <Image className={styles.img} src={recipe} alt='Shop' />
                   <h3>Recipe App</h3>
               </a> 
               <a href='https://next-js-sandy-phi.vercel.app/' className={styles.item}>
                   <Image className={styles.img} src={next} alt='Shop' />
                   <h3>Next-js App</h3>
               </a>
            </div>
        </div>
    )
}
