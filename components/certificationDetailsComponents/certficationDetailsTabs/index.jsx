import styles from "../../../styles/CertificationDetails.module.scss";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Paper, Tab, Typography } from "@mui/material";
import { useState } from "react";

const CertficationDetailsTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.certficationDetailsTabsSection}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            {/* select mode for mobile  */}
            <TabList
              sx={{ display: { xs: "none", md: "inherit" } }}
              textcolor="primary"
              indicatorcolor="primary"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {/* <Image src={cloud2} alt="" /> */}
              <Tab label="Description" value="1" />
              <Tab label="Recommended Experience" value="2" />
              <Tab label="FAQs" value="3" />
            </TabList>
          </Box>
          {/* tab panel 1  */}
          <TabPanel value="1">
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                AWS Cloud Practitioner is a specific digital learning path
                designed for individuals looking to get a deep understanding of
                the concepts of AWS cloud without technical details. For
                example, suppose you are new to the cloud irrespective of your
                background and seek an understanding of the fundamentals of
                cloud computing and how AWS cloud works. This is the most
                relevant certification to begin your journey.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This exam allows you to demonstrate fundamental concepts of the
                AWS Cloud irrespective of your role. The AWS Certified Cloud
                Practitioner examination is intended for the candidates who have
                the knowledge and skills necessary to effectively demonstrate an
                overall understanding of the AWS Cloud, independent of specific
                technical roles addressed by other AWS Certifications.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                The candidate should define what the AWS Cloud is and the basic
                global infrastructure, understand the basic AWS Cloud
                architectural principles, describe the AWS Cloud value
                proposition, billing, account management, pricing models, and
                the AWS platform’s fundamental security and compliance aspects.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This certification validates your foundational AWS cloud
                knowledge and skills in cloud concepts, basic AWS cloud
                infrastructure, architectural principles, critical services, and
                security and compliances.
              </Typography>
              {/* This exam assesses your ability to: */}
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, my: 3 }}
                  variant="h5"
                >
                  This exam assesses your ability to:
                </Typography>
                {/* details with dot  */}
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Define what the AWS Cloud is and the basic global
                  infrastructure
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic AWS Cloud architectural principles
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe the AWS Cloud value proposition
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe critical services on the AWS platform and their
                  everyday use cases (for example, compute and analytics)
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic security and compliance aspects of the AWS
                  platform and the shared security model
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Define the billing, account management, and pricing models
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Identify sources of documentation or technical assistance (for
                  example, whitepapers or support tickets)
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic/core characteristics of deploying and operating
                  in the AWS Cloud
                </Typography>
              </Box>
              {/* texts */}
              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  This certification addresses individuals seeking the
                  opportunity to build a successful cloud career and to get a
                  proper understanding of the AWS cloud.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  AWS Cloud Practitioner Certification is an ideal learning path
                  for non-technical individuals who want to strengthen their
                  careers by understanding the AWS cloud from a business
                  perspective.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  AWS or Amazon Web Services has been the world’s most adopted
                  and comprehensive cloud platform since 2006. AWS offers more
                  than 90 feature-rich services for networking, analytics,
                  storage, compute, database, developer, management, deployment,
                  IoT, application services, mobiles, hybrid, enterprise
                  applications, security, and Artificial Intelligence across 16
                  geographic regions. As a result, AWS is one of the most
                  trusted services by thousands of active customers globally.
                  perspective.
                </Typography>
              </Box>
              {/* texts */}
            </Box>
          </TabPanel>
          {/* tab panel 2  */}
          <TabPanel value="2">
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                AWS Cloud Practitioner is a specific digital learning path
                designed for individuals looking to get a deep understanding of
                the concepts of AWS cloud without technical details. For
                example, suppose you are new to the cloud irrespective of your
                background and seek an understanding of the fundamentals of
                cloud computing and how AWS cloud works. This is the most
                relevant certification to begin your journey.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This exam allows you to demonstrate fundamental concepts of the
                AWS Cloud irrespective of your role. The AWS Certified Cloud
                Practitioner examination is intended for the candidates who have
                the knowledge and skills necessary to effectively demonstrate an
                overall understanding of the AWS Cloud, independent of specific
                technical roles addressed by other AWS Certifications.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                The candidate should define what the AWS Cloud is and the basic
                global infrastructure, understand the basic AWS Cloud
                architectural principles, describe the AWS Cloud value
                proposition, billing, account management, pricing models, and
                the AWS platform’s fundamental security and compliance aspects.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This certification validates your foundational AWS cloud
                knowledge and skills in cloud concepts, basic AWS cloud
                infrastructure, architectural principles, critical services, and
                security and compliances.
              </Typography>
              {/* This exam assesses your ability to: */}
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, my: 3 }}
                  variant="h5"
                >
                  This exam assesses your ability to:
                </Typography>
                {/* details with dot  */}
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Define what the AWS Cloud is and the basic global
                  infrastructure
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic AWS Cloud architectural principles
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe the AWS Cloud value proposition
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe critical services on the AWS platform and their
                  everyday use cases (for example, compute and analytics)
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic security and compliance aspects of the AWS
                  platform and the shared security model
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Define the billing, account management, and pricing models
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Identify sources of documentation or technical assistance (for
                  example, whitepapers or support tickets)
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic/core characteristics of deploying and operating
                  in the AWS Cloud
                </Typography>
              </Box>
              {/* texts */}
              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  This certification addresses individuals seeking the
                  opportunity to build a successful cloud career and to get a
                  proper understanding of the AWS cloud.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  AWS Cloud Practitioner Certification is an ideal learning path
                  for non-technical individuals who want to strengthen their
                  careers by understanding the AWS cloud from a business
                  perspective.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  AWS or Amazon Web Services has been the world’s most adopted
                  and comprehensive cloud platform since 2006. AWS offers more
                  than 90 feature-rich services for networking, analytics,
                  storage, compute, database, developer, management, deployment,
                  IoT, application services, mobiles, hybrid, enterprise
                  applications, security, and Artificial Intelligence across 16
                  geographic regions. As a result, AWS is one of the most
                  trusted services by thousands of active customers globally.
                  perspective.
                </Typography>
              </Box>
              {/* texts */}
            </Box>
          </TabPanel>
          {/* tab panel 3 */}
          <TabPanel value="3">
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                AWS Cloud Practitioner is a specific digital learning path
                designed for individuals looking to get a deep understanding of
                the concepts of AWS cloud without technical details. For
                example, suppose you are new to the cloud irrespective of your
                background and seek an understanding of the fundamentals of
                cloud computing and how AWS cloud works. This is the most
                relevant certification to begin your journey.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This exam allows you to demonstrate fundamental concepts of the
                AWS Cloud irrespective of your role. The AWS Certified Cloud
                Practitioner examination is intended for the candidates who have
                the knowledge and skills necessary to effectively demonstrate an
                overall understanding of the AWS Cloud, independent of specific
                technical roles addressed by other AWS Certifications.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                The candidate should define what the AWS Cloud is and the basic
                global infrastructure, understand the basic AWS Cloud
                architectural principles, describe the AWS Cloud value
                proposition, billing, account management, pricing models, and
                the AWS platform’s fundamental security and compliance aspects.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This certification validates your foundational AWS cloud
                knowledge and skills in cloud concepts, basic AWS cloud
                infrastructure, architectural principles, critical services, and
                security and compliances.
              </Typography>
              {/* This exam assesses your ability to: */}
              <Box>
                <Typography
                  sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, my: 3 }}
                  variant="h5"
                >
                  This exam assesses your ability to:
                </Typography>
                {/* details with dot  */}
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Define what the AWS Cloud is and the basic global
                  infrastructure
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic AWS Cloud architectural principles
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe the AWS Cloud value proposition
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe critical services on the AWS platform and their
                  everyday use cases (for example, compute and analytics)
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic security and compliance aspects of the AWS
                  platform and the shared security model
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Define the billing, account management, and pricing models
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Identify sources of documentation or technical assistance (for
                  example, whitepapers or support tickets)
                </Typography>
                <Typography
                  className={styles.detailsTextWithDot}
                  variant="body1"
                >
                  Describe basic/core characteristics of deploying and operating
                  in the AWS Cloud
                </Typography>
              </Box>
              {/* texts */}
              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  This certification addresses individuals seeking the
                  opportunity to build a successful cloud career and to get a
                  proper understanding of the AWS cloud.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  AWS Cloud Practitioner Certification is an ideal learning path
                  for non-technical individuals who want to strengthen their
                  careers by understanding the AWS cloud from a business
                  perspective.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  AWS or Amazon Web Services has been the world’s most adopted
                  and comprehensive cloud platform since 2006. AWS offers more
                  than 90 feature-rich services for networking, analytics,
                  storage, compute, database, developer, management, deployment,
                  IoT, application services, mobiles, hybrid, enterprise
                  applications, security, and Artificial Intelligence across 16
                  geographic regions. As a result, AWS is one of the most
                  trusted services by thousands of active customers globally.
                  perspective.
                </Typography>
              </Box>
              {/* texts */}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default CertficationDetailsTabs;
