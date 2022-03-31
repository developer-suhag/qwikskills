import vishwa from "../../../images/testimonials/vishwa-jain.svg";
import jonny from "../../../images/testimonials/jonny-rathore.svg";
import ishika from "../../../images/testimonials/ishika-grover.svg";
import meshva from "../../../images/testimonials/meshva-singh.svg";
import ritesh from "../../../images/testimonials/ritesh-banerjee.svg";
import priya from "../../../images/testimonials/priya-manohar.svg";
import kresha from "../../../images/testimonials/kresha-mandanna.svg";
import raviya from "../../../images/testimonials/raviya-mukherjee.svg";
import monikaThumb from "../../../images/testimonials/monika-patel-video.svg";
import rivaThumb from "../../../images/testimonials/riva-arora-video.svg";
import sridarThumb from "../../../images/testimonials/sridar-krishnasamy-video.svg";
import amishaThumb from "../../../images/testimonials/amisha-tiwari-video.svg";
import crowd from "../../../images/testimonials/crowd-logo.svg";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

const testimonials = [
  {
    id: "1",
    name: "Vishwa Jain",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@vishwajain-28815517",
    logo: crowd,
    profile: vishwa,
    thumb: "",
  },
  {
    id: "2",
    name: "Sridar Krishnasamy",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@sridarkrishnasamy-28815517",
    logo: "",
    profile: "",
    thumb: sridarThumb,
  },
  {
    id: "3",
    name: "Amisha Tiwari",
    feedback:
      "Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life.",
    userId: "@amishatiwari-28815517",
    logo: "",
    profile: "",
    thumb: amishaThumb,
  },
  {
    id: "4",
    name: "Jonny Rathore",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@jonnyrathore-28815517",
    logo: crowd,
    profile: jonny,
    thumb: "",
  },
  {
    id: "5",
    name: "Ishika Grover",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    userId: "@ishikagrover-28815517",
    logo: crowd,
    profile: vishwa,
    thumb: "",
  },
  {
    id: "6",
    name: "Meshva Singh",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@vishwajain-28815517",
    logo: crowd,
    profile: meshva,
    thumb: "",
  },
  {
    id: "7",
    name: "Riva Arora",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@rivaarora-28815517",
    logo: "",
    profile: "",
    thumb: rivaThumb,
  },
  {
    id: "8",
    name: "Ritesh Banerjee",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@riteshbanerjee-28815517",
    logo: crowd,
    profile: ritesh,
    thumb: "",
  },
  {
    id: "9",
    name: "Priya Manohar",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    userId: "@priyamanohar-28815517",
    logo: crowd,
    profile: priya,
    thumb: "",
  },
  {
    id: "10",
    name: "Kresha Mandanna",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@sridarkrishnasamy-28815517",
    logo: crowd,
    profile: kresha,
    thumb: "",
  },
  {
    id: "11",
    name: "Raviya Mukherjee",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. ",
    userId: "@vishwajain-28815517",
    logo: crowd,
    profile: raviya,
    thumb: "",
  },
  {
    id: "12",
    name: "Monika Patel",
    feedback:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    userId: "@sridarkrishnasamy-28815517",
    logo: "",
    profile: "",
    thumb: monikaThumb,
  },
];

const TestimonialSection = () => {
  return (
    <div>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {testimonials.map((testimonial) => (
              <Grid item xs={2} sm={4} md={4} key={testimonials.id}>
                <Card
                  sx={{
                    boxShadow: "0px 11px 50px rgba(89, 144, 215, 0.1)",
                    borderRadius: 3,
                    p: { xs: 2, md: 3 },
                  }}
                >
                  {testimonial.logo && (
                    <Box sx={{ pl: 2 }}>
                      <Image src={testimonial.logo} alt="" />
                    </Box>
                  )}
                  {testimonial.thumb && (
                    <Image src={testimonial.thumb} alt="" />
                  )}
                  <CardContent>
                    <Typography variant="body1">
                      {testimonial.feedback}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        mt: 4,
                      }}
                    >
                      {testimonial.profile && (
                        <Image
                          width={60}
                          height={60}
                          src={testimonial.profile}
                          alt=""
                        />
                      )}
                      <Box>
                        <Typography
                          sx={{ fontSize: 16, fontWeight: 600 }}
                          gutterBottom
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 15, color: "#808080" }}
                          variant="body1"
                        >
                          {testimonial.userId}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* Pagination  */}
      <Container sx={{ py: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} sx={{ my: 4 }}>
            <Pagination color="primary" count={10} />
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default TestimonialSection;
