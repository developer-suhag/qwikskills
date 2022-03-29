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
import Courses from "../../shared/Courses/Courses";
import CourseSidebar from "../../shared/CourseSidebar/CourseSidebar";
import course from "../../../images/cloudCertifications/course.jpg";

const courses = [
  {
    id: "1",
    name: "Azure AZ-220: Microsoft Azure IoT Developer",
    badge: "NEW",
    featured: "Specialty",
    img: course,
  },
  {
    id: "2",
    name: "Azure DP-203: Data Engineering on Microsoft Azure",
    badge: "FEATURED",
    featured: "Associate",
    img: course,
  },
  {
    id: "3",
    name: "Azure AZ-303: Microsoft Azure Architect Technologies",
    badge: "NEW",
    featured: "Professional",
    img: course,
  },
  {
    id: "4",
    name: "AWS Certified Machine Learning – Specialty",
    badge: "FEATURED",
    featured: "Specialty",
    img: course,
  },
  {
    id: "5",
    name: "AWS Certified Solutions Architect – Professional",
    badge: "NEW",
    featured: "Professional",
    img: course,
  },
  {
    id: "6",
    name: "AWS Certified SysOps Administrator – Associate",
    badge: "FEATURED",
    featured: "Associate",
    img: course,
  },
  {
    id: "7",
    name: "Google Cloud Professional Cloud Architect",
    badge: "NEW",
    featured: "Professional",
    img: course,
  },
  {
    id: "8",
    name: "Google Cloud Certified Associate Cloud Engineer",
    badge: "FEATURED",
    featured: "Associate",
    img: course,
  },
  {
    id: "9",
    name: "Google Cloud Certified Professional Data Engineer",
    badge: "NEW",
    featured: "Professional",
    img: course,
  },
  {
    id: "10",
    name: "SalesForce Cloud Administrator",
    badge: "NEW",
    featured: "Foundational",
    img: course,
  },
  {
    id: "11",
    name: "SalesForce Cloud Administrator",
    badge: "NEW",
    featured: "Professional",
    img: course,
  },
];

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
              <Courses courses={courses} />
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
