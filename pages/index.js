import MainLayout from "./components/MainLayout"
import Intro from "../section/Intro"
import Skills from "../section/Skills"
import Portfolio from "../section/Portfolio"
import Courses from "../section/Courses"
import Contact from "../section/Contact"

function HomePage() {
    return <MainLayout>
       <Intro />
       <Skills />
       <Portfolio />
       <Courses />
       <Contact />
    </MainLayout>
  }
  
  export default HomePage