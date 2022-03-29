import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import cloud from "../../../images/cloud.svg";
import computerIcon from "../../../images/computer-icon.svg";
import crowd from "../../../images/crowd.svg";
import google from "../../../images/google.svg";
import heroPeoples from "../../../images/hero-peoples.svg";
import plain from "../../../images/plain.svg";
import trustPilot from "../../../images/trustpilot.svg";
import cloudPlain from "../../../images/cloudCertifications/cloudCertifications-plain.svg";
import styles from "../../../styles/awsCertifications.module.scss";
import awsHero from "../../../images/aws-hero.svg";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Container className={styles.container} sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
            variant="h6"
          >
            Learn smart. Practice live
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 700,
              width: { xs: "100%", md: "40%" },
              margin: "auto",
              mb: { xs: 1, md: 2 },
            }}
            variant="h3"
          >
            AWS Certifications
            <span className={styles.coloredText}> Practice </span> Tests
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "80%" }, margin: "auto" }}
            variant="body1"
          >
            AWS Cloud undoubtedly is the number one leader in the cloud
            computing business that naturally makes AWS certifications
            most-in-demand skills. Expand your AWS skills with our constantly
            updated AWS tests library.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Image src={awsHero} alt="" />
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;
