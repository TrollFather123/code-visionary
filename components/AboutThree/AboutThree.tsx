import { aboutList, CountLIst } from "@/json/mock/aboutMock";
import { AboutThreeWrap } from "@/styles/StyledComponents/AboutThreeWrap";
import About1 from "@/ui/Icons/About1";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography
} from "@mui/material";
import React from "react";

const AboutThree = () => {
  return (
    <AboutThreeWrap>
      <Container fixed>
        <Grid container spacing={9} alignItems="center">
          <Grid item xs={12} md={6.5}>
            <Typography variant="h2">
              We Value Integrity and Transparency
            </Typography>
            <List>
              {aboutList.map((data, index) => (
                <ListItem key={index}>
                  <Typography variant="body1" className="mainText">
                    {data.title}
                  </Typography>
                  <i>{data.icon}</i>
                  <Box className="floating">
                    <Typography variant="body1" className="secTEXT">
                      {data.title}
                    </Typography>
                    <Typography variant="body1" className="DESCtEXT">
                      {data.desc}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Box className="counts">
              <Grid container spacing={8}>
                {CountLIst.map((data, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Typography variant="h3">
                      {data.value}+
                      <Typography variant="caption">{data.title}</Typography>
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AboutThreeWrap>
  );
};

export default AboutThree;
