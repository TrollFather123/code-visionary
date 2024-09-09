import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const AboutTwoWrap = styled(Box)`
height: 100vh;
display: flex;
align-items: center;
.figure_holder{
    display: flex;
    align-items: center;
    figure{
        height: 471px;
        min-width: 336px;

background: ${primaryColors.colorE2E2E2};
border-radius: 16px;
overflow: hidden;
line-height: 0;
:not(:first-child){
    margin-left: -110px;
}
:nth-child(2){
    margin-top: -70px;
}
:nth-child(1){
    margin-top: -140px;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
    }
}
h2{
    color: ${primaryColors.white};
    margin-bottom: 60px;
}

p{
    font-size: 20px;
    color: ${primaryColors.white};
    line-height: 1.3;
}
`