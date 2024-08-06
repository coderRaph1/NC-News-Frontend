import * as material from "@mui/material";
import SingleArticle from "./SingleArticle"
import { format } from 'date-fns';


export default function Articles ({articles}){
    return(

        <material.Box
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

        {articles.map((article) => {

            const userFriendlyDate = format(new Date(article.created_at), "MMMM dd, yyyy, hh:mm a")
            
            return (
                <SingleArticle
                key={article.article_id}
                title= {article.title}
                author={article.author}
                image={article.article_img_url}
                topic= {article.topic}
                comments={article.comment_count}
                votes ={article.votes}
                created= {userFriendlyDate}
                />
             )
        })}
        </material.Box>
    )
}