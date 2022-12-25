import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import { getPost } from "../../api";
import { URL } from "url";
import { url } from "inspector";

interface Props {
  post: Post;
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>
          {post.owner.firstName} {post.owner.lastName}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#F2F2F2] relative min-h-screen w-full">
        <Header />
        <section className="flex justify-center flex-1 w-full h-56 p-5 mt-6">
          <div
            className="flex-none h-full overflow-hidden text-center bg-cover rounded-t lg:w-48 lg:rounded-t-none lg:rounded-l"
            style={{
              backgroundImage: `url(${post.image})`,
            }}
            title="Woman holding a mug"
          />
          <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
            <div className="mb-8">
              <div className="mb-2 text-xl font-bold text-gray-900">
                {post.text}
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 mr-4 rounded-full"
                src={post.owner.picture}
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">
                  {post.owner.firstName} {post.owner.lastName}
                </p>
                <p className="text-gray-600">{post.publishDate}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      post: await getPost(params?.id as string),
    },
  };
};
