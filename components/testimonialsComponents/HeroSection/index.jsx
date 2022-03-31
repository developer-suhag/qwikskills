import { Box, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#F6FAFF" }}>
      <Container sx={{ py: { xs: 6, md: 12 }, textAlign: "center" }}>
        <Typography
          sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 700, mb: 3 }}
          variant="h3"
        >
          Testimonials
        </Typography>
        <Typography variant="body1">
          We help our clients prepare for cloud certification by providing
          accurate content and practice tests to develop their skills.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
