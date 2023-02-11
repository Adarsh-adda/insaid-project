import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </>
  );
}

export default App;
