import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Webinventix AI Guide</Text>
          <Text style={styles.subtitle}>Making AI Work for You</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.heading}>Thank you, {formData.firstName}!</Text>
          <Text style={styles.text}>
            Here's your exclusive guide to implementing AI in your business.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.heading}>What You'll Learn:</Text>
          <Text style={styles.text}>• AI Technology Trends in 2024</Text>
          <Text style={styles.text}>• Practical Business Applications</Text>
          <Text style={styles.text}>• Step-by-Step Implementation</Text>
          <Text style={styles.text}>• Real-World Case Studies</Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Prepared for: {formData.firstName} {formData.lastName}</Text>
          <Text style={styles.footerText}>Company: {formData.company || 'Not specified'}</Text>
          <Text style={styles.footerText}>Contact: {formData.email}</Text>
          <Text style={styles.footerText}>Generated on: {new Date().toLocaleDateString()}</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica'
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    paddingBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic'
  },
  section: {
    marginBottom: 20
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50'
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    lineHeight: 1.5
  },
  footer: {
    marginTop: 40,
    paddingTop: 10,
    borderTop: '1px solid #eee',
    fontSize: 10,
    color: '#888'
  },
  footerText: {
    marginBottom: 5
  }
});

export default PDFDocument;