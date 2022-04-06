import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styles from "../../../styles/Pricing.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import paymentMethod from "../../../images/payment-method.svg";
import Image from "next/image";

const PricingSection = () => {
  const [alignment, setAlignment] = useState("left");
  const [category, setCategory] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setCategory(event.target.value);
    console.log(event.target.value, newAlignment);
  };
  return (
    <div className={styles.pricingSection}>
      <Container sx={{ pb: 10, mt: -4 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            color="primary"
            sx={{
              borderRadius: 50,
              bgcolor: "#fff",
              boxShadow: "0px 11px 66px rgba(89, 144, 215, 0.12)",
            }}
          >
            <ToggleButton
              sx={{ borderRadius: 50, border: "none", px: 4, py: 2 }}
              value="left"
            >
              For Users
            </ToggleButton>
            <ToggleButton
              sx={{ borderRadius: 50, border: "none", px: 4, py: 2 }}
              value="right"
            >
              For Enterprise
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Container>
      {/* pricing box  */}
      <Container sx={{ py: 6 }}>
        {category === "left" ? (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 5 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
            >
              <Grid
                sx={{ display: { xs: "none", md: "inherit" } }}
                item
                xs={2}
                sm={4}
                md={2}
              ></Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Paper
                  sx={{
                    boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                    borderRadius: "20px",
                    px: 2,
                    py: 6,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 26 },
                      fontWeight: 700,
                      mb: 3,
                    }}
                    variant="h5"
                  >
                    Monthly
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      mb: 1,
                    }}
                    variant="h4"
                    color="primary"
                  >
                    $ 14.99
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 400,
                      mb: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    Per Month
                  </Typography>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    className={styles.starterBtn}
                  >
                    Starter
                  </Button>
                  <Typography
                    sx={{
                      fontSize: 16,
                      my: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    *cancel anytime
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        px: 3,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Certifications
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        px: 3,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Practice Tests
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        px: 3,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        100% money-back guarantee
                      </Typography>
                    </Box>
                  </Box>
                  {/* start btn  */}
                  <Button className={styles.startBtn} variant="contained">
                    Start Now
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Paper
                  sx={{
                    boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                    borderRadius: "20px",
                    px: 2,
                    py: 6,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 26 },
                      fontWeight: 700,
                      mb: 3,
                    }}
                    variant="h5"
                  >
                    Annual
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      mb: 1,
                    }}
                    variant="h4"
                    color="primary"
                  >
                    $ 79.99
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 400,
                      mb: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    Per Year
                  </Typography>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    className={styles.premiumBtn}
                  >
                    Save $100
                  </Button>
                  <Typography
                    sx={{
                      fontSize: 16,
                      my: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    *cancel anytime
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Certifications
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Practice Tests
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        100% money-back guarantee
                      </Typography>
                    </Box>
                  </Box>
                  {/* start btn  */}
                  <Button className={styles.startBtn} variant="contained">
                    Start Now
                  </Button>
                </Paper>
              </Grid>
              <Grid
                sx={{ display: { xs: "none", md: "inherit" } }}
                item
                xs={2}
                sm={4}
                md={2}
              ></Grid>
            </Grid>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 5 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
            >
              <Grid
                sx={{ display: { xs: "none", md: "inherit" } }}
                item
                xs={2}
                sm={4}
                md={2}
              ></Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Paper
                  sx={{
                    boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                    borderRadius: "20px",
                    px: 2,
                    py: 6,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 26 },
                      fontWeight: 700,
                      mb: 3,
                    }}
                    variant="h5"
                  >
                    Monthly
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      mb: 1,
                    }}
                    variant="h4"
                    color="primary"
                  >
                    $ 49.99
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 400,
                      mb: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    Per Month
                  </Typography>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    className={styles.starterBtn}
                  >
                    Starter
                  </Button>
                  <Typography
                    sx={{
                      fontSize: 16,
                      my: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    *cancel anytime
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        px: 3,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Certifications
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        px: 3,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Practice Tests
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        px: 3,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        100% money-back guarantee
                      </Typography>
                    </Box>
                  </Box>
                  {/* start btn  */}
                  <Button className={styles.startBtn} variant="contained">
                    Start Now
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Paper
                  sx={{
                    boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                    borderRadius: "20px",
                    px: 2,
                    py: 6,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 26 },
                      fontWeight: 700,
                      mb: 3,
                    }}
                    variant="h5"
                  >
                    Annual
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      mb: 1,
                    }}
                    variant="h4"
                    color="primary"
                  >
                    $ 179.99
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 400,
                      mb: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    Per Year
                  </Typography>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    className={styles.premiumBtn}
                  >
                    Save $100
                  </Button>
                  <Typography
                    sx={{
                      fontSize: 16,
                      my: 2,
                      color: "#808080",
                    }}
                    variant="body1"
                  >
                    *cancel anytime
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Certifications
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        Unlimited Practice Tests
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: 3,
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon color="secondary" />
                      <Typography variant="body1">
                        100% money-back guarantee
                      </Typography>
                    </Box>
                  </Box>
                  {/* start btn  */}
                  <Button className={styles.startBtn} variant="contained">
                    Start Now
                  </Button>
                </Paper>
              </Grid>
              <Grid
                sx={{ display: { xs: "none", md: "inherit" } }}
                item
                xs={2}
                sm={4}
                md={2}
              ></Grid>
            </Grid>
          </Box>
        )}
      </Container>
      {/* paymentMethod */}
      <Container sx={{ py: 4, textAlign: "center" }}>
        <Image src={paymentMethod} alt="" />
      </Container>
    </div>
  );
};

export default PricingSection;
