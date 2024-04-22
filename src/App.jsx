import "./App.css";
import BreadCrumb from "./components/BreadCrumb";
import FAQ from "./components/FAQ";
import NavBar from "./components/NavBar";
import StudySection from "./components/StudySection";

function App() {
  return (
    <div className=" mx-24 flex justify-center items-center mt-8 flex-col">
      <NavBar />
      <BreadCrumb />
      <StudySection />
      <FAQ />
    </div>
  );
}

export default App;
