import Home from "./Home/Home"
import Lesson1 from "./Lessons/Lesson1"
import Lesson10 from "./Lessons/Lesson10"
import Lesson2 from "./Lessons/Lesson2"
import Lesson3 from "./Lessons/Lesson3"
import Lesson4 from "./Lessons/Lesson4"
import Lesson5 from "./Lessons/Lesson5"
import Lesson6 from "./Lessons/Lesson6"
import Lesson7 from "./Lessons/Lesson7"
import Lesson8 from "./Lessons/Lesson8"
import Lesson9 from "./Lessons/Lesson9"
import Loyal from "./loyal/loyal"
import {  Routes , Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Contact from "./Home/concat"

function App() {
  const { t, i18n } = useTranslation();
  

  return (
   <>
   <Loyal>
    <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/concat" element={<Contact/>}/>
 <Route path="/lesson1" element={<Lesson1/>}/>
 <Route path="/lesson2" element={<Lesson2/>}/>
 <Route path="/lesson3" element={<Lesson3/>}/>
 <Route path="/lesson4" element={<Lesson4/>}/>
 <Route path="/lesson5" element={<Lesson5/>}/>
 <Route path="/lesson6" element={<Lesson6/>}/>
 <Route path="/lesson7" element={<Lesson7/>}/>
 <Route path="/lesson8" element={<Lesson8/>}/>
 <Route path="/lesson9" element={<Lesson9/>}/>
 <Route path="/lesson10" element={<Lesson10/>}/>
    </Routes>
   </Loyal>
   <div>
      {/* <h1>{t('welcome')}</h1> */}
      {/* <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
      <button onClick={() => i18n.changeLanguage('uz')}>O‘zbekcha</button> */}
    </div>
   </>

  )
}

export default App
