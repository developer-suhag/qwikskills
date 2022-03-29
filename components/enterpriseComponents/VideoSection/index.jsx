import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../../styles/Enterprise.module.scss";

const VideoSection = () => {
  return (
    <>
      <div className={styles.videoSection}>
        <Container sx={{ py: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 40 },
              fontWeight: 700,
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              color: "#fff",
              textAlign: "center",
            }}
            variant="h4"
          >
            A refreshing way of practicing the cloud skills for your team
          </Typography>
        </Container>
      </div>
      {/* video  */}
      <Container className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/gHq1vQoLH30"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </>
  );
};

export default VideoSection;
