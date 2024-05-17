import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
	return (
		<Box sx={{width:'100%',display:"flex",justifyContent:'center'}}>
			<CircularProgress/>
		</Box>
	)
}

export default Loader