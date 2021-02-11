import React, { useContext } from "react";
import SwitchContext from "../../context/SwitchContext";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const OfferPdf = () => {
  const { state } = useContext(SwitchContext);
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            {state.offerProducts.map((prod) => (
              <Text> {prod.code} </Text>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default OfferPdf;
