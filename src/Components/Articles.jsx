import * as material from "@mui/material"
import MappedArticles from "./MappedArticles"
import { format } from 'date-fns'
import { Link } from 'react-router-dom'


export default function Articles ({articles}){
    return(

        <material.Box
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

        {articles.map((article) => {

            const userFriendlyDate = format(new Date(article.created_at), "MMMM dd, yyyy, hh:mm a")
            
            return (
                <Link to={`/article/${article.article_id}`} key={article.article_id} style={{ textDecoration: 'none' }}>
                <MappedArticles
                key={article.article_id}
                title= {article.title}
                author={article.author}
                image={article.article_img_url}
                topic= {article.topic}
                comments={article.comment_count}
                votes ={article.votes}
                created= {userFriendlyDate}
                />
                 </Link>
             )
        })}
        </material.Box>
    )
}