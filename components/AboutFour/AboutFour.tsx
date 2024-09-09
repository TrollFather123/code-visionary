import assest from "@/json/assest";
import { AboutFourWrap } from "@/styles/StyledComponents/AboutFourWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutFour = () => {
  return (
    <AboutFourWrap>
      <Container fixed>
        <Box className="wrap_Box">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">Let's Start a Conversation</Typography>
              <Typography variant="body1">
                Whether you’re starting a new project or looking to enhance your
                current digital strategy, Code Visionary Studios is here to
                assist you. Reach out to us today to learn more about our
                services and how we can help your business succeed.
              </Typography>
              <CustomButtonPrimary variant="contained" color="secondary">
              Connect
              </CustomButtonPrimary>
            </Grid>
            <Grid item xs={12} md={6}>
                <figure>
                    <Image width={600} height={500} alt="laptop" src={assest.laptopImg} />
                </figure>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AboutFourWrap>
  );
};

export default AboutFour;
