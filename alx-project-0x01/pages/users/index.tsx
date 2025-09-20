import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [allUsers, setAllUsers] = useState(posts);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setAllUsers([{ ...newUser, id: allUsers.length + 1 }, ...allUsers]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-green-700 px-4 py-2 rounded-full text-white"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {allUsers?.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        {showModal && (
          <UserModal
            onClose={() => setShowModal(false)}
            onSubmit={handleAddUser}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
