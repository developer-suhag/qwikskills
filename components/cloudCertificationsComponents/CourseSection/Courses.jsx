import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import course from "../../../images/cloudCertifications/course.jpg";
import styles from "../../../styles/CloudCertifications.module.scss";

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

const Courses = () => {
  return (
    <div className={styles.courses}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {courses.map((course) => (
            <Grid key={course.id} item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: 1,
                  boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                  borderRadius: 3,
                }}
              >
                <Box className={styles.courseImage}>
                  <Image width={300} height={150} src={course.img} alt="" />
                  <span className={styles.badge}>{course.badge}</span>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    sx={{ fontSize: 16, fontWeight: 600 }}
                  >
                    {course.name}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                    pb: 2,
                  }}
                >
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    variant="outlined"
                    className={styles.courseStartBtn}
                  >
                    Start Now
                  </Button>
                  <Button
                    sx={{ textTransform: "capitalize", color: "#00ADEF" }}
                  >
                    {course.featured}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Courses;
