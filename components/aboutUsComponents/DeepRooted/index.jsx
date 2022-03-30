import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../../../styles/About.module.scss";
import cloudArchitects from "../../../images/about/cloud-architects.svg";
import devOpsEngineers from "../../../images/about/devOps-engineers.svg";
import dataEvangelists from "../../../images/about/data-evangelists.svg";
import securitySpecialists from "../../../images/about/security-specialists.svg";
import Image from "next/image";

const DeepRooted = () => {
  return (
    <Box sx={{ bgcolor: "#F6FAFF" }}>
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{ fontSize: 14, fontWeight: 700, textAlign: "center", mb: 1 }}
          variant="subtitle1"
        >
          Cloud Certifications growth is massive
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 36 },
            fontWeight: 700,
            width: { xs: "100%", md: "70%", margin: "auto" },
            textAlign: "center",
            mb: 3,
          }}
          variant="h3"
        >
          Experts with deep rooted
          <span className={styles.coloredText}> knowledge & passion </span>for
          technology.
        </Typography>
      </Container>
      {/* technologies  */}
      <Container sx={{ pb: 6 }}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "rgba(255, 255, 255, 0.5)",
            boxShadow: "-15px 11px 68px rgba(35, 131, 255, 0.08)",
            borderRadius: 4,
            p: { xs: 2, md: 8 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Paper
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                  p: { xs: 1, md: 4 },
                  border: "1px solid #ABCFFF",
                  boxShadow: 0,
                }}
              >
                <Image width={130} height={130} src={cloudArchitects} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 22 },
                      fontWeight: 600,
                      mb: 2,
                    }}
                    variant="h5"
                  >
                    Cloud Architects
                  </Typography>
                  <Typography variant="body1">
                    Cloud architects & cloud consultants, who have great insight
                    into how a cloud application can be design, build and
                    deploy.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Paper
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                  p: { xs: 1, md: 4 },
                  border: "1px solid #ABCFFF",
                  boxShadow: 0,
                }}
              >
                <Image width={130} height={130} src={devOpsEngineers} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 22 },
                      fontWeight: 600,
                      mb: 2,
                    }}
                    variant="h5"
                  >
                    DevOps Engineers
                  </Typography>
                  <Typography variant="body1">
                    DevOps engineers, who possess strong knowledge of tools,
                    processes, and practices required in SDLC to deploy and
                    mainten.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Paper
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                  p: { xs: 1, md: 4 },
                  border: "1px solid #ABCFFF",
                  boxShadow: 0,
                }}
              >
                <Image width={130} height={130} src={dataEvangelists} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 22 },
                      fontWeight: 600,
                      mb: 2,
                    }}
                    variant="h5"
                  >
                    Data Evangelists
                  </Typography>
                  <Typography variant="body1">
                    Data evangelists, who have the deep technical knowledge to
                    extract the understanding from structured and unstructured
                    data.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Paper
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                  p: { xs: 1, md: 4 },
                  border: "1px solid #ABCFFF",
                  boxShadow: 0,
                }}
              >
                <Image width={130} height={130} src={cloudArchitects} alt="" />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, md: 22 },
                      fontWeight: 600,
                      mb: 2,
                    }}
                    variant="h5"
                  >
                    Security Specialists
                  </Typography>
                  <Typography variant="body1">
                    Security specialists, who have excellent attention to detail
                    to constantly monitor security threats to the cloud systems.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DeepRooted;
