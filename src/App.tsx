import { Route, Routes } from "react-router-dom";
import IndexPage from "./indexPage";
import TestPage from "./testPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
