import { Box, Button, Container, Typography } from "@mui/material";
import styles from "../../../styles/About.module.scss";

const CTA = () => {
  return (
    <div>
      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            p: { xs: 4, md: 8 },
            bgcolor: "#EAF3FF",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700 }}
            variant="h4"
          >
            {" "}
            We&apos;re constantly looking for Humble.
          </Typography>
          <Button className={styles.joinBTn} variant="contained">
            Join the Team
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CTA;
