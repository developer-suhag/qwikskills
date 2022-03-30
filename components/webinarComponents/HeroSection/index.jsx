import { Box, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: "#F6FAFF" }}>
      <Container sx={{ py: { xs: 6, md: 12 }, textAlign: "center" }}>
        <Typography
          sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 700, mb: 3 }}
          variant="h3"
        >
          Webinars
        </Typography>
        <Typography variant="body1">
          Interact with cloud experts and technology leaders to grow your
          career.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
