import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SocialShare = () => {
  const shareUrl = window.location.href;

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#1877F2] text-white px-4 py-2  shadow-md hover:bg-[#165dc9] transition duration-300"
      >
        <FaFacebookF className="mr-2" /> Facebook
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=Check this out!`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#1DA1F2] text-white px-4 py-2  shadow-md hover:bg-[#0d8ae3] transition duration-300"
      >
        <FaTwitter className="mr-2" /> Twitter
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?url=${shareUrl}&title=Awesome Read`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#0077B5] text-white px-4 py-2  shadow-md hover:bg-[#005f8c] transition duration-300"
      >
        <FaLinkedinIn className="mr-2 "  /> LinkedIn
      </a>
    </div>
  );
};

export default SocialShare;
