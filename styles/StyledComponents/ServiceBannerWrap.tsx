import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const ServiceBannerWrap = styled(Box)`
padding: 200px 0 150px;
position: relative;
.serviceBanner{
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: 0;
    opacity: 0.7;
    z-index: -1;
mix-blend-mode: overlay;


}
h1{
    color: ${primaryColors.white};

}
.long_text{
    max-width: 1282px;
    font-size:20px;
    color: ${primaryColors.white};
    margin-top:48px;
}
.lowerBox{
    width: calc(100% - (50% - 1600px / 2));
    margin-left: auto;
    margin-right: 0px;
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-top: 60px;
    .lft_box{
        width: 485px;
        padding:55px 20px 55px 50px;
    height: 100%;

background: linear-gradient(180deg, #C44F56 0%, #5E2629 100%);
border-radius: 64px;

        h2{
            color: ${primaryColors.white};
        }
        ul{
            margin-top: 30px;
            li{
                padding: 0;
                position: relative;
                padding-left: 12px;
                :not(:last-child){
                    margin-bottom: 17px;
                }
                ::before{
                    position: absolute;
                    content: "";
                    width: 10px;
                    height: 10px;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    border-radius: 50%;
                    background: ${primaryColors.white};
                }
                p{
                    padding-left: 9px;
                    font-size: 24px;
                    color: ${primaryColors.white};
                    font-weight: 400;
                    line-height: 1.3;
                }
            }
        }
    }
    figure{
        height: 100%;
        margin-left: 24px;
        width: calc(100% - 509px);

border-radius: 120px 0px 0px 120px;
overflow: hidden;
line-height: 0;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

    }
}
`