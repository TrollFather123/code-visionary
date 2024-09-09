import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const ServiceProductsWrap = styled(Box)`
padding: 50px 0 110px;
.custom_cont{
    max-width: 1775px;
    margin: 0 auto;
    h2{
    color: ${primaryColors.white};
    text-align: center;
    max-width: 880px;
    margin: 0 auto;
}
ul{
    margin-top: 140px;
    border-bottom: 1px solid rgb(255, 255, 255,0.5);
    border-top: 1px solid rgb(255, 255, 255,0.5);
    li{
        padding: 38px 86px !important;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        :hover{
            background-color: rgb(255, 255, 255,0.3);
            button{
                background-color: #C44F56;
                svg{
                    transform: rotate(-45deg);
                }
            }
            .middle_box{
                .service_float{
                    opacity: 1;
                    visibility: visible;
                    z-index: -1;
                }
            }
        }
        :not(:last-child){
            border-bottom: 1px solid rgb(255, 255, 255,0.5);
        }
        .lft_txt{
            width: 360px;
            font-size: 36px;
            font-weight: 700;
            color: ${primaryColors.white};

        }
        button{
            min-width: 104px;
            height: 104px;
            border-radius: 50%;
            border: 1px solid ${primaryColors.white};
            line-height: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .middle_box{
            width: calc(100% - (104px + 360px));
            padding: 0 90px;
            position: relative;
            .service_float{
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
                opacity: 0;
                visibility: hidden;
                width: 400px;
                height: 265px;
                
               
            }
            p{
                max-width: 478px;
                font-size: 20px;
                color: ${primaryColors.white};
            }
        }
    }
}
}

`