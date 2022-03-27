import Head from "next/head";
import Image from "next/image";
import BlogSection from "../components/HomeComponents/BlogSection";
import Connected from "../components/HomeComponents/Connected";
import HeroSection from "../components/HomeComponents/HeroSection";
import QwikskillsOffers from "../components/HomeComponents/QwikskillsOffers";
import Strategy from "../components/HomeComponents/Strategy";
import Testimonials from "../components/HomeComponents/Testimonials";
import Header from "../components/shared/Header/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      {/* title  */}
      <Header />
      {/* main content  */}
      <HeroSection />
      {/* Offers, Detailed Explanations and updated content section  */}
      <QwikskillsOffers />
      {/* testimonials  */}
      <Testimonials />
      {/* Strategy */}
      <Strategy />
      {/* blog  */}
      <BlogSection />
      {/* people connected  */}
      <Connected />
    </>
  );
}
