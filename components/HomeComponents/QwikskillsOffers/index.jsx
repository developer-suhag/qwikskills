import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Image from "next/image";
import { useState } from "react";
import detailedExplanations from "../../../images/detailed-explanations.svg";
import unlimitedAccess from "../../../images/unlimited-access.svg";
import updatedContent from "../../../images/updated-content.svg";
import homeStyles from "../../../styles/Home.module.scss";

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
            sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 700, mb: 2 }}
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
        <Box className={homeStyles.offerSection} sx={{ flexGrow: 1, py: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
              justifyContent: { xs: "center", md: "inherit" },
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 2 }}
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
              <Box>
                {/* select mode for mobile  */}
                <Box sx={{ my: 2, display: { md: "none" } }}>
                  <FormControl color="primary" fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Select Option
                    </InputLabel>
                    <NativeSelect defaultValue={30}>
                      <option value={1}>Creation timelines standard</option>
                      <option value={2}>Creation timelines standard</option>
                      <option value={3}>Creation timelines standard</option>
                      <option value={4}>Creation timelines standard</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                {/* select mode for mobile  */}
                <TabList
                  sx={{ display: { xs: "none", md: "inherit" } }}
                  textcolor="primary"
                  indicatorcolor="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
        {/* Detailed Explanations */}
        <Box
          className={homeStyles.detailedExplanationsSection}
          sx={{ flexGrow: 1, py: 2, mt: 6 }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
              justifyContent: { xs: "center", md: "inherit" },
              mb: 4,
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={detailedExplanations} alt="" />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 2 }}
                  variant="h4"
                >
                  Detailed Explanations
                </Typography>
                <Typography variant="body1">
                  All practice test comes with detailed answer explanation for
                  all questions. You get to know where you went wrong and
                  correct yourself.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {/* tabs  */}
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                {/* select mode for mobile  */}
                <Box sx={{ my: 2, display: { md: "none" } }}>
                  <FormControl color="primary" fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Select Option
                    </InputLabel>
                    <NativeSelect defaultValue={30}>
                      <option value={1}>Creation timelines standard</option>
                      <option value={2}>Creation timelines standard</option>
                      <option value={3}>Creation timelines standard</option>
                      <option value={4}>Creation timelines standard</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                {/* select mode for mobile  */}
                <TabList
                  sx={{ display: { xs: "none", md: "inherit" } }}
                  textcolor="primary"
                  indicatorcolor="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
        {/* Regularly Updated Content */}
        <Box
          className={homeStyles.updateContentSection}
          sx={{ flexGrow: 1, py: 2, mt: 6 }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
              justifyContent: { xs: "center", md: "inherit" },
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 2 }}
                  variant="h4"
                >
                  Regularly Updated Content
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={updatedContent} alt="" />
            </Grid>
          </Grid>
          {/* tabs  */}
          <Box sx={{ width: "100%", typography: "body1", my: 2 }}>
            <TabContext value={value}>
              <Box>
                {/* select mode for mobile  */}
                <Box sx={{ my: 2, display: { md: "none" } }}>
                  <FormControl color="primary" fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Select Option
                    </InputLabel>
                    <NativeSelect defaultValue={30}>
                      <option value={1}>Creation timelines standard</option>
                      <option value={2}>Creation timelines standard</option>
                      <option value={3}>Creation timelines standard</option>
                      <option value={4}>Creation timelines standard</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
                {/* select mode for mobile  */}
                <TabList
                  textColor="secondary"
                  indicatorColor="secondary"
                  sx={{ display: { xs: "none", md: "inherit" } }}
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
                          color="primary"
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
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={{
              textTransform: "inherit",
              width: { xs: "100%", md: "inherit" },
            }}
            variant="contained"
          >
            View all features
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default QwikskillsOffers;
