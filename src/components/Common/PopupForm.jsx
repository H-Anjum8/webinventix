import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import Logo from '../../assets/images/logo.png'
const PopupForm = ({ onPdfOpen, onPdfClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: ''
  });
console.log('formdata',formData)
  // Show popup randomly after 10-40 seconds
  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 30000) + 10000;
    const timer = setTimeout(() => setShowPopup(true), randomTime);
    return () => clearTimeout(timer);
  }, []);

  // Handle browser back button
  useEffect(() => {
    if (!showPdf) return;

    const handlePopState = () => {
      closePdf();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showPdf]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const blob = await pdf(<PDFDocument formData={formData} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      setShowPdf(true);
      setShowPopup(false);
      onPdfOpen();
      
      // Add history state
      window.history.pushState({ pdfViewer: true }, '');
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  const closePdf = () => {
    setShowPdf(false);
    URL.revokeObjectURL(pdfUrl);
    onPdfClose();
    
    // Remove history state if we're the ones who added it
    if (window.history.state?.pdfViewer) {
      window.history.back();
    }
  };

  if (showPdf) {
    return (
      <div className="fixed inset-0 bg-white z-[1000]">
        <button 
          onClick={closePdf}
          className="fixed top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-[1001]"
          aria-label="Close PDF"
        >
          ✕ Close PDF
        </button>
        <iframe 
          src={pdfUrl} 
          className="w-full h-full border-none"
          title="Webinventix AI Guide"
        />
      </div>
    );
  }

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-black/5 flex items-center justify-center z-[1000] p-4">
      <div className="bg-black border-4 border-green-700 rounded-lg p-6 max-w-md w-full relative shadow-xl">
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-white hover:text-green-700"
          aria-label="Close popup"
        >
          ✕
        </button>

        <div className=" space-y-4 mb-4 text-xl text-white">
        <div className="  flex justify-center items-center">
       <img src={Logo} alt='logo' className='w-50 md:w-40  lg:w-50' />
       </div>
          <p className="text-left mt-2">Get Your Free E-book</p>
          <p className="text-left italic">From Technology Trend to Practical Use</p>
          <p className="text-left font-medium mt-2">Making AI Work for You</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white mb-1 text-sm">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border bg-white rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-1 text-sm">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border bg-white rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
            <label className="block text-white mb-1 text-sm">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2  bg-white border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div >
            <label className="block text-white mb-1 text-sm">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;