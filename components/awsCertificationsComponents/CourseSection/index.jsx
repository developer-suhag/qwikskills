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
import styles from "../../../styles/awsCertifications.module.scss";
import Courses from "../../shared/Courses/Courses";
import CourseSidebar from "../../shared/CourseSidebar/CourseSidebar";
import course from "../../../images/cloudCertifications/course.jpg";

const courses = [
  {
    id: "1",
    name: "AWS Database – Specialty",
    badge: "FEATURED",
    level: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "2",
    name: "AWS Certified Machine Learning – Specialty",
    badge: "NEW",
    level: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "3",
    name: "AWS Certified Data Analytics – Specialty",
    badge: "FEATURED",
    level: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "4",
    name: "AWS Security – Specialty",
    badge: "FEATURED",
    level: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "5",
    name: "AWS Advanced Networking – Specialty",
    badge: "NEW",
    level: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "6",
    name: "AWS Certified Solutions Architect – Professional",
    badge: "FEATURED",
    level: "Professional",
    img: course,
    category: "aws",
  },
  {
    id: "7",
    name: "AWS Certified SysOps Administrator – Associate",
    badge: "FEATURED",
    level: "Associate",
    img: course,
    category: "aws",
  },
  {
    id: "8",
    name: "AWS Certified DevOps Engineer – Professional",
    badge: "NEW",
    level: "Professional",
    img: course,
    category: "aws",
  },
  {
    id: "9",
    name: "AWS Certified Developer – Associate",
    badge: "FEATURED",
    level: "Associate",
    img: course,
    category: "aws",
  },
  {
    id: "10",
    name: "AWS Solutions Architect – Associate",
    badge: "FEATURED",
    level: "Associate",
    img: course,
    category: "aws",
  },
  {
    id: "11",
    name: "AWS Cloud Practitioner",
    badge: "NEW",
    level: "Foundational",
    img: course,
    category: "aws",
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
