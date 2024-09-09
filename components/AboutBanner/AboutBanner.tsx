import assest from "@/json/assest";
import { AboutBannerWrap } from "@/styles/StyledComponents/AboutBannerWrap";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <AboutBannerWrap>
        <Image width={2016} height={700} alt="" src={assest.TriVector} className="TriVector" />
      <Container fixed>
        <Box className="mainWRap">
          <Box className="uppertEXT">
            <Typography variant="h1">
              We Believe in Innovation and Creativity
            </Typography>
            <Typography variant="body1">
              At Code Visionary Studios, we believe in the power of innovation
              and creativity. Our team excels in web design, app development,
              branding, and digital marketing, delivering solutions that drive
              success. Learn more about our philosophy, our journey, and the
              people who make it all possible.
            </Typography>
          </Box>
          <figure>
            <Image width={1600} height={793} alt="" src={assest.htmlBanner}/>
          </figure>
        </Box>
      </Container>
    </AboutBannerWrap>
  );
};

export default AboutBanner;
