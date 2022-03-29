import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import cloud from "../../../images/cloud.svg";
import computerIcon from "../../../images/computer-icon.svg";
import crowd from "../../../images/crowd.svg";
import google from "../../../images/google.svg";
import heroPeoples from "../../../images/hero-peoples.svg";
import plain from "../../../images/plain.svg";
import trustPilot from "../../../images/trustpilot.svg";
import homeStyles from "../../../styles/Home.module.scss";

const HeroSection = () => {
  return (
    <div className={homeStyles.heroSection}>
      <Container className={homeStyles.container} sx={{ py: 6 }}>
        <Box className={homeStyles.computerIcon}>
          <Image src={computerIcon} alt="" />
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: { xs: 2, md: 4 } }}
            variant="h6"
          >
            Effective practice
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 35, md: 56 },
              fontWeight: 700,
              width: { xs: "100%", md: "50%" },
              margin: "auto",
              mb: { xs: 1, md: 3 },
            }}
            variant="h3"
          >
            Cloud <span className={homeStyles.coloredText}>Certifications</span>{" "}
            Practice Starts Here
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
            variant="body1"
          >
            Effective practice tests curated by experts to help you gain true
            mastery over your Cloud Certifications.{" "}
          </Typography>
          {/* buttons  */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              gap: { xs: 2, md: 4 },
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Button
              sx={{
                textTransform: "inherit",
                width: { xs: "100%", md: "inherit" },
              }}
              variant="contained"
              color="primary"
            >
              Start your free trial
            </Button>
            <Button
              sx={{ fontSize: 15, color: "#000", textTransform: "inherit" }}
              startIcon={
                <PlayCircleIcon
                  sx={{
                    boxShadow: "0px 5px 14px rgba(66, 0, 255, 0.08)",
                  }}
                  color="primary"
                />
              }
              variant="text"
            >
              Watch video
            </Button>
          </Box>
          {/* companies rating  */}
          <Box
            className={homeStyles.companies}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, md: 5 },
              mt: 5,
            }}
          >
            <Box>
              <Image src={trustPilot} alt="" />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <Typography
                  sx={{ fontSize: 15, color: "#808080", marginLeft: 1 }}
                  variant="subtitle1"
                >
                  4.5
                </Typography>
              </Box>
            </Box>
            <Box>
              <Image src={crowd} alt="" />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <Typography
                  sx={{ fontSize: 15, color: "#808080", marginLeft: 1 }}
                  variant="subtitle1"
                >
                  4.5
                </Typography>
              </Box>
            </Box>
            <Box>
              <Image src={google} alt="" />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <StarIcon sx={{ color: "#FFE07D" }} />
                <Typography
                  sx={{ fontSize: 15, color: "#808080", marginLeft: 1 }}
                  variant="subtitle1"
                >
                  4.5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={homeStyles.plainIcon}>
          <Image src={plain} alt="" />
        </Box>
        <Box className={homeStyles.cloudIcon}>
          <Image src={cloud} alt="" />
        </Box>
      </Container>
      {/* heroSection peoples image */}
      <Box sx={{ textAlign: "center" }}>
        <Image src={heroPeoples} alt="" />
      </Box>
    </div>
  );
};

export default HeroSection;
