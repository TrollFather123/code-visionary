import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter, montserrat } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const AboutFourWrap = styled(Box)`
height: 100vh;
display: flex;
align-items: center;
.wrap_Box{
    background: url(${assest.about4Banner}) no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;
    padding: 90px 96px;
   
    line-height: 0;
    h2{
        color: ${primaryColors.white};
        font-family: ${montserrat.style.fontFamily};
        font-weight: 700;
    }
    p{
        color: ${primaryColors.white};
        font-size: 20px;
        margin-top: 24px;
        max-width: 643px;
    }
    button{
        color: ${primaryColors.color007fa9};
        font-family: 700;
        border: none;
        font-family: ${earth_orbiter.style.fontFamily};
        min-width: 176px;
        padding: 14px 20px;
        margin-top: 50px;
    }
    figure{
        width: 100%;
        margin-top: -130px;
        position: relative;
        z-index: 3;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
`