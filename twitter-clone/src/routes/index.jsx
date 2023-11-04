import {createBrowserRouter} from 'react-router-dom';

import Home from '../pages/home';
import Explore from '../pages/explore';
import Notifications from '../pages/notifications';
import NotFound from '../pages/not-found';
import MainLayout from '../layouts/main';

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children :[
            {
                index:true,
                element : <Home></Home>
            },
            {
                path : 'explore',
                element : <Explore></Explore>
            },
            {
                path : 'notifications',
                element : <Notifications></Notifications>
            },
        ]
    },
    {
        path : '*',
        element : <NotFound></NotFound>
    }

])

export default routes;