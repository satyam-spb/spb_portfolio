// src/components/Contact.tsx
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { CONTACT_INFO } from "../constants";

type Social = {
  href: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
};

const SOCIALS: Social[] = [
  { href: `mailto:${CONTACT_INFO.email}`, Icon: FaEnvelope, label: "Email" },
  { href: `tel:${CONTACT_INFO.phone}`, Icon: FaPhone, label: "Phone" },
  { href: CONTACT_INFO.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
  { href: CONTACT_INFO.github, Icon: FaGithub, label: "GitHub" },
  { href: CONTACT_INFO.leetcode, Icon: SiLeetcode, label: "LeetCode" },
  { href: CONTACT_INFO.x, Icon: FaSquareXTwitter, label: "X" },
];

const SocialLink: React.FC<Social> = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
    aria-label={label}
  >
    <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all shadow-sm group-hover:shadow-md">
      <Icon size={24} />
    </div>
    <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
      {label}
    </span>
  </a>
);

export const Contact: React.FC = () => {
  return (
    <>
      <footer
        id="contact"
        className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-24 pb-12"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Ready to ship?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-16 text-lg max-w-xl mx-auto">
            Currently available for opportunities
          </p>

          <div className="flex justify-center mb-24">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-16">
              {SOCIALS.map((social) => (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  Icon={social.Icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-zinc-100 dark:border-zinc-900 pt-10">
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              © {new Date().getFullYear()} Satyam Pratik Bharti.
            </p>
            <p className="text-xs text-zinc-300 dark:text-zinc-700 mt-2 font-mono">
              Built with care
            </p>
          </div>
        </div>
      </footer>
      {/* Spacer to allow scroll detection */}
      <div className="h-32"></div>
    </>
  );
};
