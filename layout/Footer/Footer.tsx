/* eslint-disable react/no-array-index-key */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import { earth_orbiter, montserrat } from "@/themes/_muiTheme";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import CustomSelect from "@/ui/Filter/CustomSelect";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import axios from "axios";

const FooterWrap = styled(Box)`
  background: linear-gradient(#e44f58, #bf242d, #5f0006);
  box-shadow: 0 -4px 8px rgba(137, 226, 255, 0.2);
  border-radius: 60px 60px 0 0;
  @media (max-width: 1199px) {
    position: relative;
  }
  @media (max-width: 899px) {
    position: relative;
    border-radius: 40px 40px 0 0;
  }
  @media (max-width: 599px) {
    position: relative;
    border-radius: 25px 25px 0 0;

  }
  .ftr_top {
    padding: 80px 0 106px;
    @media (max-width: 1199px) {
      padding-bottom: 60px;
    }
    @media (max-width: 899px) {
      padding: 50px 0 50px;
    }
    @media (max-width: 599px) {
      padding: 30px 0 30px;
    }
    h2 {
      color: ${primaryColors.textPrimaryColor};
      margin-bottom: 40px;
    }
    .submit_btn {
      width: 100%;
      padding: 24px 24px;
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
      border-radius: 69px;
      margin-top: 80px;
      text-transform: uppercase;
      @media (max-width: 1199px) {
        margin-top: 40px;
      }
      @media (max-width: 479px) {
        margin-top: 25px;
        padding: 12px 18px;
      }
      &:hover {
        color: ${primaryColors.black};
      }
    }
  }
  .ftrMid_row {
    margin-bottom: 60px;
    .ftrLft_col {
      padding-right: 125px;
      @media (max-width: 1199px) {
        padding-right: 40px;
      }
      @media (max-width: 899px) {
        padding-right: 0px;
        
      }
      @media (max-width: 599px) {
        padding-right: 0px;
        text-align: center;
      }

      .ftr_logo {
        display: inline-block;
        max-width: 240px;
        margin-bottom: 28px;
        line-height: 1;
        @media (max-width: 1199px) {
          width: 180px;
        }
        img {
          width: 100%;
        }
      }
      p {
        font-size: 20px;
        font-weight: 400;
        color: ${primaryColors.white};
        font-family: ${montserrat.style.fontFamily};
        @media (max-width: 899px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
        }
      }
    }
    .ftrRgt_row {
      display: flex;
      flex-wrap: wrap;
      padding-left: 90px;
      @media (max-width:1199px) {
        padding-left: 0;
      }
      @media (max-width:599px) {
        width: 100%;
        justify-content: center;
        
      }
      .ftrRgt_col {
        width: 30%;
        @media (max-width:899px) {
        width: 40%;
      }
      @media (max-width:599px) {
        width: 100%;
        justify-content: center;
      }
        &.ftrRgt_Add {
          width: 70%;
          padding-left: 90px;
          @media (max-width: 1199px) {
            padding-left: 40px;
          }
          @media (max-width:899px) {
        width: 60%;
        padding-left: 25px;
      }
      @media (max-width:599px) {
        width: 100%;
        padding-left: 0px;
        margin-top: 30px;
      }
        }
        .ftr_hding {
          font-size: 24px;
          font-weight: 700;
          color: ${primaryColors.white};
          line-height: 1;
          margin-bottom: 16px;
          text-transform: uppercase;
          @media (max-width:599px) {
        text-align: center;
      }
        }
        ul {
          li {
            @media (max-width:599px) {
        justify-content: center;
      }
            :not(:last-child) {
              margin-bottom: 16px;
            }
            a {
              display: inline-block;
              transition: all 0.3s ease-in-out;
              font-size: 20px;
              font-weight: 400;
              color: ${primaryColors.white};
              font-family: ${montserrat.style.fontFamily};
              line-height: 1;
              text-transform: capitalize;
              @media (max-width:899px) {
        text-align: center;
        font-size: 18px;
      }
      @media (max-width:599px) {
        text-align: center;
        font-size: 16px;
      }
              &.ftr_mail {
                text-transform: none;
              }
              &:hover,
              &.active {
                color: ${primaryColors.black};
              }
            }
            p {
              font-size: 20px;
              font-weight: 400;
              color: ${primaryColors.white};
              font-family: ${montserrat.style.fontFamily};
              line-height: 1.1;
              @media (max-width:599px) {
        text-align: center;
        font-size: 18px;
      }
      @media (max-width:599px) {
        text-align: center;
        font-size: 16px;
      }
            }
          }
        }
      }
    }
  }
  .ftr_btm {
    padding-bottom: 64px;
    overflow: hidden;
    @media (max-width: 899px) {
      padding-bottom: 48px;
    }
    .sliding_heading {
      display: flex;
      align-items: center;
      border-top: 1px solid ${primaryColors.white};
      border-bottom: 1px solid ${primaryColors.white};
      overflow: hidden;
      .rfm-marquee-container {
        overflow-y: hidden;
      }
      .sliding_cnt {
        display: flex;
        align-items: center;
        i {
          padding-right: 56px;
          padding-left: 56px;
        }
        span {
          font-family: ${earth_orbiter.style.fontFamily};
          display: inline-block;
          -webkit-text-stroke-color: #fff;
          -webkit-text-stroke-width: 1px;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          white-space: nowrap;
          font-size: 128px;
          text-transform: uppercase;
          @media (max-width:899px) {
            font-size: 90px;
          }
          @media (max-width:599px) {
            font-size: 70px;
          }
        }
      }
    }
  }
`;

