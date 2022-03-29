import styles from "../../../styles/Enterprise.module.scss";
import Image from "next/image";
import { Container, Grid, Typography, Box } from "@mui/material";
import handsOnCloud from "../../../images/enterprise/best-way-to-learn.svg";
import practiceTest from "../../../images/enterprise/practice-test.svg";
import whiteRectangleRight from "../../../images/enterprise/white-rectangle-right.svg";
import greenRectangleRight from "../../../images/enterprise/green-rectangle.svg";
import rightRectangle from "../../../images/enterprise/right-rectangle.png";
import leftRectangle from "../../../images/enterprise/left-rectangle.png";

const BestWayLearn = () => {
  return (
    <div className={styles.bestWayLearnSection}>
      <Container sx={{ pt: 6, pb: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 40 },
            fontWeight: 700,
            textAlign: "center",
            width: { xs: "100%", md: "60%" },
            margin: "auto",
            mb: 2,
          }}
          variant="h3"
        >
          Best
          <span className={styles.coloredText}> Way to Learn</span> is By Doing
        </Typography>
        <Typography
          sx={{
            width: { xs: "100%", md: "40%" },
            margin: "auto",
            textAlign: "center",
          }}
          variant="body1"
        >
          An efficient way to help your company build the cloud competency and
          grow business.
        </Typography>
      </Container>
      {/* Hands-on Cloud Labs */}
      <Container
        className={styles.handsOnCloud}
        sx={{ p: 6, my: 4, bgcolor: "#EAFFF4", borderRadius: 4 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={handsOnCloud} alt="" />
            </Grid>
            <Grid
              className={styles.whiteRectangleRightBox}
              item
              xs={2}
              sm={4}
              md={6}
            >
              <Box className={styles.rightRectangle}>
                <Image src={rightRectangle} alt="" />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 3 }}
                  variant="body1"
                >
                  Hands-on Cloud Labs
                </Typography>
                <Typography className={styles.textWithDot} variant="body1">
                  Apply your learning knowledge in practice
                </Typography>
                <Typography className={styles.textWithDot} variant="body1">
                  Get guided instructions and procedure
                </Typography>
                <Typography className={styles.textWithDot} variant="body1">
                  No risk of any unwanted incident on cloud platform
                </Typography>
                <Typography className={styles.textWithDot} variant="body1">
                  One account access to all hands-on cloud labs
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* Practice Tests */}
      <Container
        className={styles.handsOnCloud}
        sx={{ p: 6, my: 12, bgcolor: "#F2F8FF", borderRadius: 4 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid
              className={styles.whiteRectangleRightBox}
              item
              xs={2}
              sm={4}
              md={6}
            >
              <Box className={styles.leftRectangle}>
                <Image src={leftRectangle} alt="" />
              </Box>
              <Box sx={{ pl: 5 }}>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 3 }}
                  variant="body1"
                >
                  Practice Tests
                </Typography>
                <Typography className={styles.textWithDot2} variant="body1">
                  Real-exam simulator sharing pass percentage outcomes
                </Typography>
                <Typography className={styles.textWithDot2} variant="body1">
                  Practice Tests by cloud experts, categorically defined
                </Typography>
                <Typography className={styles.textWithDot2} variant="body1">
                  Detailed answer explanation for correct & incorrect
                </Typography>
                <Typography className={styles.textWithDot2} variant="body1">
                  Feedback & Outcome based practice results
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={practiceTest} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default BestWayLearn;
