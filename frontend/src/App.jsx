import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import WritingPage from "./pages/WritingPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import RootLayout from "./pages/Root.jsx";
import dotenv from "dotenv"; 


dotenv.config();
// console.log("This is process.env:", process.env);
console.log("This is meta.env:", import.meta.env);


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '/projects', element: <ProjectsPage/>},
      {path: '/writing', element: <WritingPage/>},
      {path: '/', element: <HomePage/>},

    ]
  }
])

function App() {
    return (
      <RouterProvider router={router}/>
    );
}

export default App;