const footerContactFormSchema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  phone: yup.number().min(10).label("Phone number"),
  subject: yup.string().label("Subject")
});

type FooterSchemaData = yup.InferType<typeof footerContactFormSchema>;

const InputFieldCommonStyled = styled(InputFieldCommon)`
  .Mui-error {
    color: white !important;
  }
`;

const Footer = () => {
  const navItems = [
    {
      name: "About Us",
      route: "/about-us"
    },
    {
      name: "Our Services",
      route: "/about"
    },
    {
      name: "Portfolio",
      route: "/products"
    },
    {
      name: "Blogs",
      route: "/package"
    },
    {
      name: "Contact Us",
      route: "/contact"
    }
  ];
  const router = useRouter();
  const { control, handleSubmit } = useForm<FooterSchemaData>({
    resolver: yupResolver(footerContactFormSchema)
  });

  const onSubmit = async (values: FooterSchemaData) => {
    const response = await axios.post("/api/send-email", values);
    if (response?.status === 200) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
  };

  return (
    <FooterWrap id="footer">
      <Container fixed>
        <Box className="ftr_top">
          <Typography variant="h2">Contact Us</Typography>

          <Box className="ftrContact_form">
            <Grid container spacing={3}>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <InputFieldCommonStyled
                          placeholder="Your Name*"
                          required
                          type="text"
                          autoComplete="name"
                          {...field}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <InputFieldCommonStyled
                          placeholder="Email*"
                          required
                          type="email"
                          autoComplete="email"
                          {...field}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <InputFieldCommonStyled
                          placeholder="Phone Number"
                          required
                          type="tel"
                          autoComplete="phone"
                          {...field}
                          error={Boolean(error?.message)}
                          helperText={error?.message}
                        />
                      );
                    }}
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <Box className="ftr_fld">
                  <Controller
                    control={control}
                    name="subject"
                    render={({ field: { ref, ...fieldProps } }) => {
                      return (
                        <CustomSelect
                          defaultPlaceholder="Subject"
                          {...fieldProps}
                          inputRef={ref}
                        >
                          <MenuItem value="Subject">Subject</MenuItem>
                          <MenuItem value="Subject1">Subject1</MenuItem>
                          <MenuItem value="Subject2">Subject2</MenuItem>
                          <MenuItem value="Subject3">Subject3</MenuItem>
                        </CustomSelect>
                      );
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <CustomButtonPrimary
              color="success"
              variant="contained"
              className="submit_btn"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </CustomButtonPrimary>
          </Box>
        </Box>

        <Grid container spacing={2} rowSpacing={4} className="ftrMid_row">
          <Grid item md={6} sm={12} xs={12}>
            <Box className="ftrLft_col">
              <Link href="/" className="ftr_logo">
                <Image
                  src={assest.logo}
                  alt="footerlogo"
                  width={240}
                  height={40}
                />
              </Link>

              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                mollis erat ac ex bibendum, nec vulputate lorem posuere. Nunc
                mollis turpis eget nibh sollicitudin, nec semper sem facilisis.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box className="ftrRgt_row">
              <Box className="ftrRgt_col">
                <Typography variant="body1" className="ftr_hding">
                  Menu
                </Typography>
                <List>
                  {navItems.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Link
                        href={item.route}
                        className={
                          router.pathname === item.route ? "active" : ""
                        }
                      >
                        {item.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box className="ftrRgt_col ftrRgt_Add">
                <Typography variant="body1" className="ftr_hding">
                  Contact info
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <Link href="tel:12893521293">+1 (289) 352-1293</Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Typography variant="body1">
                      Address, Kolkata, West Bengal 700040
                    </Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      href="mailto:codevisionary@gmail.com"
                      className="ftr_mail"
                    >
                      codevisionary@gmail.com
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className="ftr_btm">
        <Box className="sliding_heading">
          <Marquee>
            <Box className="sliding_cnt">
              <span>Code Visionary Studios</span>
              <i>
                <Image
                  src={assest.sliding_heading_icon}
                  width="53"
                  height="53"
                  alt="shape"
                />
              </i>
            </Box>
          </Marquee>
        </Box>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
