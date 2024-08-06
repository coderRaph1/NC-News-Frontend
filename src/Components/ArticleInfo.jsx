import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getArticleById } from '../utils';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ArticleInfo(){

  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setLoading(false);
      });
  }, [articleId])

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
              Comments: {article.comment_count} | Votes: {article.votes}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontFamily: 'Roboto, sans-serif' }}>
              {article.content}
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );

}