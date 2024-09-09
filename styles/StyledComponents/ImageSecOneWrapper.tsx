import { Box, styled } from "@mui/material";

export const ImageSecOneWrapper = styled(Box)`
  .imgOne_gallery {
    margin-top: 50px;
    position: relative;
    min-height: calc(100vh - 450px);
    @media (max-width: 1199px) {
      min-height: 100%;
      min-height:  100%;
      margin: 0 -10px;
      margin-top: 20px;
     
    }
    .cmn_img {
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      position: absolute;
      @media (max-width: 1199px) {
      position: relative;
      
      width: calc(50% - 10px);
      padding: 10px;
      display: inline-block;
      box-shadow: none;
    }
    @media (max-width: 899px) {
      width: 100%;
      padding: 0;
      margin-bottom: 10px;
      object-fit: cover;
    }
      &.img3 {
        left: 0;
        top: 0;
        @media (max-width: 1199px) {
      position: relative;
      left: 0;
      top: 0;
    }
      }
      &.img4 {
        left: 50%;
        top: 60px;
        z-index: 2;
        @media (max-width: 1199px) {
      position: relative;
      left: 0;
      top: 0;
    }
      }
      &.img6 {
        left: 20%;
        top: 390px;
        height: 290px;
        object-fit: cover;
        object-position: top;
        @media (max-width: 1199px) {
      position: relative;
      left: 0;
      top: 0;
    }
      }
      &.img8 {
        right: 0;
        top: 250px;
        height: 400px;
        object-fit: cover;
        @media (max-width: 1199px) {
      position: relative;
      left: 0;
      top: 0;
    }
      }
    }
  }
`;
