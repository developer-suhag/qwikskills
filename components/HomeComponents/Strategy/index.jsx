import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import homeStyles from "../../../styles/Home.module.scss";

const Strategy = () => {
  return (
    <div className={homeStyles.strategySection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 700,
              mb: 2,
            }}
            variant="h3"
          >
            Our <span className={homeStyles.coloredText}>Strategy</span>
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
            variant="body1"
          >
            Get the freedom to experiment, launch, and scale strategies as fast
            as you can think of them.{" "}
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Box className={homeStyles.strategy1}>
                <Typography
                  sx={{
                    fontSize: { xs: 34, md: 56 },
                    fontWeight: 700,
                    color: "#fff",
                  }}
                  variant="h3"
                >
                  258
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 26 },
                    fontWeight: 700,
                    color: "#fff",
                  }}
                  variant="h6"
                >
                  Lorem ipsum
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Box className={homeStyles.strategy2}>
                <Typography
                  sx={{
                    fontSize: { xs: 34, md: 56 },
                    fontWeight: 700,
                    color: "#fff",
                  }}
                  variant="h3"
                >
                  150
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 26 },
                    fontWeight: 700,
                    color: "#fff",
                  }}
                  variant="h6"
                >
                  Lorem ipsum
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Box className={homeStyles.strategy3}>
                <Typography
                  sx={{
                    fontSize: { xs: 34, md: 56 },
                    fontWeight: 700,
                    color: "#fff",
                  }}
                  variant="h3"
                >
                  340
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 20, md: 26 },
                    fontWeight: 700,
                    color: "#fff",
                  }}
                  variant="h6"
                >
                  Lorem ipsum
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Strategy;
