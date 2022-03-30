import StarIcon from "@mui/icons-material/Star";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import crowd from "../../../images/crowd-2.svg";
import google from "../../../images/google-2.svg";
import trustPilot from "../../../images/trustpilot-2.svg";
import styles from "../../../styles/Pricing.module.scss";

const ReviewSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        px: 2,
        bgcolor: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 16, md: 18 },
          width: { xs: "100%", md: "50%" },
          margin: "auto",
          mb: 3,
        }}
        variant="body1"
      >
        Every review shares an experience, a journey that matters. Read real
        experiences from real users on Google, TrustPilot, and G2.{" "}
      </Typography>
      {/* companies rating  */}
      <Box
        className={styles.companies}
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
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
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
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
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
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
            <StarIcon sx={{ color: "#FFD064" }} />
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
  );
};

export default ReviewSection;
