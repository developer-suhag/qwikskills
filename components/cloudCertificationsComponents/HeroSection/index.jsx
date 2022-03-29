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
import styles from "../../../styles/CloudCertifications.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Container className={styles.container} sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: { xs: 2, md: 4 } }}
            variant="h6"
          >
            Effective practice
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 35, md: 56 },
              fontWeight: 700,
              width: { xs: "100%", md: "50%" },
              margin: "auto",
              mb: { xs: 1, md: 3 },
            }}
            variant="h3"
          >
            Cloud <span className={styles.coloredText}>Certifications</span>{" "}
            Practice Starts Here
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
            variant="body1"
          >
            Effective practice tests curated by experts to help you gain true
            mastery over your Cloud Certifications.{" "}
          </Typography>
          {/* buttons  */}
          <Box
            sx={{ mt: 3, display: "flex", gap: 4, justifyContent: "center" }}
          >
            <Button
              sx={{
                textTransform: "inherit",
                width: { xs: "100%", md: "inherit" },
              }}
              variant="contained"
              color="primary"
            >
              Start your free trial
            </Button>
          </Box>
        </Box>
        <Box className={styles.cloudCertification}>
          <Box
            sx={{ display: { xs: "none", md: "inherit" } }}
            className={styles.cloudPlainIcon}
          >
            <Image src={cloudPlain} alt="" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: 22, md: 40 },
                fontWeight: 700,
                mb: 2,
              }}
              variant="h3"
            >
              Choose Your Cloud Certifications
            </Typography>
            <Typography
              sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
              variant="body1"
            >
              Validate your cloud skills with our well-researched and frequently
              updated practice tests.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;
