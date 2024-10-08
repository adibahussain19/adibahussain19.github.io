import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import WritingPage from "./pages/WritingPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import RootLayout from "./pages/Root.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/projects', element: <ProjectsPage/>},
      {path: '/writing', element: <WritingPage/>}
    ]
  }
])

function App() {
    return (
      <RouterProvider router={router}/>
    );
}

export default App;