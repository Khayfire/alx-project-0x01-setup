import { useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  // ✅ required state
  const [post, setPost] = useState<PostData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    console.log("New Post Submitted:", newPost);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setModalOpen(true)}
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              id={id}
              key={key}
            />
          ))}
        </div>

        {/* ✅ modal rendering */}
        {isModalOpen && (
          <PostModal
            onClose={() => setModalOpen(false)}
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
      posts,
    },
  };
}

export default Posts;
