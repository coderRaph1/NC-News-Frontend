import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleArticle from "./Components/SingleArticle";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/article/:articleId" element={<SingleArticle />} />
    </Routes>
    </>
  );
}
