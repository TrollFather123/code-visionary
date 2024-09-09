import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter } from "@/themes/_muiTheme";
import { Box, styled } from "@mui/material";

export const InnerFooterWrap = styled(Box)`
.fotterWrap{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 0;
    width: 100%;
    flex-direction: column;
    .ftr_logo{
        display: inline-block;
        width: 240px;
        height: 64px;
    }
    .footr_list{
        display: flex;
        align-items: center;
        margin-top: 60px;
        li{
            width: fit-content;
            :not(:last-child){
                margin-right: 50px;
            }
            a{
            color: #fff;
            text-decoration: none;
           
            font-family: ${earth_orbiter.style.fontFamily};
            font-weight: 700;
            &:hover{
                color: ${primaryColors.primary};
            }
        }
        }
      
    }
    .footer_soc{
        display: flex;
        align-items: center;
        margin: 60px 0;
        li{
            width: fit-content;
            :not(:last-child){
                margin-right: 32px;
            }
            button{
                min-width: 48px;
                height: 48px;
                background: ${primaryColors.white};
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                :hover{
                    background: transparent;
                    svg{
                        fill: ${primaryColors.white};
                        path{
                            fill: ${primaryColors.white};
                        }
                    }
                }
            }
    }
}
.bottomFotter{
    padding: 24px 0;
    border-top: 1px solid rgb(255, 255, 255,0.3);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: rgba(153, 153, 153, 1);
        font-size: 24px;
        font-family: ${earth_orbiter.style.fontFamily};
        font-weight: 400;
    }
    a{
        color: ${primaryColors.white};
        font-size: inherit;
        font-weight: inherit;
        &:hover{
            color: ${primaryColors.primary};
        }
    }
}
}
`