import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getPosts } from "../api";
import Header from "../components/Header";
import Link from "next/link";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#F2F2F2] relative min-h-screen w-full">
        <Header />
        <section className="flex flex-wrap items-center justify-center flex-grow gap-8 p-5">
          {posts?.map((post) => (
            <Link key={post.id} href={`/post/${post.id}`}>
              <div className="shadow-xl cursor-pointer card w-96 bg-base-100">
                <figure>
                  <img
                    src={post.image}
                    className="object-cover w-full h-56"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.text}</h2>
                  <div className="justify-end card-actions">
                    <button className="btn">Likes {post.likes}</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      posts: await getPosts(),
    },
  };
};
