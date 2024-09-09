import assest from '@/json/assest'
import { CtaBannerWrap } from '@/styles/StyledComponents/CtaBannerWrap'
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CtaBanner = () => {
  return (
    <CtaBannerWrap>
        <Image width={1920} height={700} alt='' src={assest.ctaBanner} className='ctaBanner'/>
        <Box className="cont_wrap">
            <Container fixed>
                <Box className="innerBox">
                    <Typography variant='h2'>
                    You’ve got an Idea?
                    Let's talk!
                    </Typography>
                    <Typography variant='body1'>
                    Get a free consultation on your project - leave a request on the website or contact me in any convenient way
                    </Typography>
                    <CustomButtonPrimary variant='contained' color='secondary'>
                    LET’s have a chat
                    </CustomButtonPrimary>
                </Box>
            </Container>
        </Box>
    </CtaBannerWrap>
  )
}

export default CtaBanner