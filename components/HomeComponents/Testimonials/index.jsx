import { Container, Paper, Typography } from "@mui/material";
import homeStyles from "../../../styles/Home.module.scss";
import person1 from "../../../images/person-1.svg";
import person2 from "../../../images/person-2.svg";
import person3 from "../../../images/person-3.svg";
import Image from "next/image";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Box, height } from "@mui/system";
// install Swiper modules
SwiperCore.use([Navigation]);

const clients = [
  {
    id: "1",
    name: "Sridar Krishnasamy",
    email: "@sridar-krishnasamy-28815517",
    review:
      "QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.",
    img: person1,
  },
  {
    id: "2",
    name: "Sridar Krishnasamy",
    email: "@sridar-krishnasamy-28815517",
    review:
      "QwikSkills is one of the best platform to practice with your Cloud Certification preparation. I can say the team is excellent and have put a lot of efforts to make it best 🙂 ",
    img: person2,
  },
  {
    id: "3",
    name: "Sridar Krishnasamy",
    email: "@sridar-krishnasamy-28815517",
    review:
      "QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.",
    img: person3,
  },
];

const Testimonials = () => {
  return (
    <div className={homeStyles.testimonialsSection}>
      <Container sx={{ py: 6 }}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: 28, md: 36 },
            fontWeight: 700,
            textAlign: "center",
          }}
          variant="h3"
        >
          Clients <span className={homeStyles.coloredText}>Testimonial</span>
        </Typography>
        {/* testimonials slider  */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Swiper
            style={{ paddingBottom: 40, paddingLeft: 50, paddingRight: 50 }}
            navigation={true}
            grabCursor={true}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <Paper
                  sx={{
                    bgcolor: "rgba(159, 186, 255, 0.25)",
                    color: "#fff",
                    px: { xs: 1, md: 2 },
                    py: { xs: 1, md: 3 },
                    height: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1, md: 4 },
                      mb: 3,
                    }}
                  >
                    <Image src={client.img} alt="" />
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, color: "#fff" }}
                        variant="h5"
                      >
                        {client.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 15, color: "#B9B9BA" }}
                        variant="h6"
                      >
                        {client.email}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1">{client.review}</Typography>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default Testimonials;
