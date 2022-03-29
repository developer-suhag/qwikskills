import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import styles from "../../../styles/CertificationDetails.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import desktopIcon from "../../../images/desktop-icon.svg";
import pcIcon from "../../../images/pc-icon.svg";
import questionIcon from "../../../images/question-icon.svg";
import StarIcon from "@mui/icons-material/Star";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Container sx={{ py: 12, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Typography variant="subtitle1">Home</Typography>
          <ChevronRightIcon />
          <Typography variant="subtitle1">AWS</Typography>
          <ChevronRightIcon />
          <Typography color="primary" variant="subtitle1">
            AWS Database – Specialty
          </Typography>
        </Box>
        <Typography
          sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 700, mb: 2 }}
          variant="h4"
        >
          AWS Cloud <span className={styles.coloredText}>Practitioner</span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Image src={desktopIcon} alt="" />
            <Typography variant="subtitle1">2 Practice Tests</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Image src={pcIcon} alt="" />
            <Typography variant="subtitle1">1 Free Practice Test</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Image src={questionIcon} alt="" />
            <Typography variant="subtitle1">130 Unique Questions</Typography>
          </Box>
        </Box>
        {/* star  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StarIcon sx={{ color: "#FFB42C" }} />
          <StarIcon sx={{ color: "#FFB42C" }} />
          <StarIcon sx={{ color: "#FFB42C" }} />
          <StarIcon sx={{ color: "#FFB42C" }} />
          <StarIcon sx={{ color: "#FFB42C" }} />
          <Typography sx={{ mx: 2 }} variant="subtitle1">
            87 ratings
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;
