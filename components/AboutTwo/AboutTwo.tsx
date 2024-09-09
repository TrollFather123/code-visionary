import assest from "@/json/assest";
import { AboutTwoWrap } from "@/styles/StyledComponents/AboutTwoWrap";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const AboutTwo = () => {
  return (
    <AboutTwoWrap>
      <Container fixed>
        <Grid container spacing={12} alignItems="center">
          <Grid item xs={12} md={6.5}>
            <Box className="figure_holder">
              <figure>
                <Image width={722} height={472} alt="" src={assest.about1} />
              </figure>
              <figure>
                <Image width={337} height={532} alt="" src={assest.about2} />
              </figure>
              <figure>
                <Image width={485} height={485} alt="" src={assest.about3} />
              </figure>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Typography variant="h2">
              We Create Impactful Digital Experiences That Drive Success
            </Typography>
            <Typography variant="body1">
              Code Visionary Studios is dedicated to creating impactful digital
              experiences. With a focus on web design, app development,
              branding, and digital marketing, we provide comprehensive
              solutions tailored to your needs. Explore our values, our
              approach, and the team that makes it all happen.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AboutTwoWrap>
  );
};

export default AboutTwo;
