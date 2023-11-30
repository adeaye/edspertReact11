import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ListPage from "./pages/list";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <ListPage/>
            },
            {
                path: 'detail/:id',
                element: <DetailPage/>
            },
            {
                path: 'checkout',
                element: <CheckoutPage/>
            },
        ]
    }
])

const MateriRestRouter = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default MateriRestRouter;