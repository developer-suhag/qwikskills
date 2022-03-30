import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import * as React from "react";
import logo from "../../../images/logo.svg";
import navStyles from "../../../styles/Navigation.module.scss";

// navbar
function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className={navStyles.navbar} sx={{ mt: 3, px: 2 }}>
      {/* mobile menu  */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Link className={navStyles.navLink} href="/cloudLabs">
          Cloud labs
        </Link>

        <Divider />

        <Link
          // className={navStyles.navLink}
          className={navStyles.navLink}
          href="/"
          passHref
        >
          <a>
            Platform
            <KeyboardArrowDownIcon />
            {/* drop down menu  */}
            <ul className={navStyles.dropdownMenu}>
              <li>sub-menu</li>
              <li>sub-menu</li>
              <li>sub-menu</li>
            </ul>
          </a>
        </Link>
        <Divider />

        <Link
          activeClassName="active"
          className={navStyles.navLink}
          href="#"
          passHref
        >
          <a
            className={
              router.pathname == "/cloudCertifications"
                ? `${navStyles.active}`
                : router.pathname == "/awsCertifications"
                ? `${navStyles.active}`
                : ""
            }
          >
            Certifications
            <KeyboardArrowDownIcon />
            {/* drop down menu  */}
            <ul className={navStyles.dropdownMenu}>
              <li>
                <Link activeClassName="active" href="/cloudCertifications">
                  <a
                    className={
                      router.pathname == "/cloudCertifications"
                        ? `${navStyles.active}`
                        : ""
                    }
                  >
                    Cloud Certifications
                  </a>
                </Link>
              </li>
              <li>
                <Link activeClassName="active" href="/awsCertifications">
                  <a
                    className={
                      router.pathname == "/awsCertifications"
                        ? `${navStyles.active}`
                        : ""
                    }
                  >
                    AWS Certifications
                  </a>
                </Link>
              </li>
            </ul>
          </a>
        </Link>
        <Divider />

        <Link className={navStyles.navLink} href="/" passHref>
          <a>
            Resources
            <KeyboardArrowDownIcon />
            {/* drop down menu  */}
            <ul className={navStyles.dropdownMenu}>
              <li>sub-menu</li>
              <li>sub-menu</li>
              <li>sub-menu</li>
            </ul>
          </a>
        </Link>

        <Divider />

        <Link className={navStyles.navLink} href="/webinar">
          <a
            className={
              router.pathname == "/webinar" ? `${navStyles.active}` : ""
            }
          >
            Webinars
          </a>
        </Link>

        <Divider />
        <Link className={navStyles.navLink} href="/">
          <a
            className={
              router.pathname == "/pricing" ? `${navStyles.active}` : ""
            }
          >
            Pricing
          </a>
        </Link>

        <Divider />
        <Button
          variant="text"
          sx={{
            color: "#000",
            borderRight: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <SearchIcon />
        </Button>
        <Divider />
        <Link className={navStyles.navLink} href="/">
          Sign In
        </Link>
        <Divider />
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
        >
          Get Started
        </Button>
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={navStyles.navbar} sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={navStyles.appBar}
        position="inherit"
        sx={{ bgcolor: "#FFFFFF", boxShadow: 0 }}
      >
        <Toolbar>
          {/* desktop menu  */}
          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Link href="/" passHref>
                  <a>
                    <Image className="logo" src={logo} alt="" />
                  </a>
                </Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <nav
                  className="navbar"
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  <Link className={navStyles.navLink} href="/cloudLabs">
                    <a
                      className={
                        router.pathname == "/cloudLabs"
                          ? `${navStyles.active}`
                          : ""
                      }
                    >
                      Cloud labs
                    </a>
                  </Link>

                  <Link
                    // className={navStyles.navLink}
                    className={navStyles.navLink}
                    href="/"
                    passHref
                  >
                    <a>
                      Platform
                      <KeyboardArrowDownIcon />
                      {/* drop down menu  */}
                      <ul className={navStyles.dropdownMenu}>
                        <li>sub-menu</li>
                        <li>sub-menu</li>
                        <li>sub-menu</li>
                      </ul>
                    </a>
                  </Link>

                  <Link
                    activeClassName="active"
                    className={navStyles.navLink}
                    href="#"
                    passHref
                  >
                    <a
                      className={
                        router.pathname == "/cloudCertifications"
                          ? `${navStyles.active}`
                          : router.pathname == "/awsCertifications"
                          ? `${navStyles.active}`
                          : ""
                      }
                    >
                      Certifications
                      <KeyboardArrowDownIcon />
                      {/* drop down menu  */}
                      <ul className={navStyles.dropdownMenu}>
                        <li>
                          <Link
                            activeClassName="active"
                            href="/cloudCertifications"
                          >
                            <a
                              className={
                                router.pathname == "/cloudCertifications"
                                  ? `${navStyles.active}`
                                  : ""
                              }
                            >
                              Cloud Certifications
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeClassName="active"
                            href="/awsCertifications"
                          >
                            <a
                              className={
                                router.pathname == "/awsCertifications"
                                  ? `${navStyles.active}`
                                  : ""
                              }
                            >
                              AWS Certifications
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </a>
                  </Link>

                  <Link className={navStyles.navLink} href="/" passHref>
                    <a>
                      Resources
                      <KeyboardArrowDownIcon />
                      {/* drop down menu  */}
                      <ul className={navStyles.dropdownMenu}>
                        <li>sub-menu</li>
                        <li>sub-menu</li>
                        <li>sub-menu</li>
                      </ul>
                    </a>
                  </Link>

                  <Link className={navStyles.navLink} href="/webinar">
                    <a
                      className={
                        router.pathname == "/webinar"
                          ? `${navStyles.active}`
                          : ""
                      }
                    >
                      Webinars
                    </a>
                  </Link>
                  <Link className={navStyles.navLink} href="/pricing">
                    <a
                      className={
                        router.pathname == "/pricing"
                          ? `${navStyles.active}`
                          : ""
                      }
                    >
                      Pricing
                    </a>
                  </Link>
                  <Button
                    variant="text"
                    sx={{
                      color: "#000",
                      borderRight: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    <SearchIcon />
                  </Button>
                  <Link className={navStyles.navLink} href="/">
                    Sign In
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "capitalize" }}
                  >
                    Get Started
                  </Button>
                </nav>
              </Box>
            </Box>
          </Container>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            // color="info"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Button
              variant="text"
              sx={{
                color: "#000",
                borderRight: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <SearchIcon />
            </Button>
            <Link className={navStyles.navLink} href="/">
              Sign In
            </Link>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
