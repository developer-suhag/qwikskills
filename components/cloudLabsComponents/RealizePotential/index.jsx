import styles from "../../../styles/CloudLabs.module.scss";
import potential from "../../../images/cloudLabs/potential-qwikskills.svg";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const RealizePotential = () => {
  return (
    <div className={styles.RealizePotentialSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 36 },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Realize Your
                  <span className={styles.coloredText}> Potential </span> with
                  QwikSkills
                </Typography>
                <Typography variant="body1">
                  Only hands-on practice can realize the potential of learning.
                  To solve the real world cloud scenarios you get to skilled in
                  live cloud platforms.
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    No need to have separate cloud platform accounts.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>CheckCircleOutlineIcon</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    Apply your practiced skills in solving real world cloud
                    problem.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    No worry of any unwanted risk on using our cloud labs.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={potential} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RealizePotential;
