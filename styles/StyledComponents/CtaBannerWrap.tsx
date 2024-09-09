import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const CtaBannerWrap = styled(Box)`
height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
.ctaBanner{
    width: 100%;
    max-width: 100%;
}
.cont_wrap{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 100%;
    .innerBox{
        max-width: 743px;
        h2{
            font-size: 64px;
            color: ${primaryColors.white};
            font-weight: 700;
        }
        p{
            font-size: 24px;
            color: ${primaryColors.white};
            margin-top: 40px;
            max-width: 675px;
        }
        button{
            font-family: ${earth_orbiter.style.fontFamily};
            margin-top: 80px;
        }
    }
}
`