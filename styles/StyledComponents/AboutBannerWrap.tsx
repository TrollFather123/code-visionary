import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const AboutBannerWrap = styled(Box)`
position: relative;
padding: 200px 0 100px;

.TriVector{
    position: absolute;
    top: 0;
    left: 0;
    height: 700px;
    z-index: -1;

}
.mainWRap{
    .uppertEXT{
        h1{
            color: ${primaryColors.white};
        }
        p{
            font-size: 20px;
            max-width: 1330px;
            color: ${primaryColors.white};
            margin-top: 45px;
        }
    }
    figure{
        margin-top: 60px;
        width: 100%;
        height: 740px;
background: ${primaryColors.colorBABABA};
overflow: hidden;
box-shadow: 0px 0px 4px rgba(137, 226, 255, 0.2);
border-radius: 60px;
line-height: 0;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }
}
`