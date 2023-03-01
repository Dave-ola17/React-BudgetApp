
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// layouts
import Main, { mainLoader } from "./layout/Main";

// actions imports
import { logoutAction } from "./actions/logout";

// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        element: logoutAction
      },
    ]
  }, 
]);


function App() {

  return (
    <div className="App">
       <RouterProvider router={router} />
       <ToastContainer className="toast" position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
