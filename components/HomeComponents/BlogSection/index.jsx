import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import homeStyles from "../../../styles/Home.module.scss";
import blog1 from "../../../images/blog-1.svg";
import blog2 from "../../../images/blog-2.svg";
import blog3 from "../../../images/blog-3.svg";
import blog4 from "../../../images/blog-4.svg";
import blog5 from "../../../images/blog-5.svg";
import blog6 from "../../../images/blog-6.svg";
import { ThumbDownAltOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";

const blogs = [
  {
    id: "1",
    title: "Cloud Computing Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    thumbnail: blog1,
    date: "12 Dec,2021",
  },
  {
    id: "2",
    title: "Business With Cloud",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    thumbnail: blog2,
    date: "13 Dec,2021",
  },
  {
    id: "3",
    title: "Cloud Technology Labs",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    thumbnail: blog3,
    date: "14 Dec,2021",
  },
  {
    id: "1",
    title: "Cloud Computing Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    thumbnail: blog4,
    date: "12 Dec,2021",
  },
  {
    id: "1",
    title: "Cloud Computing Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    thumbnail: blog5,
    date: "12 Dec,2021",
  },
  {
    id: "1",
    title: "Cloud Computing Services",
    description:
      "It is a long established fact that a reader will be distracted by the readable content.",
    thumbnail: blog6,
    date: "12 Dec,2021",
  },
];

const BlogSection = () => {
  return (
    <div className={homeStyles.blogSection}>
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 40 },
            textAlign: "center",
            fontWeight: 700,
          }}
          variant="h3"
        >
          Our Blogs
        </Typography>

        {/* blogs   */}
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {blogs.map((blog) => (
              <Grid item xs={2} sm={4} md={4} key={blog.id}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                  }}
                >
                  {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={blog.thumbnail}
                  /> */}
                  <Image src={blog.thumbnail} alt="" />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18, fontWeight: 700 }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {blog.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {blog.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#4D4D4D", fontSize: 15, mt: 2 }}
                    >
                      {blog.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "inherit" }}
            >
              View all blogs
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default BlogSection;
