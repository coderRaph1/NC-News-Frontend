import React, { useState } from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { voteOnArticle } from '../utils'

export default function VoteButton({ articleId, initialVotes, onVote }) {
  const [votes, setVotes] = useState(initialVotes)
  const [isVoting, setIsVoting] = useState(false)

  const handleVote = (voteChange) => {
    if (isVoting) return

    setIsVoting(true)
    const optimisticVotes = votes + voteChange
    setVotes(optimisticVotes)

    voteOnArticle(articleId, voteChange)
      .then((updatedVotes) => {
        setVotes(updatedVotes)
        if (onVote) {
          onVote(voteChange)
        }
      })
      .catch((error) => {
        console.error("Error voting on article:", error)
        setVotes(votes)
      })
      .finally(() => {
        setIsVoting(true)
      })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
      <Button variant="contained" color="primary" onClick={() => handleVote(1)} disabled={isVoting}>Vote Up</Button>
      <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', marginX: 2 }}>
        Your Vote Count: {votes}
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => handleVote(-1)} disabled={isVoting}>Vote Down</Button>
    </Box>
  )
}