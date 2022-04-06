import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import footerStyles from "../../../styles/Footer.module.scss";
import Image from "next/image";
import logo from "../../../images/logo-2.svg";
import startUpIndia from "../../../images/startup-in-india.svg";
import Link from "next/link";
import ChatIcon from "@mui/icons-material/Chat";

const Footer = () => {
  return (
    <div className={footerStyles.footerSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 4, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={3}>
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

            <Grid item xs={4} sm={4} md={2}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", mb: 3, fontSize: 16, fontWeight: 600 }}
                >
                  Resource Center
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Link href="/">Knowledge Base</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">Become an Instructor</Link>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={2}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", mb: 3, fontSize: 16, fontWeight: 600 }}
                >
                  Company
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Link href="">Support</Link>
                  <Link href="/aboutUs">About Us</Link>
                  <Link href="/pricing">Plans & Pricing</Link>
                  <Link href="/">Careers</Link>
                  <Link href="/">Contact Us</Link>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={2}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", mb: 3, fontSize: 16, fontWeight: 600 }}
                >
                  Follow us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <a
                    href="https://www.facebook.com/qwikskills"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/qwikskills/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/qwikskills/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://twitter.com/QwikSkills"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={3}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", mb: 3, fontSize: 16, fontWeight: 600 }}
                >
                  Newsletter
                </Typography>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#B9B9BA", mb: 3 }}
                  >
                    Subscribe for any news update
                  </Typography>
                  <form className={footerStyles.newsLetter}>
                    <input
                      className={footerStyles.subscribeForm}
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button className={footerStyles.subscribeBtn}>
                      Subscribe
                    </button>
                  </form>
                </Box>
              </Box>
              <Box className={footerStyles.chatBox}>
                <Button className={footerStyles.chatIcon}>
                  <ChatIcon />
                </Button>
                {/* </Button> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* copy right  */}
        <Box
          className={footerStyles.copyright}
          sx={{
            pt: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            flexDirection: { xs: "column", md: "inherit" },
            mt: 4,
          }}
        >
          <Typography variant="body2" sx={{ color: "#808080", fontSize: 12 }}>
            © 2020-2021 - Pravika Intellicorp Pvt. Ltd. All Rights Reserved. The
            certification names are the trademarks of their respective owners.{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
