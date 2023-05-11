import {Route, Routes} from 'react-router-dom';

import SingleComicsPage from "./SingleComicsPage";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    return (
        <>
             <AppBanner/>
            <Routes>
                <Route>
                    <Route path=":comicId" element={<SingleComicsPage/>}/>
                    <Route path="/*" element={<ComicsList/>}/>
                </Route>
        </Routes>
        </>
    )
}

export default ComicsPage;