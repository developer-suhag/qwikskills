import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../../../styles/CertificationDetails.module.scss";
import course from "../../../images/cloudCertifications/course.jpg";
import Image from "next/image";
import lockIcon from "../../../images/lock-icon.svg";
import CertficationDetailsTabs from "../certficationDetailsTabs";

const CourseDetails = () => {
  return (
    <div className={styles.CourseDetails}>
      <Container sx={{ pb: 6 }}>
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Box className={styles.detailsBox}>
                <Image src={course} alt="" />
                <Box sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Certification Code
                    </Typography>
                    <Typography variant="subtitle1">DBS-C01</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Level
                    </Typography>
                    <Typography sx={{ color: "#FF9900" }} variant="subtitle1">
                      Foundational
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Prerequisites
                    </Typography>
                    <Typography variant="subtitle1">None</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Exam Fee
                    </Typography>
                    <Typography variant="subtitle1">$300</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Exam Duration
                    </Typography>
                    <Typography variant="subtitle1">180 minutes</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Number of Questions
                    </Typography>
                    <Typography variant="subtitle1">65</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Certification Validity
                    </Typography>
                    <Typography variant="subtitle1">3 years</Typography>
                  </Box>
                  <Box
                    sx={{
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Exam Languages
                    </Typography>
                    <Typography variant="subtitle1">
                      English, Japanese, Korean, Simplified Chinese
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      my: 2,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                      Exam Format
                    </Typography>
                    <Typography variant="subtitle1">
                      Multiple choice and multiple select
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center", py: 2 }}>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        width: { xs: "100%", md: "inherit" },
                      }}
                      variant="contained"
                    >
                      Start Your Free Trial
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={8}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 3,
                  boxShadow: " -4px 11px 27px rgba(117, 174, 249, 0.13)",
                  borderRadius: "16px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 26 },
                      fontWeight: 700,
                      mb: 2,
                    }}
                    variant="h5"
                  >
                    About Certification
                  </Typography>
                  <Typography variant="body1">
                    AWS Cloud Practitioner is one of the most basic AWS
                    certifications and is intended for those with fundamental
                    cloud concepts such as what is cloud, how does AWS work.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    className={styles.detailsTextWithDot}
                    variant="body1"
                  >
                    This certification is an excellent opportunity for
                    understanding the basics of AWS cloud and is most
                    recommended to beginners regardless of roles.
                  </Typography>
                  <Typography
                    className={styles.detailsTextWithDot}
                    variant="body1"
                  >
                    Learners will get hands-on skills and then demonstrate their
                    knowledge with an AWS Cloud Practitioner Certification exam.
                  </Typography>
                </Box>
                <Box>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                    sx={{ my: 4 }}
                  >
                    <Grid item xs={2} sm={4} md={6}>
                      <Paper
                        sx={{
                          p: 3,
                          display: "flex",
                          justifyContent: "space-between",
                          boxShadow:
                            " -4px 11px 27px rgba(117, 174, 249, 0.13)",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 600 }}
                          variant="h5"
                        >
                          AWS Cloud Practitioner Free Practice Test
                        </Typography>
                        <Button variant="text">Free</Button>
                      </Paper>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                      <Paper
                        sx={{
                          p: 3,
                          display: "flex",
                          justifyContent: "space-between",
                          boxShadow:
                            " -4px 11px 27px rgba(117, 174, 249, 0.13)",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 600 }}
                          variant="h5"
                        >
                          AWS Cloud Practitioner Free Practice Test
                        </Typography>
                        <Image src={lockIcon} alt="" />
                      </Paper>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                      <Paper
                        sx={{
                          p: 3,
                          display: "flex",
                          justifyContent: "space-between",
                          boxShadow:
                            " -4px 11px 27px rgba(117, 174, 249, 0.13)",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 600 }}
                          variant="h5"
                        >
                          AWS Cloud Practitioner Free Practice Test
                        </Typography>
                        <Image src={lockIcon} alt="" />
                      </Paper>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                      <Paper
                        sx={{
                          p: 3,
                          display: "flex",
                          justifyContent: "space-between",
                          boxShadow:
                            " -4px 11px 27px rgba(117, 174, 249, 0.13)",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 600 }}
                          variant="h5"
                        >
                          AWS Cloud Practitioner Free Practice Test
                        </Typography>
                        <Image src={lockIcon} alt="" />
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
                {/* tabs  */}
                <CertficationDetailsTabs />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CourseDetails;
