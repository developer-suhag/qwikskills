import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../../styles/CloudCertifications.module.scss";
import note from "../../../images/cloudCertifications/note.svg";
import Image from "next/image";
import questionIcon from "../../../images/cloudCertifications/question-icon.svg";
import certifiedIcon from "../../../images/cloudCertifications/certified-icon.svg";
import practiceIcon from "../../../images/cloudCertifications/practice-icon.svg";
import platformIcon from "../../../images/cloudCertifications/qwikskills-platform-icon.svg";
import affordableIcon from "../../../images/cloudCertifications/affordable-icon.svg";
import supportIcon from "../../../images/cloudCertifications/support-icon.svg";

const WhyChooseQwikSkills = () => {
  return (
    <div className={styles.whyChooseQwikSkillsSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            className={styles.demanGridBox}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
            sx={{
              alignItems: "center",
              mb: 8,
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
                  variant="body1"
                >
                  For Cloud Certifications Practice Tests
                </Typography>
                <Box className={styles.textWithNote}>
                  <Typography
                    sx={{
                      fontSize: { xs: 22, md: 36 },
                      fontWeight: 700,
                      mb: 6,
                    }}
                    variant="h3"
                  >
                    Why Choose{" "}
                    <span className={styles.coloredText}>QwikSkills</span>?
                  </Typography>
                  <Box
                    sx={{ display: { xs: "none", md: "inherit" } }}
                    className={styles.noteIcon}
                  >
                    <Image width={50} height={50} src={note} alt="" />
                  </Box>
                </Box>
                <Typography variant="body1">
                  Having cloud certifications dramatically increases one’s
                  earning potential and job security. But the same time.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: " -15px 11px 27px rgba(35, 131, 255, 0.08)",
                  borderRadius: "20px",
                }}
              >
                <Image src={questionIcon} alt="" />
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, mb: 3 }}
                  variant="h4"
                >
                  Question Explanations
                </Typography>
                <Typography variant="body1">
                  Updated, relevant questions with the accurate and inaccurate
                  answer explanation.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: " -15px 11px 27px rgba(35, 131, 255, 0.08)",
                  borderRadius: "20px",
                }}
              >
                <Image src={certifiedIcon} alt="" />
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, mb: 3 }}
                  variant="h4"
                >
                  Certified SMEs
                </Typography>
                <Typography variant="body1">
                  Certified cloud subject matter experts, specially design
                  practice Tests.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          {/*  */}
          <Grid
            className={styles.demanGridBox}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
            sx={{
              alignItems: "center",
              mb: 4,
            }}
          >
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: " -15px 11px 27px rgba(35, 131, 255, 0.08)",
                  borderRadius: "20px",
                }}
              >
                <Image src={practiceIcon} alt="" />
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, mb: 3 }}
                  variant="h4"
                >
                  Practice Tests
                </Typography>
                <Typography variant="body1">
                  Practice Tests are regularly updated to remain relevant and
                  practical.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: " -15px 11px 27px rgba(35, 131, 255, 0.08)",
                  borderRadius: "20px",
                }}
              >
                <Image src={platformIcon} alt="" />
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, mb: 3 }}
                  variant="h4"
                >
                  QwikSkills Platform
                </Typography>
                <Typography variant="body1">
                  QwikSkills allows you to experience real exam scenarios so you
                  can prepare better.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: " -15px 11px 27px rgba(35, 131, 255, 0.08)",
                  borderRadius: "20px",
                }}
              >
                <Image src={affordableIcon} alt="" />
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, mb: 3 }}
                  variant="h4"
                >
                  Super Affordable
                </Typography>
                <Typography variant="body1">
                  Best pricing plans so every aspirant of AWS certification can
                  have access to Practice.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: " -15px 11px 27px rgba(35, 131, 255, 0.08)",
                  borderRadius: "20px",
                }}
              >
                <Image src={platformIcon} alt="" />
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, mb: 3 }}
                  variant="h4"
                >
                  Help & Support
                </Typography>
                <Typography variant="body1">
                  The prompt user supports, so you never face any inconvenience
                  at QwiSkills.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default WhyChooseQwikSkills;
