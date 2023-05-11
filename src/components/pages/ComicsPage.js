import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";
import Spinner from '../spinner/Spinner';

const SingleComicsPage = lazy(() => import('./SingleComicsPage'));

const ComicsPage = () => {
    return (
        <>
            <AppBanner/>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route>
                        <Route path=":comicId" element={<SingleComicsPage/>}/>
                        <Route path="/*" element={<ComicsList/>}/>
                    </Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default ComicsPage;