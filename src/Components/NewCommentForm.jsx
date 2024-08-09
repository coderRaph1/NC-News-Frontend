import React, { useState } from 'react';
import { TextField, Button, Box, Typography} from '@mui/material';
import { postNewComment } from '../utils';


export default function NewCommentForm ({articleId, setComments, username}){

  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(true)


  function handleComment(event){
    const value = event.target.value
    setComment(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    postNewComment(articleId, username, comment)
      .then((data) => {
        setComments(currComments => [data.comment, ...currComments])
        setIsSubmitting(false)
        setShowForm(false)
      })
      .catch((error) => {
      })
  }

  return (
    <>
      {showForm && (
        <Box component="form" sx={{ mt: 3, mb: 3 }}>
          <TextField
            label="Add a comment"
            multiline
            rows={2}
            onChange={handleComment}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ mt: 2 }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      )}
    </>
  );
}