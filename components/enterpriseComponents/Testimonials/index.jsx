import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../../styles/Enterprise.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <Container
        className={styles.testimonialsContainer}
        sx={{ py: 6, px: { xs: 0, md: 8 } }}
      >
        {/* left icon  */}
        <Box className={styles.leftArrow}>
          <ChevronLeftIcon />
        </Box>
        {/* right icon  */}
        <Box className={styles.rightArrow}>
          <ChevronRightIcon />
        </Box>
        {/*  */}
        <Box
          sx={{
            bgcolor: "#ECFBF2",
            px: { xs: 4, md: 16 },
            py: 10,
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              className={styles.testimonialsText}
              sx={{ fontSize: { xs: 16, md: 18 }, mb: 2 }}
              variant="body1"
            >
              It really helped me assess my level of preparedness for the test!
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 700 }}
              variant="subtitle1"
            >
              Anushree Arora
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Testimonials;
