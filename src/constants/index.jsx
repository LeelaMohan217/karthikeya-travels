import React from "react";
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
  { label: "Contact US", href: "/form" },
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
  { href: "/form", text: "Contact Us" },
];

export const helpfulLinks = [
  { href: "/", text: "Deals" },
  { href: "/", text: "Blog" },
  { href: "/", text: "Location" },
  { href: "/", text: "Privacy Policy" },
  { href: "/", text: "Terms and Conditions" },
];

import { ShieldCheck, Clock, Car, Wifi, MapPin, Smile } from "lucide-react";

export const rideFeatures = [
  {
    title: "Safe & Secure",
    description:
      "Travel with confidence thanks to safety protocols, background checks, and real-time trip monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "On Time Always",
    description:
      "Live traffic updates and smart routing help ensure your ride arrives right when you need it.",
    icon: Clock,
  },
  {
    title: "Comfort Guaranteed",
    description:
      "Relax in clean, modern vehicles with spacious seating, climate control, and a smooth ride.",
    icon: Car,
  },
  {
    title: "Free In-Ride Wi-Fi",
    description:
      "Stay connected on the go with complimentary high-speed Wi-Fi in every vehicle.",
    icon: Wifi,
  },
  {
    title: "Easy Pickup & Drop",
    description:
      "Get picked up and dropped off at your preferred location with GPS-accurate tracking.",
    icon: MapPin,
  },
  {
    title: "Friendly Drivers",
    description:
      "Enjoy your trip with polite, helpful, and professionally trained drivers who put your comfort first.",
    icon: Smile,
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
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quidem perspiciatis sunt nemo nostrum provident tempora odit ullam! Dolore illo repellat quidem est sed dolor ut totam nisi sunt. Harum?",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "10",
    driveType: "driver/self",
  },
  {
    id: 2,
    name: "Baleno",
    model: "Zeta 2024",
    image: sedan,
    category: "Sedan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quidem perspiciatis sunt nemo nostrum provident tempora odit ullam! Dolore illo repellat quidem est sed dolor ut totam nisi sunt. Harum?",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "10",
    driveType: "driver/self",
  },
  {
    id: 3,
    name: "Swift",
    model: "VDI Diesel",
    image: sedan,
    category: "Hatchback",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quidem perspiciatis sunt nemo nostrum provident tempora odit ullam! Dolore illo repellat quidem est sed dolor ut totam nisi sunt. Harum?",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "10",
    driveType: "driver/self",
  },
  {
    id: 4,
    name: "Kia",
    model: "Sonet GT Line",
    image: sedan,
    category: "Mini SUV",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quidem perspiciatis sunt nemo nostrum provident tempora odit ullam! Dolore illo repellat quidem est sed dolor ut totam nisi sunt. Harum?",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "10",
    driveType: "driver/self",
  },
  {
    id: 5,
    name: "Toyota Innova",
    model: "Crysta",
    image: sedan,
    category: "MUV",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quidem perspiciatis sunt nemo nostrum provident tempora odit ullam! Dolore illo repellat quidem est sed dolor ut totam nisi sunt. Harum?",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "10",
    driveType: "driver/self",
  },
  {
    id: 6,
    name: "Kia",
    model: "Sonet GTX+",
    image: sedan,
    category: "Mini SUV",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quidem perspiciatis sunt nemo nostrum provident tempora odit ullam! Dolore illo repellat quidem est sed dolor ut totam nisi sunt. Harum?",
    fuelType: "petrol",
    seatingCapacity: "5",
    mileage: "10",
    driveType: "driver/self",
  },
];

const testimonials = [
  {
    name: "John Doe",
    comment: "Amazing service and great prices!",
    photo: "/p1.jpg",
  },
  {
    name: "Jane Smith",
    comment: "The best car rental experience I've had.",
    photo: "/p2.jpg",
  },
  {
    name: "Alice Johnson",
    comment: "Fast, easy, and affordable!",
    photo: "/p3.jpg",
  },
  {
    name: "Mark Davis",
    comment: "Customer support was top-notch.",
    photo: "/p4.jpg",
  },
  {
    name: "Sara Wilson",
    comment: "Loved the clean and well-maintained cars.",
    photo: "/p5.jpg",
  },
  {
    name: "Tom Brown",
    comment: "Highly recommend for frequent travelers!",
    photo: "/p6.jpg",
  },
];
