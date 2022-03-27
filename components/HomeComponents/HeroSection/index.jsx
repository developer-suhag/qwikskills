import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import homeStyles from "../../../styles/Home.module.scss";
import trustPilot from "../../../images/trustpilot.svg";
import crowd from "../../../images/crowd.svg";
import google from "../../../images/google.svg";
import StarIcon from "@mui/icons-material/Star";
import heroPeoples from "../../../images/hero-peoples.svg";

const HeroSection = () => {
  return (
    <div className={homeStyles.heroSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: 4 }}
            variant="h6"
          >
            Effective practice
          </Typography>
          <Typography
            sx={{
              fontSize: 56,
              fontWeight: 700,
              width: "50%",
              margin: "auto",
              mb: 3,
            }}
            variant="h3"
          >
            Cloud <span className={homeStyles.coloredText}>Certifications</span>{" "}
            Practice Starts Here
          </Typography>
          <Typography sx={{ width: "50%", margin: "auto" }} variant="body1">
            Effective practice tests curated by experts to help you gain true
            mastery over your Cloud Certifications.{" "}
          </Typography>
          {/* buttons  */}
          <Box
            sx={{ mt: 3, display: "flex", gap: 4, justifyContent: "center" }}
          >
            <Button
              sx={{ textTransform: "inherit" }}
              variant="contained"
              color="secondary"
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
                  color="secondary"
                />
              }
              variant="text"
            >
              Watch video
            </Button>
          </Box>
          {/* companies rating  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
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
      </Container>
      {/* heroSection peoples image */}
      <Box sx={{ textAlign: "center" }}>
        <Image src={heroPeoples} alt="" />
      </Box>
    </div>
  );
};

export default HeroSection;
