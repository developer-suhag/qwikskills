import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";
import footerStyles from "../../../styles/Footer.module.scss";
import Image from "next/image";
import logo from "../../../images/logo-2.svg";
import startUpIndia from "../../../images/startup-in-india.svg";

const Footer = () => {
  return (
    <div className={footerStyles.footerSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Box>
                <Image src={logo} alt="" />
                <Typography variant="body2" sx={{ color: "#B9B9BA", my: 3 }}>
                  Effective practice tests curated by experts to help you gain
                  true mastery over your Cloud Certifications.{" "}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Recognized By:
                </Typography>
                <Image src={startUpIndia} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
