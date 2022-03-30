import { Container, Typography } from "@mui/material";
import styles from "../../../styles/Webinar.module.scss";

const UpcomingWebinar = () => {
  return (
    <div className={styles.upcomingWebinarSection}>
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 36 },
            fontWeight: 700,
            textAlign: "center",
          }}
          variant="h3"
        >
          <span className={styles.coloredText}>Upcoming</span> Webinar
        </Typography>
      </Container>
    </div>
  );
};

export default UpcomingWebinar;
