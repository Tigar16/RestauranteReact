import { createBrowserRouter } from "react-router-dom"
import Form from "../assets/body/Reservacion";
import App from "../Index";
import Menu from "../assets/menu/Menu";



export const router = createBrowserRouter([
    {
        path: '/PANDINGA',
        element:<App />,
    },
    {
        path: '/PANDINGA/Reservacion',
        element: <Form />

    },
    {
        path: '/PANDINGA/Menu',
        element: <Menu />

    }
]);