import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Review from "./Review";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Pattners from "@/components/Pattners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs/>
      <WhatWeDo/>
      {/* <Projects/> */}
      <Review/>
      <Team/>
      <Blog/>
      <ContactForm/>
      <Pattners/>
      <Footer/>


    
    </>
  );
}
