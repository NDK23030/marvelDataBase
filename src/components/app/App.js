import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
                    
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;