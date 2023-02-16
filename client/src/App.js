import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header';
import Home from './menu/home';
import ClimateArticle from './menu/control-articles';
import Signin from './menu/signin';
import Climatenews from './menu/news';
const App=()=>{
    return(
        <>
          <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/control-articles' element={<ClimateArticle/>}/>
                <Route path='/newsletter' element={<Signin/>}/>
                <Route path='/news' element={<Climatenews/>}/>
            </Routes>

          </BrowserRouter>
        </>
    )
}
export default App;