import { Route, Routes } from "react-router-dom";
import { ProjectsPage, Contact, MainPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
    </>
  );
}

export default App;
