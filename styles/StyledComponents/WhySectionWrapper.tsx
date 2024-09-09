import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const WhySectionWrapper = styled(Box)`
  display: flex;
  align-items: center;
  .why_row {
    align-items: center;

    .whyLft_box {
      position: relative;
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        width: 654px;
        height: 654px;
        border-radius: 50%;
        background: ${primaryColors.color007fa9};
        opacity: 0.2;
        filter: blur(139.545px);
        z-index: -1;
      }
      .whyMobile_img {
        text-align: center;
        position: relative;
        .mbl_img1,
        .mbl_img2,
        .mbl_img3,
        .mbl_img4 {
          position: absolute;
          @media (max-width: 899px) {
            width: 270px;
          }
          @media (max-width: 599px) {
            width: 220px;
          }
          @media (max-width: 479px) {
            width: 160px;
          }
        }
      }
      .mbl_img3{
        @media (max-width: 1199px) {
          left: 50%;
          transform: translateX(-50%);
          top: 30px;
          width: 200px;
        }
        @media (max-width: 479px) {
          left: 50%;
          transform: translateX(-50%);
          top: 30px;
          width: 180px;
        }
        @media (max-width: 435px) {
         
          width: 160px;
        }
      }
      .mbl_img1{
        @media (max-width: 1199px) {
          left: 50%;
          transform: translateX(-50%);
          top: 110px;
          width: 200px;
          @media (max-width: 435px) {
          
          width: 160px;
        }
        }
      }
      .mbl_img4{
        @media (max-width: 1199px) {
          left: 50%;
          transform: translateX(-50%);
          top: 150px;
          width: 200px;
        }
        @media (max-width: 435px) {
        
          width: 160px;
        }

      }
      .mbl_img2{
        @media (max-width: 1199px) {
          left: 50%;
          transform: translateX(-50%);
          top: 390px;
          width: 200px;
        }
        @media (max-width: 899px) {
          top: 480px;
        }
        @media (max-width: 599px) {
          top: 420px;
        }
        @media (max-width: 435px) {
          
          width: 160px;
        }
        @media (max-width: 420px) {
          top: 350px;
          width: 160px;
        }
        @media (max-width: 389px) {
          top: 330px;
          width: 150px;
          z-index: 9;
        }

      }
    }
    .why_list {
      position: relative;
      li {
        display: flex;
        align-items: center;
        background: ${primaryColors.white};
        border-radius: 90px;
        padding: 18px 36px;
        min-height: 150px;
        position: absolute;
        left: 0;
        top: 0;
        @media (max-width:1199px) {
          position: relative;
        }
        @media (max-width:899px) {
          position: relative;
          padding: 18px 20px;
          border-radius: 50px;
        }
        @media (max-width:599px) {
          position: relative;
          padding: 15px 15px;
          border-radius: 40px;
        }
        :not(:last-child) {
          margin-bottom: 20px;
        }
        .number {
          font-size: 36px;
          font-weight: 700;
          font-family: ${montserrat.style.fontFamily};
          color: ${primaryColors.white};
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: ${primaryColors.color000D0F};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .content {
          width: calc(100% - 70px);
          padding-left: 20px;
          h3 {
            font-size: 24px;
            font-weight: 700;
            color: ${primaryColors.color000D0F};
            font-family: ${montserrat.style.fontFamily};
            line-height: 1;
            margin-bottom: 10px;
            @media (max-width: 899px) {
              font-size: 20px;
            }
            @media (max-width: 599px) {
              font-size: 18px;
            }
          }
          p {
            font-family: ${montserrat.style.fontFamily};
            font-size: 18px;
            font-weight: 400;
            color: ${primaryColors.color333333};
            @media (max-width: 599px) {
              font-size: 16px;
            }
          }
        }
      }
    }
    .whyRgt_col {
      padding-left: 110px;
      @media (max-width: 1199px) {
        padding-left: 50px;
      }
      @media (max-width: 899px) {
        padding-left: 0px;
      }
    }
  }
`;
