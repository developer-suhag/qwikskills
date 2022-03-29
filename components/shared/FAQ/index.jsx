import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../../styles/Shared.module.scss";

const FAQ = () => {
  return (
    <div style={{ backgroundColor: "#F6FAFF" }}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
            variant="body1"
          >
            FAQs about Cloud Certifications
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 22, md: 36 },
              fontWeight: 700,
              mb: 2,
              width: { xs: "100%", md: "50%" },
              margin: "auto",
            }}
            variant="h3"
          >
            Do You Have <span style={{ color: "#2c88ff" }}>Questions</span>
            About Cloud Certifications?
          </Typography>
        </Box>
        {/* faqs  */}
        <Box>
          <Accordion
            className={styles.faq}
            sx={{
              my: 2,
              boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
              borderRadius: "20px",
              p: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
              >
                Why choose a career in Cloud Computing?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }} variant="body1">
                A cloud engineer needs to work with multi-functional teams of
                software, hardware and architecture. Some cloud engineering
                skills are cloud services (compute, storage, database, Machine
                learning, migration etc.), networking, virtualization, security
                and disaster recovery, web services, DevOps and programming
                skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={styles.faq}
            sx={{
              my: 2,
              boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
              borderRadius: "20px",
              p: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
              >
                What are the prominent cloud certifications skills?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }} variant="body1">
                A cloud engineer needs to work with multi-functional teams of
                software, hardware and architecture. Some cloud engineering
                skills are cloud services (compute, storage, database, Machine
                learning, migration etc.), networking, virtualization, security
                and disaster recovery, web services, DevOps and programming
                skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={styles.faq}
            sx={{
              my: 2,
              boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
              borderRadius: "20px",
              p: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
              >
                What are the skills you need to learn to become a cloud
                engineer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }} variant="body1">
                A cloud engineer needs to work with multi-functional teams of
                software, hardware and architecture. Some cloud engineering
                skills are cloud services (compute, storage, database, Machine
                learning, migration etc.), networking, virtualization, security
                and disaster recovery, web services, DevOps and programming
                skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={styles.faq}
            sx={{
              my: 2,
              boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
              borderRadius: "20px",
              p: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
              >
                What are AWS certifications?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }} variant="body1">
                A cloud engineer needs to work with multi-functional teams of
                software, hardware and architecture. Some cloud engineering
                skills are cloud services (compute, storage, database, Machine
                learning, migration etc.), networking, virtualization, security
                and disaster recovery, web services, DevOps and programming
                skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={styles.faq}
            sx={{
              my: 2,
              boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
              borderRadius: "20px",
              p: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
              >
                Why should you get Google cloud certified?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }} variant="body1">
                A cloud engineer needs to work with multi-functional teams of
                software, hardware and architecture. Some cloud engineering
                skills are cloud services (compute, storage, database, Machine
                learning, migration etc.), networking, virtualization, security
                and disaster recovery, web services, DevOps and programming
                skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className={styles.faq}
            sx={{
              my: 2,
              boxShadow: "-15px 11px 27px rgba(35, 131, 255, 0.08)",
              borderRadius: "20px",
              p: 1,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography
                sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 600 }}
              >
                Why are MS Azure certification in high demand?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: 16 }} variant="body1">
                A cloud engineer needs to work with multi-functional teams of
                software, hardware and architecture. Some cloud engineering
                skills are cloud services (compute, storage, database, Machine
                learning, migration etc.), networking, virtualization, security
                and disaster recovery, web services, DevOps and programming
                skills.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            sx={{
              textTransform: "capitalize",
              width: { xs: "100%", md: "inherit" },
            }}
            variant="contained"
          >
            View More
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default FAQ;
