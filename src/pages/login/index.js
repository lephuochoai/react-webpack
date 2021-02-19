import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@/components/box'

function Login() {
  return (
    <Box title="Login">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </Box>
  )
}

export default Login