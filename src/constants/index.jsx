import React from "react";
import { ShieldCheck, Clock, Car } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Laptop,
  BadgeIndianRupee,
  Shapes,
  TicketXIcon,
  Check,
  TabletSmartphoneIcon,
  TabletSmartphone,
  Youtube,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Cars", href: "/carsPage" },
  { label: "Form", href: "/form" },
];

export const platformLinks = [
  { href: "#", icon: <Facebook /> },
  { href: "#", icon: <Instagram /> },
  { href: "#", icon: <Twitter /> },
];

export const communityLinks = [
  { href: "/home", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/cars", text: "Cars" },
  { href: "/form", text: "Form" },
];

export const helpfulLinks = [
  { href: "/", text: "Deals" },
  { href: "/", text: "Blog" },
  { href: "/", text: "Location" },
  { href: "/", text: "Privacy Policy" },
  { href: "/", text: "Terms and Conditions" },
];

export const rideFeatures = [
  {
    title: "Safe & Secure",
    description:
      "Travel with confidence thanks to top safety protocols, driver background checks, and real-time tracking.",
    icon: ShieldCheck,
  },
  {
    title: "On Time Always",
    description:
      "We prioritize punctuality with live traffic updates and optimized routes to ensure timely arrivals.",
    icon: Clock,
  },
  {
    title: "Comfort Guaranteed",
    description:
      "Enjoy a smooth ride with clean, modern vehicles, comfortable seats, and climate control for a relaxing journey.",
    icon: Car,
  },
];

import sedan from "../assets/cars/sedan.jpg";
export const cars = [
  {
    id: 1,
    name: "Hyundai",
    model: "i20 Sportz",
    image: sedan,
    category: "Hatchback",
  },
  {
    id: 2,
    name: "Baleno",
    model: "Zeta 2024",
    image: sedan,
    category: "Sedan",
  },
  {
    id: 3,
    name: "Swift",
    model: "VDI Diesel",
    image: sedan,
    category: "Hatchback",
  },
  {
    id: 4,
    name: "Kia",
    model: "Sonet GT Line",
    image: sedan,
    category: "Mini SUV",
  },
  {
    id: 5,
    name: "Toyota Innova",
    model: "Crysta",
    image: sedan,
    category: "MUV",
  },
  {
    id: 6,
    name: "Kia",
    model: "Sonet GTX+",
    image: sedan,
    category: "Mini SUV",
  },
];
