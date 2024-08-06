import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArticleInfo from "./Components/ArticleInfo";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/article/:articleId" element={<ArticleInfo />} />
    </Routes>
    </>
  );
}
