import { RouteObject, Outlet } from 'react-router-dom'

import Root from '@/pages/Root'
// import Contacts, { contactsLoader } from '@/pages/Contacts'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Root />,
        errorElement: <div> page not found...</div>,
        children: [
            {
                path: '/products',
                element: <div>
                    products home page
                    <Outlet />
                </div>,
                children: [
                    {
                        path: ':productId',
                        element: <div>new products page detailed</div>,
                    },
                ]
            },
            // {
            //     path: '/contacts',
            //     Component: Contacts,
            //     loader: contactsLoader
            // }
        ]
    },

];


export default routes;