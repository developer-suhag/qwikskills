import { Box, Container, Grid } from "@mui/material";
import styles from "../../../styles/CloudCertifications.module.scss";
import CourseSidebar from "./CourseSidebar";

const CourseSection = () => {
  return (
    <div className={styles.courseSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={3}>
              <CourseSidebar />
            </Grid>
            <Grid item xs={2} sm={4} md={9}>
              <h3>courses</h3>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CourseSection;
