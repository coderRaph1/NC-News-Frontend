import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { postNewComment } from '../utils';


export default function NewCommentForm ({articleId, setComments}){
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event){
    const value = event.target.value
    setUsername(value)
  }

  function handleComment(event){
    const value = event.target.value
    setComment(value)
  }

  function handleSubmit (event){
    event.preventDefault()
        setIsSubmitting(true);


    postNewComment(articleId, username, comment).then((data)=> {
      setComments(currComments => [data.comment, ...currComments] );
      setIsSubmitting(false)}).catch((error)=>{
      console.log(error, '<<< hello')
    })
  }
  return (

    <Box component="form" sx={{ mt: 3, mb: 3 }}>
    <TextField
      label="Username"
      onChange={handleChange}
      fullWidth
      variant="outlined"
      sx={{ mb: 2 }}
    />
    <TextField
      label="Add a comment"
      multiline
      rows={2}
      onChange={handleComment}
      fullWidth
      variant="outlined"
    />
    <Button onClick={handleSubmit} type="submit" variant="contained" color="primary" disabled={isSubmitting} sx={{ mt: 2 }}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
    </Button>
  </Box>


    
    // <div>
    //   <form>
    //     <label htmlFor="username">
    //       Username
    //     <input onChange={handleChange} type="text" name="username"/>
    //     </label>
    //     <label htmlFor="comment">
    //       Comment
    //     <input onChange={handleComment} type="text" name="comment"/>
    //     </label>
    //     <button onClick={handleSubmit}  > Submit</button>
    //   </form>
    // </div>
  )
}