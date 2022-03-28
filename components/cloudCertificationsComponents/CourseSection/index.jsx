import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import styles from "../../../styles/CloudCertifications.module.scss";
import Courses from "./Courses";
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
            {/* courses  */}
            <Grid item xs={2} sm={4} md={9}>
              <Courses />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack spacing={2} sx={{ my: 4 }}>
                  <Pagination color="primary" count={10} />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CourseSection;
