import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const AboutThreeWrap = styled(Box)`
height: 100vh;

display: flex;
align-items: center;
h2{
    color: ${primaryColors.white};
    font-weight: 700;
}
ul{
    margin-top: 50px;
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 34px 34px !important;
border: 1px solid ${primaryColors.color007fa9};
border-radius: 20px;
cursor: pointer; 
position: relative;
transition: all 0.5s ease-in-out;
:hover{
    .mainText{
        opacity: 0;
    }
    .floating{
        opacity: 1;
        visibility: visible;
    }
    i{
        svg{
            path{
                fill: ${primaryColors.textPrimaryColor};
            }
        }
    }
    background-color: ${primaryColors.white};
}
.floating{
    position: absolute;
    left: 35px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    width: 75%;
    .secTEXT{
        font-size: 30px;
        color: ${primaryColors.textPrimaryColor};
        font-weight: 700;
    }
    .DESCtEXT{
        font-size: 20px;
        color: ${primaryColors.textPrimaryColor};
        margin-top: 7px;
    }
}
i{
    display: inline-block;
    line-height: 0;
    width: 90px;
    height: 90px;
}
:not(:last-child){
    margin-bottom: 24px;
}
.mainText{
    font-size: 40px;
    color: ${primaryColors.white};
    font-weight: 700;
}

    }
}
.counts{
    position: relative;
    ::before{
   content: "";
width: 400px;
height: 400px;
left: 50%;
top: 50%;
position: absolute;
transform: translate(-50%, -50%);
background: rgb(0, 127, 169,0.2);

filter: blur(150px);

    }
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 96px;
        font-weight: 400;
        flex-direction: column;
        color: ${primaryColors.white};
        line-height: 1;
        span{
            font-size: 20px;
            font-weight: inherit;
            display: block;
            font-family: inherit;
            color: inherit;

        }
    }
}
`