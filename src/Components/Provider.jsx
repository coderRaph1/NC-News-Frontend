import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../utils";
import Articles from "./Articles"
import FilterBar from "../FilterBar";

export default function Provider () {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [categoryFinder, setCategoryFinder] = useState(undefined)

    useEffect(() => {
        setLoading(true)
      getArticles().then((articles) => {
        setArticles(articles)
        setLoading(false)
      })
    }, [categoryFinder])

    if(loading){
        return <h2>Loading...</h2>
    }

    

    return (
        <>
        <Articles articles= {articles} />
        <FilterBar setCategoryFinder={setCategoryFinder}/>
        </>
    )
}