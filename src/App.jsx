import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import WritingPage from "./components/WritingPage.jsx";
import ProjectsPage from "./components/WritingPage.jsx";

const router = createBrowserRouter([
  {path: '/', element: (<>
    <div id="body">
          <Header/>
          <HomePage/>
    </div>
  </>)},
  {path: '/projects', element: <ProjectsPage/>},
  {path: '/writing', element: <WritingPage/>}
]);

function App() {
    return (
      <RouterProvider router={router}/>
    );
}

export default App;