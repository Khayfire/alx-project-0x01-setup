import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps, PostData } from "@/interfaces";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";

interface PostsPageProps {
  posts: PostProps[]; // 👈 array wrapped in an object
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [allPosts, setAllPosts] = useState(posts);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    setAllPosts([{ ...newPost, id: allPosts.length + 1 }, ...allPosts]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setShowModal(true)}
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {allPosts?.map(({ title, body, userId, id }: PostProps) => (
            <PostCard
              key={id}
              title={title}
              body={body}
              userId={userId}
              id={id}
            />
          ))}
        </div>

        {showModal && (
          <PostModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts, // 👈 matches PostsPageProps
    },
  };
}

export default Posts;
