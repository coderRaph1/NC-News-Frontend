import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getArticleById, getCommentsById} from '../utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SingleArticle(){

  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([getArticleById(articleId), getCommentsById(articleId)])
    .then(([articleData, commentsData]) => {
      setArticle(articleData);
      setComments(commentsData);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, [articleId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    )}

  if (!article) {
    return <p>Please enter a valid article number</p>;
  }

  const formattedDate = format(new Date(article.created_at), "MMMM dd, yyyy, hh:mm a");

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #9796f0, #fbc7d4)',
        padding: 4
      }}>
        <Card sx={{
          maxWidth: 800,
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden'
        }}>
          <CardMedia
            component="img"
            alt={article.title}
            height="400"
            image={article.article_img_url}
          />
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>
              By {article.author} | {formattedDate}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>
              Topic: {article.topic}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif' }}>
              Votes: {article.votes}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto, sans-serif' }}>
              {article.body}
            </Typography>
          </CardContent>
        </Card>

        <Box sx={{
        width: '100%',
        maxWidth: '800px',
        maxHeight: '400px',
        overflowY: 'auto',
        padding: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
        marginBottom: 4
      }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
          Comments
        </Typography>
        {(comments.map((comment) => (
            <Card key={comment.comment_id} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                  {comment.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  {format(new Date(comment.created_at), "MMMM dd, yyyy, hh:mm a")}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  {comment.body}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                 Votes: {comment.votes}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Box>

      </Box>
  );

}

// just added a scroll box for comments!! Looks insane!
