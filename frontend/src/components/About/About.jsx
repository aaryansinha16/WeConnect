import { Box } from '@chakra-ui/react'
import React from 'react'
import AboutCard from '../cards/AboutCard'

const About = () => {
  return (
    <Box
      display={{base : 'none', lg : 'block'}}
      w='20%'
      borderRadius='20px'
      p={4}
    >
      <AboutCard />
    </Box>
  )
}

export default About
