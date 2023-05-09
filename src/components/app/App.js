import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage} from "../pages";
import SingleComic from "../singleComic/SingleComic";

import decoration from '../../resources/img/vision.png';

const App = () => {
    

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    {/* <AppBanner/>
                    <SingleComic/> */}
                    
                    <Routes>
                        <Route path="/" element ={<MainPage/>}/>
                        <Route path="/comics" element ={<ComicsPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;