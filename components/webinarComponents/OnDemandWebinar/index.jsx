import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styles from "../../../styles/Webinar.module.scss";
import businessMan from "../../../images/successful-businessman.png";
import logo from "../../../images/logo-2.svg";
import Image from "next/image";
import line from "../../../images/line.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const OnDemandWebinar = () => {
  return (
    <Box sx={{ bgcolor: "#F6FAFF" }}>
      <Container sx={{ py: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 36 },
            fontWeight: 700,
            textAlign: "center",
          }}
          variant="h3"
        >
          <span className={styles.coloredText}>On-Demand</span> Webinar
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box
                sx={{
                  boxShadow: "0px 11px 66px rgba(112, 174, 255, 0.12)",
                  borderRadius: 4,
                  pb: 4,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#2C88FF",
                    margin: "auto",
                    borderRadius: 4,
                    my: 6,
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column-reverse", md: "row" },
                    }}
                  >
                    <Box>
                      <Image src={logo} alt="" />
                      <Typography
                        sx={{
                          fontSize: { xs: 20, md: 26 },
                          fontWeight: 700,
                          my: 2,
                          color: "#fff",
                        }}
                        variant="h4"
                      >
                        Cloud Computing - A Promising Career Choice
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 600, color: "#fff", fontSize: 16 }}
                        variant="subtitle1"
                      >
                        FREE WEBINAR
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Box className={styles.businessMan}>
                        <Image src={businessMan} alt="" />
                      </Box>
                      <Box sx={{ mt: -2, display: { md: "none" } }}>
                        <Image src={line} alt="" />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: -2, display: { xs: "none", md: "inherit" } }}>
                    <Image src={line} alt="" />
                  </Box>
                  {/* time  */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: " rgba(255, 255, 255, 0.2)",
                        p: 1,
                        gap: 1,
                        height: 30,
                        borderRadius: 50,
                      }}
                    >
                      <AccessTimeIcon color="info" />
                      <Typography sx={{ color: "#fff" }} variant="body1">
                        18 December 2021 | 3:00 PM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 15, md: 20 },
                          fontWeight: 700,
                          mb: 1,
                          color: "#fff",
                        }}
                        variant="h5"
                      >
                        Venkatesh A
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          mb: 2,
                          color: "#fff",
                        }}
                        variant="h6"
                      >
                        Professional Cloud Architect
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* date  */}
                <Box sx={{ mt: 1, px: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: " rgba(255, 255, 255, 0.2)",
                        p: 1,
                        gap: 1,
                        height: 30,
                        borderRadius: 50,
                      }}
                    >
                      <CalendarMonthIcon />
                      <Typography variant="body1">Jan 8, 2022</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: " rgba(255, 255, 255, 0.2)",
                        p: 1,
                        gap: 1,
                        height: 30,
                        borderRadius: 50,
                      }}
                    >
                      <AccessTimeIcon />
                      <Typography variant="body1">45 Minutes</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button className={styles.registerBTn} variant="contained">
                      Watch the Webinar
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box
                sx={{
                  boxShadow: "0px 11px 66px rgba(112, 174, 255, 0.12)",
                  borderRadius: 4,
                  pb: 4,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#2C88FF",
                    margin: "auto",
                    borderRadius: 4,
                    my: 6,
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column-reverse", md: "row" },
                    }}
                  >
                    <Box>
                      <Image src={logo} alt="" />
                      <Typography
                        sx={{
                          fontSize: { xs: 20, md: 26 },
                          fontWeight: 700,
                          my: 2,
                          color: "#fff",
                        }}
                        variant="h4"
                      >
                        Cloud Computing - A Promising Career Choice
                      </Typography>
                      <Typography
                        sx={{ fontWeight: 600, color: "#fff", fontSize: 16 }}
                        variant="subtitle1"
                      >
                        FREE WEBINAR
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Box className={styles.businessMan}>
                        <Image src={businessMan} alt="" />
                      </Box>
                      <Box sx={{ mt: -2, display: { md: "none" } }}>
                        <Image src={line} alt="" />
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: -2, display: { xs: "none", md: "inherit" } }}>
                    <Image src={line} alt="" />
                  </Box>
                  {/* time  */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: " rgba(255, 255, 255, 0.2)",
                        p: 1,
                        gap: 1,
                        height: 30,
                        borderRadius: 50,
                      }}
                    >
                      <AccessTimeIcon color="info" />
                      <Typography sx={{ color: "#fff" }} variant="body1">
                        18 December 2021 | 3:00 PM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 15, md: 20 },
                          fontWeight: 700,
                          mb: 1,
                          color: "#fff",
                        }}
                        variant="h5"
                      >
                        Venkatesh A
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          mb: 2,
                          color: "#fff",
                        }}
                        variant="h6"
                      >
                        Professional Cloud Architect
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* date  */}
                <Box sx={{ mt: 1, px: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: " rgba(255, 255, 255, 0.2)",
                        p: 1,
                        gap: 1,
                        height: 30,
                        borderRadius: 50,
                      }}
                    >
                      <CalendarMonthIcon />
                      <Typography variant="body1">Jan 8, 2022</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: " rgba(255, 255, 255, 0.2)",
                        p: 1,
                        gap: 1,
                        height: 30,
                        borderRadius: 50,
                      }}
                    >
                      <AccessTimeIcon />
                      <Typography variant="body1">45 Minutes</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Button className={styles.registerBTn} variant="contained">
                      Watch the Webinar
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OnDemandWebinar;
