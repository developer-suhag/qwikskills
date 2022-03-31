import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import azure from "../../../images/about/azure.svg";
import google from "../../../images/about/google-cloud.svg";
import harit from "../../../images/about/harit-verma.jpg";
import linkedin from "../../../images/about/linkedin.svg";
import rohit from "../../../images/about/rohit-bothra.jpg";
import twitter from "../../../images/about/twitter.svg";
import srivastava from "../../../images/about/varun-srivastava.jpg";
import varun from "../../../images/about/varun.jpg";
import styles from "../../../styles/About.module.scss";

const Team = () => {
  return (
    <div>
      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 22, md: 36 },
              fontWeight: 700,
              width: { xs: "100%", md: "70%" },
              margin: "auto",
              textAlign: "center",
              mb: 3,
            }}
            variant="h3"
          >
            We’re
            <span className={styles.coloredText}> changing the way </span>people
            think of certifications.
          </Typography>
          <Typography gutterBottom>
            At the heart of our mission is the idea that good preparation comes
            only by good practice.
          </Typography>
          <Typography gutterBottom>
            The idea of QwikSkills was born when it’s founders Varun and Harit
            struggled to find good practice tests before their certification
            exams. They found out that there was a lack of intelligent test
            platforms that offer quality and engaging practice tests to prepare
            candidates for the exams. That’s how QwikSkills came into being.
          </Typography>
        </Box>
        {/* team  */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {/* member 1 */}
            <Grid item xs={2} sm={4} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                  borderRadius: 2,
                  height: 1,
                  pb: { xs: 0, md: 2 },
                  display: { xs: "flex", md: "inherit" },
                  gap: 2,
                }}
              >
                <Image className={styles.memberImg} src={varun} alt="" />
                <Box>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 600 }}
                      gutterBottom
                      variant="h4"
                    >
                      Varun Mahajan
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 18 },
                        fontWeight: 400,
                        color: "#808080",
                      }}
                      variant="subtitle1"
                    >
                      Co-Founder
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Link href="/" passHref>
                      <Image src={google} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={azure} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={linkedin} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={twitter} alt="" />
                    </Link>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            {/* member 2  */}
            <Grid item xs={2} sm={4} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                  borderRadius: 2,
                  height: 1,
                  pb: { xs: 0, md: 2 },
                  display: { xs: "flex", md: "inherit" },
                  gap: 2,
                }}
              >
                <Image className={styles.memberImg} src={harit} alt="" />
                <Box>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 600 }}
                      gutterBottom
                      variant="h4"
                    >
                      Harit Verma
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 18 },
                        fontWeight: 400,
                        color: "#808080",
                      }}
                      variant="subtitle1"
                    >
                      Co-Founder
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Link href="/" passHref>
                      <Image src={linkedin} alt="" />
                    </Link>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            {/* member 3  */}
            <Grid item xs={2} sm={4} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                  borderRadius: 2,
                  height: 1,
                  pb: { xs: 0, md: 2 },
                  display: { xs: "flex", md: "inherit" },
                  gap: 2,
                }}
              >
                <Image className={styles.memberImg} src={srivastava} alt="" />
                <Box>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 600 }}
                      gutterBottom
                      variant="h4"
                    >
                      Varun Srivastava
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 18 },
                        fontWeight: 400,
                        color: "#808080",
                      }}
                      variant="subtitle1"
                    >
                      Advisor
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Link href="/" passHref>
                      <Image src={google} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={azure} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={linkedin} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={twitter} alt="" />
                    </Link>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
            {/* member 4  */}
            <Grid item xs={2} sm={4} md={3}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                  borderRadius: 2,
                  height: 1,
                  pb: { xs: 0, md: 2 },
                  display: { xs: "flex", md: "inherit" },
                  gap: 2,
                }}
              >
                <Image className={styles.memberImg} src={rohit} alt="" />
                <Box>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 600 }}
                      gutterBottom
                      variant="h4"
                    >
                      Rohit Bothra
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 18 },
                        fontWeight: 400,
                        color: "#808080",
                      }}
                      variant="subtitle1"
                    >
                      Advisor
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Link href="/" passHref>
                      <Image src={google} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={azure} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={linkedin} alt="" />
                    </Link>
                    <Link href="/" passHref>
                      <Image src={twitter} alt="" />
                    </Link>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ py: 6 }}>
        <Box className={styles.helpBox}>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 36 },
              fontWeight: 700,
              textAlign: "center",
              mb: { xs: 2, md: 3 },
            }}
            variant="h3"
          >
            We&apos;ve Helped Countless Users Get Certified
          </Typography>
          <Typography variant="body1">
            With over 28 cloud certifications and more than 100+ practice tests
            available, we&apos;ve helped numerous individuals get certified in
            their areas of expertise. Whether it be Google Cloud, Microsoft
            Azure, AWS Cloud, or something else, we have the tools and
            information you need to get started.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Team;
