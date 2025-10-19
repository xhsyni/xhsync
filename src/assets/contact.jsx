import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import React from "react";

export const CONTACTS = [
  {
    id: "email",
    label: "Email",
    value: "xuanhanchin@gmail.com",
    href: "mailto:xuanhanchin@gmail.com",
    desc: "Send an email",
    icon: (
        <BiLogoGmail className="w-10 h-10" />
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: "+6010-3891107",
    href: "tel:+60103891107",
    desc: "Whatsapp or SMS",
    icon: (
        <BiPhone className="w-10 h-10" />
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/xuanhanchin/",
    href: "https://www.linkedin.com/in/xuanhanchin/",
    desc: "View profile",
    icon: (
        <BiLogoLinkedin className="w-10 h-10" />
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/xhsyni",
    href: "https://github.com/xhsyni",
    desc: "See projects",
    icon: (
        <BiLogoGithub className="w-10 h-10" />
    ),
  },
];
