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
import { useRouter } from "next/router";
import styles from "../../../styles/Shared.module.scss";

const Courses = (props) => {
  const { courses } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push("/certficationDetails");
  };
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
    </div>
  );
};

export default Courses;
