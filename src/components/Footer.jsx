import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6"; // Use FaCode for LeetCode

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.linkedin.com/in/aditi-mukherjee-2a9953262/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/Aditi1989"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://leetcode.com/u/Aditi_Mukherjee/"
        target="_blank"
        rel="noopener noreferrer"
        title="LeetCode"
      >
        <FaCode size={24} />
      </a>
      <a
        href="https://www.instagram.com/_adiii_tiii_15/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;