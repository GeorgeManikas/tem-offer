import OfferPdf from "../components/pdf/OfferPdf";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(import("../components/pdf/OfferPdf"), { ssr: false });
const extract = () => {
  return (
    <div>
      <PDFViewer />
    </div>
  );
};

export default extract;
