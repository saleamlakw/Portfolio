import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import leetcode from '/src/assets/leetcode.png';
export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-8 mt-8">
      <a
        href="https://leetcode.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img src={leetcode} alt="LeetCode" className="w-6 h-6" />
      </a>

      <a
        href="https://linkedin.com/in/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 text-2xl"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 text-2xl"
      >
        <FaGithub />
      </a>

      <a
        href="mailto:your_email@gmail.com"
        className="text-white hover:text-red-400 text-2xl"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
