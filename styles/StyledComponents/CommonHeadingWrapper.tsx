import { primaryColors } from "@/themes/_muiPalette";
import { montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const CommonHeadingWrapper = styled(Box)`
  text-align: center;
  :not(:last-child) {
    margin-bottom: 40px;
  }
  &.textAlignLeft {
    text-align: left;
    .section_name {
      justify-content: flex-start;
    }
  }
  .section_name {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
    i {
      display: inline-block;
      margin-right: 16px;
      line-height: 0;
      img {
        width: 100%;
      }
    }
    span {
      display: inline-block;
      color: ${primaryColors.white};
      font-family: "Earth Orbiter Bold";
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
    }
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    color: ${primaryColors.white};
    line-height: 1.1;
    margin-bottom: 24px;
    font-family: "Earth Orbiter Bold";
  }
  p {
    font-size: 20px;
    font-weight: 400;
    font-family: ${montserrat.style.fontFamily};
    color: ${primaryColors.white};
  }
`;
