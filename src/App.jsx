import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
