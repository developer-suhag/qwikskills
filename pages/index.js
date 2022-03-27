import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HomeComponents/HeroSection";
import QwikskillsOffers from "../components/HomeComponents/QwikskillsOffers";
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
    </>
  );
}
