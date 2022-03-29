import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import styles from "../../../styles/CloudLabs.module.scss";
import course from "../../../images/cloudCertifications/course.jpg";

const labs = [
  {
    id: "1",
    title: "GCP",
    description: "Explore Google cloud and learn by doing.",
    img: course,
  },
  {
    id: "2",
    title: "AWS",
    description: "Explore AWS cloud and learn by doing.",
    img: course,
  },
  {
    id: "3",
    title: "Microsoft Azure",
    description: "Explore Azure cloud and learn by doing.",
    img: course,
  },
];

const ExploreLabs = () => {
  return (
    <div className={styles.exploreLabsSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 700,
              mb: 3,
            }}
            variant="h3"
          >
            Explore <span className={styles.coloredText}>Labs</span>
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "70%" }, margin: "auto" }}
            variant="body1"
          >
            Learn cloud skills in live cloud environment to master. QwikSkills
            hands-on cloud labs are easiest way to learn cloud things right on
            live cloud console of AWS, GCP and Azure.
          </Typography>
        </Box>
        {/* labs  */}
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {labs.map((lab) => (
              <Grid key={lab.id} item xs={2} sm={4} md={4}>
                <Card
                  sx={{
                    boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
                    borderRadius: 4,
                  }}
                >
                  <Image src={lab.img} alt="" />
                  <Box sx={{ p: 2 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {lab.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lab.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        sx={{ textTransform: "capitalize" }}
                        variant="outlined"
                      >
                        Start Now
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ExploreLabs;
