import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../utils";
import Articles from "./Articles"

export default function Provider () {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
      getArticles().then((articles) => {
        setArticles(articles)
        setLoading(false)
      })
    }, [])

    if(loading){
        return <h2>Loading...</h2>
    }

    

    return (
        <>
        <Articles articles= {articles} />
        </>
    )
}