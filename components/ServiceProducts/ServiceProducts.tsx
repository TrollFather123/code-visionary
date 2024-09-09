import assest from '@/json/assest'
import { servicelIst } from '@/json/mock/aboutMock'
import { ServiceProductsWrap } from '@/styles/StyledComponents/ServiceProductsWrap'
import RgtArreoIcon from '@/ui/Icons/RgtArreoIcon'
import { Button, Container, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const ServiceProducts = () => {
  return (
   <ServiceProductsWrap>
    <Container fixed className='custom_cont'> 
        <Typography variant='h2'>
        Your One-Stop Solution for Digital Excellence
        </Typography>
        <List>
            {servicelIst.map((data,index)=>(
                <ListItem>
                <Typography variant='body1' className="lft_txt">
                {data.title}
                </Typography>
                <Box className="middle_box">
                    <Typography variant="body1" >
                    {data.desc}
                    </Typography>
                  
                    <Image width={396} height={264} alt='' src={data.Image} className='service_float'/>
                    
                
                </Box>
                <Button>
                    <RgtArreoIcon/>
                </Button>
            </ListItem>
            ))}
            
        </List>
    </Container>
   </ServiceProductsWrap>
  )
}

export default ServiceProducts