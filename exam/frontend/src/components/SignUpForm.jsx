// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SignupForm = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Formik
//         initialValues={{ name: "", email: "", password: "" }}
//         validationSchema={Yup.object({
//           name: Yup.string().required("Name is required"),
//           email: Yup.string().email("Invalid email").required("Email is required"),
//           password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           console.log("Form Data:", values);
//           setSubmitting(false);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className="p-6 border rounded-lg shadow-lg max-w-sm w-full">
//             <h2 className="text-xl font-bold mb-4">Signup Form</h2>

//             <div className="mb-3">
//               <label className="block">Name</label>
//               <Field type="text" name="name" className="border p-2 w-full rounded" />
//               <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div className="mb-3">
//               <label className="block">Email</label>
//               <Field type="email" name="email" className="border p-2 w-full rounded" />
//               <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//             </div>

//             <div className="mb-3">
//               <label className="block">Password</label>
//               <Field type="password" name="password" className="border p-2 w-full rounded" />
//               <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-3"
//             >
//               {isSubmitting ? "Submitting..." : "Sign Up"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignupForm;


import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {

  const initialValues ={
    name: "",
    email: "",
    password: "",
  }
  const signUpSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
  })
  // Initialize useFormik
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form Data:", values);
      setTimeout(() => {
        alert("Form submitted successfully!");
        setSubmitting(false);
      }, 2000);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="p-6 border rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 className="text-xl font-bold mb-4">Signup Form</h2>

        {/* Name Field */}
        <div className="mb-3">
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            className="border p-2 w-full rounded"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            className="border p-2 w-full rounded"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="block">Password</label>
          <input
            type="password"
            name="password"
            className="border p-2 w-full rounded"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          {formik.isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
