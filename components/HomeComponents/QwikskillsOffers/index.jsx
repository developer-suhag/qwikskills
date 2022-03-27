import { Box, Container, Grid, Paper, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import homeStyles from "../../../styles/Home.module.scss";
import unlimitedAccess from "../../../images/unlimited-access.svg";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import cloud2 from "../../../images/cloud-2.svg";

const QwikskillsOffers = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={homeStyles.QwikskillsOffersSection}>
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 40, fontWeight: 700, mb: 2 }}
            variant="h3"
          >
            What <span className={homeStyles.coloredText}>Qwikskills</span>{" "}
            Offers
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
            variant="body1"
          >
            Get the freedom to experiment, launch, and scale strategies as fast
            as you can think of them.{" "}
          </Typography>
        </Box>
        {/* offers  */}
        <Box sx={{ flexGrow: 1, py: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 36, fontWeight: 700, mb: 2 }}
                  variant="h4"
                >
                  Unlimited Access
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={unlimitedAccess} alt="" />
            </Grid>
          </Grid>
          {/* tabs  */}
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  {/* <Image src={cloud2} alt="" /> */}
                  <Tab
                    className={homeStyles.tabItem}
                    label="Creation timelines standard"
                    value="1"
                    sx={{ px: 5 }}
                  />
                  <Tab
                    className={homeStyles.tabItem}
                    label="Creation timelines standard"
                    value="2"
                    sx={{ px: 5 }}
                  />
                  <Tab
                    className={homeStyles.tabItem}
                    label="Creation timelines standard"
                    value="3"
                    sx={{ px: 5 }}
                  />
                  <Tab
                    className={homeStyles.tabItem}
                    label="Creation timelines standard"
                    value="4"
                    sx={{ px: 5 }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Paper
                  sx={{
                    bgcolor: "#fff",
                    boxShadow: "0px 11px 66px rgba(112, 174, 255, 0.12)",
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: 700 }}
                      variant="h4"
                    >
                      Lorem ipsum is placeholder
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: " repeat(2,1fr)",
                        },
                        gap: 6,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </TabPanel>
              <TabPanel value="2">
                <Paper
                  sx={{
                    bgcolor: "#fff",
                    boxShadow: "0px 11px 66px rgba(112, 174, 255, 0.12)",
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: 700 }}
                      variant="h4"
                    >
                      Lorem ipsum is placeholder - 2
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: " repeat(2,1fr)",
                        },
                        gap: 6,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </TabPanel>
              <TabPanel value="3">
                <Paper
                  sx={{
                    bgcolor: "#fff",
                    boxShadow: "0px 11px 66px rgba(112, 174, 255, 0.12)",
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: 700 }}
                      variant="h4"
                    >
                      Lorem ipsum is placeholder - 3
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: " repeat(2,1fr)",
                        },
                        gap: 6,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </TabPanel>
              <TabPanel value="4">
                <Paper
                  sx={{
                    bgcolor: "#fff",
                    boxShadow: "0px 11px 66px rgba(112, 174, 255, 0.12)",
                    p: 3,
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: 26, fontWeight: 700 }}
                      variant="h4"
                    >
                      Lorem ipsum is placeholder - 4
                    </Typography>
                    <Box
                      sx={{
                        mt: 3,
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          md: " repeat(2,1fr)",
                        },
                        gap: 6,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: 22, fontWeight: 600, mb: 2 }}
                          variant="h5"
                          color="secondary"
                        >
                          Excepteur sint
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum was purposefully designed to have no
                          meaning, but appear like real text, making it the
                          perfect placeholder.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default QwikskillsOffers;
