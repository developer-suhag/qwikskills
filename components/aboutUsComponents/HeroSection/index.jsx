import { Box, Container, Typography } from "@mui/material";
import styles from "../../../styles/About.module.scss";
import aboutHero from "../../../images/about/about-hero.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#F6FAFF" }}>
      <Container sx={{ py: { xs: 6, md: 12 }, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 40 },
            fontWeight: 700,
            width: { xs: "100%", md: "80%", margin: "auto" },
            mb: 3,
          }}
          variant="h3"
        >
          Learn More About the
          <span className={styles.coloredText}> Mission and Success </span>{" "}
          Behind QwikSkills
        </Typography>
        <Typography
          sx={{
            width: { xs: "100%", md: "55%" },
            margin: "auto",
            textAlign: "center",
            mb: 4,
          }}
          variant="body1"
        >
          We help our clients prepare for cloud certification by providing
          accurate content and practice tests to develop their skills.
        </Typography>
        <Box>
          <Image src={aboutHero} alt="" />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
