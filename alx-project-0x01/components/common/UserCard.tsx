import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="mt-2 text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">{phone}</p>
      <p className="text-sm text-blue-600 underline">{website}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-sm text-gray-500 italic">{company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4 text-xs text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
