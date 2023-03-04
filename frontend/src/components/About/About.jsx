import { Box } from '@chakra-ui/react'
import React from 'react'
import AboutCard from '../cards/AboutCard'
import Atropos from 'atropos/react'

const About = () => {
  return (
    <Box
      display={{base : 'none', lg : 'block'}}
      w='20%'
      borderRadius='20px'
      p={4}
    >
      <Atropos
        className='my-atropos'
        activeOffset={40}
        shadowScale={1.05}
      >
      <AboutCard />

      </Atropos>
    </Box>
  )
}

export default About
