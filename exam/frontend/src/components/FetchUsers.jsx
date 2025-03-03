// "use client";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchUsers = async () => {
//   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return data;
// };

// const FetchUsers = () => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default FetchUsers;
"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Fetch Users
const fetchUsers = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

// Add User
const addUser = async (user) => {
  const { data } = await axios.post("https://jsonplaceholder.typicode.com/users", user);
  return data;
};

const FetchUsers = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");

  // Fetch Users
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Add User Mutation
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: (newUser) => {
      // Update the cache
      queryClient.setQueryData(["users"], (oldUsers) => [...oldUsers, newUser]);
      setName(""); // Clear input after adding
    },
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
  });

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      mutation.mutate(values);
      resetForm();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {data.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            {user.name}
          </li>
        ))}
      </ul>

      {/* Add User Form */}
      <div className="mt-4">
        <form onSubmit={formik.handleSubmit} className="flex gap-2">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="border p-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default FetchUsers;
