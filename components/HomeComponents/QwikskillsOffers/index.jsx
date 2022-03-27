import { Box, Container, Grid, Tabs, Typography } from "@mui/material";
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
                    label="Item One"
                    value="1"
                    sx={{ mr: 5, px: 6 }}
                  />
                  <Tab
                    className={homeStyles.tabItem}
                    label="Item Two"
                    value="2"
                    sx={{ mr: 5, px: 6 }}
                  />
                  <Tab
                    className={homeStyles.tabItem}
                    label="Item Three"
                    value="3"
                    sx={{ mr: 5, px: 6 }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default QwikskillsOffers;
