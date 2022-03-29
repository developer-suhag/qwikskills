import { Container, Grid, Box, Typography } from "@mui/material";
import styles from "../../../styles/Enterprise.module.scss";
import Image from "next/image";
import increaseProductivity from "../../../images/enterprise/increase-productivity.svg";

const IncreaseProductivity = () => {
  return (
    <div>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
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
              <Image src={increaseProductivity} alt="" />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ width: { xs: "100%", md: "80%", margin: "auto" } }}>
                <Typography
                  sx={{
                    textAlign: { xs: "center", md: "inherit" },
                    fontSize: { xs: 22, md: 26 },
                    fontWeight: 700,
                    mb: 2,
                  }}
                  variant="h4"
                >
                  Upskill your cloud team and{" "}
                  <span className={styles.coloredText}>increase</span>{" "}
                  productivity
                </Typography>
                <Typography variant="body1">
                  It’s tough to find new cloud talent but easier to upskill the
                  current ones.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default IncreaseProductivity;
