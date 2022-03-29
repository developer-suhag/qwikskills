import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import computerIcon from "../../../images/computer-icon.svg";
import hero from "../../../images/cloudLabs/cloud-labs-hero.svg";
import styles from "../../../styles/CloudLabs.module.scss";

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <Container sx={{ pt: 12, pb: 34 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
              variant="h6"
            >
              Learn smart. Practice live
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 35, md: 56 },
                fontWeight: 700,
                width: { xs: "100%", md: "80%" },
                margin: "auto",
                mb: { xs: 1, md: 3 },
              }}
              variant="h3"
            >
              Live Hands-on{" "}
              <span className={styles.coloredText}>Cloud Labs</span> , Learn The
              Skills to Grow
            </Typography>
            <Typography
              sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
              variant="body1"
            >
              Master cloud skills for AWS, GCP and Azure real cloud environment.
            </Typography>
          </Box>
        </Container>
      </div>{" "}
      {/* heroSection peoples image */}
      <Box sx={{ textAlign: "center", mt: -25 }}>
        <Image src={hero} alt="" />
      </Box>
    </>
  );
};

export default HeroSection;
