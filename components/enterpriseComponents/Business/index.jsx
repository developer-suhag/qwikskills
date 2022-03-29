import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "../../../styles/Enterprise.module.scss";
import teamWorkIcon from "../../../images/enterprise/social-network-icon.svg";
import fasterIcon from "../../../images/enterprise/bar-chart-icon.svg";
import skilledIcon from "../../../images/enterprise/positive-thinking-icon.svg";
import certificateIcon from "../../../images/enterprise/certificate-icon.svg";
import line from "../../../images/enterprise/line.svg";
import Image from "next/image";

const Business = () => {
  return (
    <div className={styles.businessSection}>
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 40 },
            fontWeight: 700,
            mb: 4,
            color: "#fff",
            textAlign: "center",
            width: { xs: "100%", md: "60%" },
            margin: "auto",
          }}
          variant="h3"
        >
          How Your <span className={styles.coloredText}>Business</span> Can{" "}
          <span className={styles.coloredText}>Benefit</span> from QwikSkills ?
        </Typography>
        <Box className={styles.gridBoxWithLine} sx={{ flexGrow: 1, mt: 8 }}>
          <Box
            sx={{ display: { xs: "none", md: "inherit" } }}
            className={styles.line}
          >
            <Image src={line} alt="" />
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  borderBottom: { xs: "1px solid #2A2B43", md: "none" },
                  paddingBottom: { xs: 6, md: 0 },
                }}
              >
                <Image src={teamWorkIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2, color: "#fff" }}
                  variant="h5"
                >
                  Get Teamwork
                </Typography>
                <Typography sx={{ color: "#fff" }} variant="body1">
                  Collective and integrated teamwork to practice and master the
                  cloud skills.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  borderBottom: { xs: "1px solid #2A2B43", md: "none" },
                  paddingBottom: { xs: 6, md: 0 },
                }}
              >
                <Image src={fasterIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2, color: "#fff" }}
                  variant="h5"
                >
                  Get Faster
                </Typography>
                <Typography sx={{ color: "#fff" }} variant="body1">
                  Get your team cloud certified faster and align them for a
                  common goal.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  borderBottom: { xs: "1px solid #2A2B43", md: "none" },
                  paddingBottom: { xs: 6, md: 0 },
                }}
              >
                <Image src={skilledIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2, color: "#fff" }}
                  variant="h5"
                >
                  Get Skilled
                </Typography>
                <Typography sx={{ color: "#fff" }} variant="body1">
                  Your team get real cloud skills in separate real cloud
                  environment.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  borderBottom: { xs: "1px solid #2A2B43", md: "none" },
                  paddingBottom: { xs: 6, md: 0 },
                }}
              >
                <Image src={certificateIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2, color: "#fff" }}
                  variant="h5"
                >
                  Get Certified
                </Typography>
                <Typography sx={{ color: "#fff" }} variant="body1">
                  Build cloud skills with fast track cloud certification
                  practicing.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Business;
