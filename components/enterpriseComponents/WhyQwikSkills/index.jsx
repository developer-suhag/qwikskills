import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../../../styles/Enterprise.module.scss";
import Image from "next/image";
import whyQwikGirl from "../../../images/enterprise/girl.svg";
import whyQwik from "../../../images/enterprise/why-qwikskill.svg";
import diplomaIcon from "../../../images/enterprise/diploma-icon.svg";
import ratingIcon from "../../../images/enterprise/rating-icon.svg";
import onlineLearningIcon from "../../../images/enterprise/online-learning-icon.svg";
import documentIcon from "../../../images/enterprise/document-icon.svg";

const WhyQwikSkills = () => {
  return (
    <div className={styles.whyQwikSkillsSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: { xs: 22, md: 40 }, fontWeight: 700, mb: 2 }}
          >
            Why <span className={styles.coloredText}>QwikSkills</span>?
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
            variant="body1"
          >
            An efficient way to help your company build the cloud competency and
            grow business.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={whyQwikGirl} alt="" />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={whyQwik} alt="" />
            </Grid>
          </Grid>
        </Box>

        {/*  */}
      </Container>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Paper
                sx={{
                  bgcolor: "#C5F8D0",
                  boxShadow: 0,
                  borderRadius: 4,
                  p: 3,
                  display: "flex",
                  gap: 4,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700 }}
                  variant="h5"
                >
                  28
                </Typography>
                <Typography variant="body1">
                  Cloud certifications and growing..
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Paper
                sx={{
                  bgcolor: "#FFEFD6",
                  boxShadow: 0,
                  borderRadius: 4,
                  p: 3,
                  display: "flex",
                  gap: 4,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700 }}
                  variant="h5"
                >
                  150
                </Typography>
                <Typography variant="body1">
                  Practice Tests and growing..
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Paper
                sx={{
                  bgcolor: "#F2D6FF",
                  boxShadow: 0,
                  borderRadius: 4,
                  p: 3,
                  display: "flex",
                  gap: 4,
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700 }}
                  variant="h5"
                >
                  6000+
                </Typography>
                <Typography variant="body1">Q&A pool and growing..</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={4} lg={3}>
              <Paper
                sx={{
                  textAlign: "center",
                  p: 2,
                  boxShadow: "0px 11px 60px rgba(112, 174, 255, 0.09)",
                  borderRadius: 4,
                  height: { xs: "inherit", md: 320 },
                }}
              >
                <Image src={diplomaIcon} alt="" />
                <Typography
                  sx={{ fontSize: 22, fontWeight: 600, my: 2 }}
                  variant="h4"
                >
                  Practice Tests
                </Typography>
                <Typography variant="body1">
                  Effective Practice Tests curated by certified cloud experts to
                  give real exam environment and succeed.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={4} lg={3}>
              <Paper
                sx={{
                  textAlign: "center",
                  p: 2,
                  boxShadow: "0px 11px 60px rgba(112, 174, 255, 0.09)",
                  borderRadius: 4,
                  height: { xs: "inherit", md: 320 },
                }}
              >
                <Image src={onlineLearningIcon} alt="" />
                <Typography
                  sx={{ fontSize: 22, fontWeight: 600, my: 2 }}
                  variant="h4"
                >
                  Detailed Explanation
                </Typography>
                <Typography variant="body1">
                  Detailed answer explanation for correct & incorrect options.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={4} lg={3}>
              <Paper
                sx={{
                  textAlign: "center",
                  p: 2,
                  boxShadow: "0px 11px 60px rgba(112, 174, 255, 0.09)",
                  borderRadius: 4,
                  height: { xs: "inherit", md: 320 },
                }}
              >
                <Image src={ratingIcon} alt="" />
                <Typography
                  sx={{ fontSize: 22, fontWeight: 600, my: 2 }}
                  variant="h4"
                >
                  Assessment
                </Typography>
                <Typography variant="body1">
                  Effective Practice Tests curated by certified cloud experts to
                  give real exam environment and succeed.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={4} lg={3}>
              <Paper
                sx={{
                  textAlign: "center",
                  p: 2,
                  boxShadow: "0px 11px 60px rgba(112, 174, 255, 0.09)",
                  borderRadius: 4,
                  height: { xs: "inherit", md: 320 },
                }}
              >
                <Image src={documentIcon} alt="" />
                <Typography
                  sx={{ fontSize: 22, fontWeight: 600, my: 2 }}
                  variant="h4"
                >
                  Live Cloud Labs
                </Typography>
                <Typography variant="body1">
                  Real Hands-on Cloud Labs to apply your learning knowledge in
                  solving real world business problems.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default WhyQwikSkills;
