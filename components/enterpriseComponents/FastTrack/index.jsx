import { Button, Container, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import styles from "../../../styles/Enterprise.module.scss";

const FastTrack = () => {
  return (
    <div>
      <Container sx={{ py: 8, my: 6, bgcolor: "#2C88FF", borderRadius: 4 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 36 },
            fontWeight: 700,
            color: "#fff",
            width: { xs: "100%", md: "60%" },
            margin: "auto",
            textAlign: "center",
          }}
          variant="h3"
        >
          Fast-track your team&apos;s cloud upskilling with QwikSkills
        </Typography>
        {/* buttons  */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            gap: { xs: 2, md: 4 },
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              fontSize: 15,
              textTransform: "inherit",
              bgcolor: "#fff",
              color: "#000",
            }}
            variant="contained"
            className={styles.FastTrackBtn1}
          >
            Let’s Connect
          </Button>
          <Button
            sx={{
              fontSize: 15,
              bgcolor: "#000",
              color: "#fff",
              textTransform: "inherit",
            }}
            variant="contained"
            className={styles.FastTrackBtn2}
          >
            Request a Demo
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default FastTrack;
