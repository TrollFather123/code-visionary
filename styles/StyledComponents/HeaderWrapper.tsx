import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
  padding: 32px 0;
  z-index: 999;
  @media (max-width: 1199px) {
    padding: 20px 0;
  }
  &.siteHeader_shrinked {
    padding: 16px 0;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
  /* .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  } */
  .hdr_rgt {
    margin-left: auto;
    display: flex;
    align-items: center;
    .hdrmanu_btn {
      flex-direction: column;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease-in-out;
      margin-right: 60px;
      @media (max-width:1199px) {
        width: 60px;
        height: 60px;
        margin-right: 30px;
      }
      @media (max-width:899px) {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        min-width: auto;
      }
      @media (max-width:599px) {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        min-width: auto;
      }
      &:hover {
        .btn_line {
          &.top {
            transform: translateX(10px);
            @media (max-width:899px) {
       font-size: 10px;
      }
          }
          &.bottom {
            transform: translateX(-10px);
          }
        }
      }
      .btn_line {
        line-height: 0;
        width: 30px;
        height: 3px;
        background: ${primaryColors.white};
        border-radius: 12px;
        transition: all 0.3s ease-in-out;
        @media (max-width:899px) {
       width: 20px;
      }
        &.top {
          margin-bottom: 12px;
        }
        &.bottom {
          margin-left: 10px;
        }
      }
    }
    .site-header__btn--cta {
      position: relative;
      padding: 20px 24px;
      min-width: 277px;
      background: ${primaryColors.primary};
      border: 4px solid ${primaryColors.white};
      border-radius: 58px;
      font-size: 24px;
      color: ${primaryColors.white};

      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      @media (max-width: 1199px) {
        padding: 16px 22px;
        min-width: auto;
        font-size: 20px;
      }
      @media (max-width: 899px) {
        padding: 12px 18px;
        min-width: auto;
        font-size: 16px;
      }
      @media (max-width: 599px) {
        padding: 12px 16px;
        min-width: auto;
        font-size: 14px;
      }
      @media (max-width: 479px) {
        padding: 12px 6px;
        min-width: auto;
        font-size: 14px;
      }
      &:hover {
        .default-text,
        .hovered-text {
          color: ${primaryColors.white};
        }
        .default-text {
          transform: translateY(80px) rotate(-20deg);
        }
        .hovered-text {
          top: 22px;
          transform: rotate(0);
        }
        .shape-box {
          transform: scale(1);
          svg {
            transform: translateX(0);
          }
        }
      }
      .default-text,
      .hovered-text {
        display: inline-block;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1;
        color: ${primaryColors.white};
        transition: all 0.3s ease-in-out;
        @media (max-width: 1199px) {
          font-size: 20px;
        }
        @media (max-width: 899px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 14px;
        }
        @media (max-width: 479px) {
          font-size: 12px;
        }
      }
      .default-text {
        transform: translateY(0) rotate(0);
      }
      .hovered-text {
        position: absolute;
        left: 20px;
        top: -80px;
        transform: rotate(20deg);
      }
      .shape-box {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: ${primaryColors.white};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transform: scale(0.75);
        transition: all 0.3s ease-in-out;
        svg {
          width: 12px;
          transform: translateX(-40px);
          color: ${primaryColors.primary};
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }

  .headerContainer {
    background-color: transparent !important;
    transition: all 0.4s;
  }

  .headerLogo {
    max-width: 240px;
    display: inline-block;
    transition: all 0.4s;
    @media (max-width: 899px) {
      max-width: 180px;
    }
    @media (max-width: 599px) {
      max-width: 150px;
    }
    @media (max-width: 479px) {
      max-width: 120px;
    }
  }
`;
