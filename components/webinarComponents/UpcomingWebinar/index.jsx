import { Container, Typography, Box, Button } from "@mui/material";
import styles from "../../../styles/Webinar.module.scss";
import businessMan from "../../../images/successful-businessman.png";
import logo from "../../../images/logo-2.svg";
import Image from "next/image";
import line from "../../../images/line.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
        <Box
          sx={{
            bgcolor: "#2C88FF",
            width: { xs: "100%", md: "50%" },
            margin: "auto",
            borderRadius: 4,
            my: 6,
            p: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <Box>
              <Image src={logo} alt="" />
              <Typography
                sx={{
                  fontSize: { xs: 20, md: 26 },
                  fontWeight: 700,
                  my: 2,
                  color: "#fff",
                }}
                variant="h4"
              >
                Cloud Computing - A Promising Career Choice
              </Typography>
              <Typography
                sx={{ fontWeight: 600, color: "#fff", fontSize: 16 }}
                variant="subtitle1"
              >
                FREE WEBINAR
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Box className={styles.businessMan}>
                <Image src={businessMan} alt="" />
              </Box>
              <Box sx={{ mt: -2, display: { md: "none" } }}>
                <Image src={line} alt="" />
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: -2, display: { xs: "none", md: "inherit" } }}>
            <Image src={line} alt="" />
          </Box>
          {/* time  */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: " rgba(255, 255, 255, 0.2)",
                p: 1,
                gap: 1,
                height: 30,
                borderRadius: 50,
              }}
            >
              <AccessTimeIcon color="info" />
              <Typography sx={{ color: "#fff" }} variant="body1">
                18 December 2021 | 3:00 PM
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 20 },
                  fontWeight: 700,
                  mb: 1,
                  color: "#fff",
                }}
                variant="h5"
              >
                Venkatesh A
              </Typography>
              <Typography
                sx={{ fontSize: 16, fontWeight: 500, mb: 2, color: "#fff" }}
                variant="h6"
              >
                Professional Cloud Architect
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Register Now btn  */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{ width: { xs: "100%", md: "inherit" } }}
            className={styles.registerBTn}
            variant="contained"
          >
            Register Now
          </Button>
        </Box>
      </Container>
      {/* About */}
      <Container sx={{ pb: 6, pt: 2, textAlign: "center" }}>
        <Typography
          sx={{ fontSize: { xs: 20, md: 26 }, fontWeight: 700, mb: 2 }}
          variant="h4"
        >
          About
        </Typography>
        <Typography sx={{ mb: 2 }} variant="body1">
          The world has become more skill-driven than ever before. With Cloud
          technology growing rapidly, demand for skilled cloud professionals
          with hands-on skills have also grown exponentially. Cloud technology
          has some great benefits that lay the foundation of modern applications
          like Netflix, Google Drive, YouTube, Spotify, and many more. Some of
          these benefits are exceptional.
        </Typography>
        <Typography sx={{ mb: 2 }} variant="body1">
          Learn from Venkatesh how cloud computing came into being and became
          mainstream technology. Also how college students can learn the cloud
          skills which is now one of most sought after skills in the industry.
          Points to be covered in webinar are:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 4 }}>
          <Typography className={styles.textWithDot} variant="body1">
            Before cloud technology.
          </Typography>
          <Typography className={styles.textWithDot} variant="body1">
            Why cloud technology.
          </Typography>
          <Typography className={styles.textWithDot} variant="body1">
            What is cloud technology.
          </Typography>
          <Typography className={styles.textWithDot} variant="body1">
            Career, jobs & salaries in cloud industry.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default UpcomingWebinar;
