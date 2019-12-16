import React from "react";
import { FaFacebookF, FaTripadvisor, FaRegEnvelope } from "react-icons/fa";

export const social = [
  {
    name: "Email",
    path: "mailto:consult@omroom.net",
    icon: <FaRegEnvelope />,
    label: "Email us here"
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/omroombangkok/",
    icon: <FaFacebookF />,
    label: "Visit our Facebook page here"
  },
  {
    name: "TripAdvisor",
    path:
      "https://www.tripadvisor.com/Attraction_Review-g293916-d4178743-Reviews-Omroom-Bangkok.html",
    icon: <FaTripadvisor />,
    label: "Visit our TripAdvisor page here"
  }
];
