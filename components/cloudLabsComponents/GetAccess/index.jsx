import styles from "../../../styles/CloudLabs.module.scss";
import Image from "next/image";
import getAccess from "../../../images/cloudLabs/get-access.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const GetAccess = () => {
  return (
    <div className={styles.getAccessSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={getAccess} alt="" />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 36 },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  Get
                  <span className={styles.coloredText}> Access </span>Now, No
                  Extra Time or Efforts
                </Typography>
                <Typography variant="body1">
                  Using your QwikSkills premium account you can start right
                  away.
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    Pracrtice cloud computing without any worry of risk.
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    Learn in controlled hands-on lab environment and apply on
                    real production platform.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    No hussle of setting up your own personalized account.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default GetAccess;
