import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../layout/root-layout'
import Home from '../pages/home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, // Use 'element' to render the layout component
        children: [
            {
                index: true,
                element: <Home />,
            },
            // You can add more routes here that will be rendered inside RootLayout
        ],
    },
],
 {
    basename: "/Viraj_Portfolio/", 
  },
);

const RootRouter = () => {
    return <RouterProvider router={router} />
}

export default RootRouter