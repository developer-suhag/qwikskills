import styles from "../../../styles/CloudLabs.module.scss";
import business from "../../../images/cloudLabs/business.svg";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const QwikSkillsForBusiness = () => {
  return (
    <div>
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
                  QwikSkills For
                  <span className={styles.coloredText}>Business</span>
                </Typography>
                <Typography variant="body1">
                  Enhance your team productivity and skills to grow your
                  business.
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    Train your team on real cloud platforms isoltaed from your
                    enviorment.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    Get ahead of the curve with changing cloud technology.
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
                >
                  <CheckCircleOutlineIcon color="secondary" />
                  <Typography>
                    Build your team’s cloud skills to solve your real life
                    business problem.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={business} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default QwikSkillsForBusiness;
