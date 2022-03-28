import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import certifiedProfessionals from "../../../images/cloudCertifications/certified-professinals.svg";
import professionalIcon from "../../../images/cloudCertifications/professional-icon.svg";
import styes from "../../../styles/CloudCertifications.module.scss";

const CertifiedProfessionals = () => {
  return (
    <Box sx={{ bgcolor: "#000000", color: "#fff" }}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={certifiedProfessionals} alt="" />
            </Grid>
            <Grid
              className={styes.certifiedProfessionalsTexts}
              item
              xs={2}
              sm={4}
              md={6}
            >
              <Box className={styes.professionalIcon}>
                <Image src={professionalIcon} alt="" />
              </Box>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 36 },
                    fontWeight: 700,
                    mb: 2,
                    color: "#fff",
                  }}
                  variant="h4"
                >
                  Partner <span style={{ color: "#2C88FF" }}>Research</span>{" "}
                  Group{" "}
                </Typography>
                <Typography variant="body1">
                  Having cloud certifications dramatically increases one’s
                  earning potential and job security. But the same time, many
                  organizations are struggling to fill the cloud skill gap.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CertifiedProfessionals;
