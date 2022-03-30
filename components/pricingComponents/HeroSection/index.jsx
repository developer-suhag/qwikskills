import { Box, Container, Typography } from "@mui/material";
import styles from "../../../styles/Pricing.module.scss";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#F6FAFF" }}>
      <Container sx={{ py: { xs: 6, md: 12 }, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 40 },
            fontWeight: 700,
            mb: 3,
            width: { xs: "100%", md: "40%", margin: "auto" },
          }}
          variant="h3"
        >
          Find a <span className={styles.coloredText}>Plan</span> That’s Right
          For You
        </Typography>
        <Typography variant="body1">
          Practice your skills that boost your career.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
