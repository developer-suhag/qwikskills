import Image from "next/image";
import course from "../../../images/cloudCertifications/course.jpg";
import { useRouter } from "next/router";
import styles from "../../../styles/Shared.module.scss";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const courses = [
  {
    id: "1",
    name: "AWS Database – Specialty",
    badge: "FEATURED",
    featured: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "2",
    name: "AWS Certified Machine Learning – Specialty",
    badge: "NEW",
    featured: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "3",
    name: "AWS Certified Data Analytics – Specialty",
    badge: "FEATURED",
    featured: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "4",
    name: "AWS Security – Specialty",
    badge: "FEATURED",
    featured: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "5",
    name: "AWS Advanced Networking – Specialty",
    badge: "NEW",
    featured: "Specialty",
    img: course,
    category: "aws",
  },
  {
    id: "6",
    name: "AWS Certified Solutions Architect – Professional",
    badge: "FEATURED",
    featured: "Professional",
    img: course,
    category: "aws",
  },
  {
    id: "7",
    name: "AWS Certified SysOps Administrator – Associate",
    badge: "FEATURED",
    featured: "Associate",
    img: course,
    category: "aws",
  },
  {
    id: "8",
    name: "AWS Certified DevOps Engineer – Professional",
    badge: "NEW",
    featured: "Professional",
    img: course,
    category: "aws",
  },
  {
    id: "9",
    name: "AWS Certified Developer – Associate",
    badge: "FEATURED",
    featured: "Associate",
    img: course,
    category: "aws",
  },
  {
    id: "10",
    name: "AWS Solutions Architect – Associate",
    badge: "FEATURED",
    featured: "Associate",
    img: course,
    category: "aws",
  },
];

const RelatedCertifications = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/certficationDetails");
  };
  return (
    <div className={styles.courses}>
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 40 },
            fontWeight: 700,
            textAlign: "center",
          }}
          variant="h3"
        >
          Related <span className={styles.coloredText}>Certifications</span>
        </Typography>
        {/* related certifications  */}
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
          >
            {courses.map((course) => (
              <Grid key={course.id} item xs={2} sm={4} md={4} lg={3}>
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
                  <CardContent sx={{ minHeight: 80 }}>
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
                      mt: "auto",
                    }}
                  >
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      variant="outlined"
                      className={styles.courseStartBtn}
                      onClick={handleClick}
                    >
                      Start Now
                    </Button>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        color: `${
                          course.category === "aws"
                            ? "#FF9900"
                            : course.category === "sf"
                            ? "#000000"
                            : "#2c88ff"
                        }`,
                      }}
                    >
                      {course.featured}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RelatedCertifications;
