import assest from '@/json/assest'
import { InnerFooterWrap } from '@/styles/StyledComponents/InnerFooterWrap'
import Insta from '@/styles/StyledComponents/Insta'
import FaceBook from '@/ui/Icons/FaceBook'
import Linked from '@/ui/Icons/Linked'
import X from '@/ui/Icons/X'
import { Box, Button, Container, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InnerFooter = () => {
    const socialLinks = [
        {
            icon: <FaceBook />,
            link: '#',
        },
        {
            icon: <Insta />,
            link: '#',
        },
        {
            icon: <Linked />,
            link: '#',
        }, {
            icon: <X />,
            link: '#',
        },
    ]
    const listItem = [
        {
            text: 'Home',
            link: '/about',
        },
        {
            text: 'About Us',
            link: '/about-us',
        },
        {
            text: 'Our Services',
            link: '/services',
        },
        {
            text: 'portfolio',
            link: '#',
        },
        {
            text: 'Blog',
            link: '#',
        },
        {
            text: 'Contact Us',
            link: '#',
        },

    ]
  return (
    <InnerFooterWrap>
        <Container fixed>
            <Box className="fotterWrap">
            <Link href="/" className='ftr_logo'>
            <Image width={240} height={64} alt='' src={assest.footerLogo}/>
            </Link>
            <List className='footr_list'>
                {listItem.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link href={item.link}>{item.text}</Link>
                    </ListItem>
                ))}
               
            </List>
            <List className='footer_soc'>
                {socialLinks.map((data,index)=>(
                     <ListItem disablePadding key={index}>
                     <Button>
                         {data.icon}
                     </Button>
                 </ListItem>
                ))}
               
            </List>
            <Box className="bottomFotter">
                <Typography>
                2024 | All rights reserved by <Link href="/">Code visonary studio</Link>
                </Typography>
            </Box>
            </Box>
        </Container>
    </InnerFooterWrap>
  )
}

export default InnerFooter