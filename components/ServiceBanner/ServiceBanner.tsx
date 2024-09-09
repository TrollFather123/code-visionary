import assest from "@/json/assest";
import { servicesList } from "@/json/mock/aboutMock";
import { ServiceBannerWrap } from "@/styles/StyledComponents/ServiceBannerWrap";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ServiceBanner = () => {
  return (
    <ServiceBannerWrap>
        <Image width={1820} height={2520} alt="" src={assest.serviceBanner} className="serviceBanner" />
      <Container fixed>
        <Typography variant="h1">Your Partner in Digital Innovation</Typography>
        <Typography variant="body1" className="long_text">
          Explore the diverse services offered by Code Visionary Studios. We
          specialize in creating custom web designs, developing cutting-edge
          apps, crafting unique brand identities, and driving growth through
          digital marketing.
        </Typography>
      </Container>
      <Box className="lowerBox">
        <Box className="lft_box">
            <Typography variant="h2">
            Our services
            </Typography>
            <List>
                {servicesList.map((data)=>(
                    <ListItem>
                    <Typography>
                        {data}
                    </Typography>
                </ListItem>
                ))}
                
            </List>
        </Box>
        <figure>
        <Image width={1219} height={684} alt="" src={assest.Monitor}  />
        </figure>
      </Box>
    </ServiceBannerWrap>
  );
};

export default ServiceBanner;
