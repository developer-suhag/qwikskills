import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import cloud from "../../../images/cloudCertifications/cloud-5.svg";
import researchPartner from "../../../images/cloudCertifications/research-partner.svg";

const ResearchPartner = () => {
  return (
    <Box sx={{ bgcolor: "#F8FBFF" }}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Image src={cloud} alt="" />
              </Box>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
                  variant="subtitle1"
                >
                  According to a report by
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 2 }}
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
            <Grid item xs={2} sm={4} md={6}>
              <Image src={researchPartner} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ResearchPartner;
