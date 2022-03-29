import RelatedCertifications from "../components/certificationDetailsComponents/RelatedCertifications";
import Header from "../components/shared/Header/Header";

const CertficationDetails = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Course Name - QwikSkils"} />
      {/* main content  */}
      <RelatedCertifications />
    </div>
  );
};

export default CertficationDetails;
