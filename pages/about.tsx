import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
const pathPdf = "/resume.pdf";

const About: NextPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#F2F2F2] relative min-h-screen w-full">
        <Header />
        <section className="flex flex-wrap items-center justify-center flex-grow gap-8 p-8">
          <div className="space-y-3 card w-96 bg-neutral text-neutral-content">
            <div className="items-center text-center card-body">
              <h2 className="!font-bold card-title">I am Yamin</h2>
              <p className="font-semibold">
                I have 3+ years of experience as a full stack developer. As a
                developer, I know how to deliver all features for production and
                development. I am always trying to learn more technologies to
                build mobile first, responsive, SEO-friendly modern websites and
                improve my development skills. I am experienced in NextJS
                (ReactJS) and React Native. At build time, I focus on quality
                coding,
              </p>
              <div className="justify-end card-actions">
                <a
                  href="https://drive.google.com/file/d/1Fb4qUKAvKyI6hmeWRBZ1jXZwp-wpNfA0/view?usp=sharing"
                  target={"_blank"}
                  className="btn btn-primary"
                >
                  resume
                </a>
                <a
                  href="https://full-stack-portfolio-web.vercel.app"
                  target={"_blank"}
                  className="btn btn-ghost"
                >
                  portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
