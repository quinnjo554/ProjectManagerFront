"use client"
import { Box, List } from '@chakra-ui/react'
import React, { useState } from 'react'

function ProjectList(props:{email:string}) {
  const [projectList, setProjectList] = useState<string>()
  return (
    <Box>
        <List>
            
        </List>
    </Box>
  )
}

export default ProjectList