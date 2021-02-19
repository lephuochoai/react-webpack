import React from 'react'
import Box from '@/components/box'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box title="Home">
      <Link to="/">Home21</Link>
      <Link to="/login">Login</Link>
    </Box>
  )
}

export default Home
