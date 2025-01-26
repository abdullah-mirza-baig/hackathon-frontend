// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import Cookies from "js-cookie"; // Import js-cookie
// import { Form, Button, Spinner } from "react-bootstrap";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "bootstrap/dist/css/bootstrap.min.css";

// const RegisterForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       // Upload image to Cloudinary
//       const formData = new FormData();
//       formData.append("file", data.image[0]);
//       formData.append("upload_preset", "smit-hackathon");

//       const cloudinaryRes = await axios.post(
//         "https://api.cloudinary.com/v1_1/dgjrov7uk/image/upload",
//         formData
//       );

//       const imageUrl = cloudinaryRes.data.secure_url;

//       // Send user data to backend
//       const userData = {
//         username: data.username,
//         email: data.email,
//         password: data.password,
//         image: imageUrl,
//       };

//       const response = await axios.post(
//         "http://localhost:3000/api/v3/register",
//         userData
//       );

//       if (response.status === 201) {
//         const { token } = response.data; // Assuming token is returned in the response

//         // Save token into a cookie
//         Cookies.set("access_token", token, { expires: 7, secure: true }); // Expires in 7 days

//         alert("Registration successful!");
//         // Redirect to the dashboard
//         navigate("/");
//       }
//     } catch (error) {
//       if (error.response) {
//         alert(`Error: ${error.response.data.message || "Registration failed"}`);
//       } else {
//         alert("An unexpected error occurred. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Register</h2>
//       <Form onSubmit={handleSubmit(onSubmit)} className="shadow p-4 rounded">
//         <Form.Group controlId="formUsername" className="mb-3">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             {...register("username", { required: "Username is required" })}
//             isInvalid={!!errors.username}
//           />
//           {errors.username && (
//             <Form.Control.Feedback type="invalid">
//               {errors.username.message}
//             </Form.Control.Feedback>
//           )}
//         </Form.Group>

//         <Form.Group controlId="formEmail" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: "Invalid email address",
//               },
//             })}
//             isInvalid={!!errors.email}
//           />
//           {errors.email && (
//             <Form.Control.Feedback type="invalid">
//               {errors.email.message}
//             </Form.Control.Feedback>
//           )}
//         </Form.Group>

//         <Form.Group controlId="formPassword" className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters",
//               },
//             })}
//             isInvalid={!!errors.password}
//           />
//           {errors.password && (
//             <Form.Control.Feedback type="invalid">
//               {errors.password.message}
//             </Form.Control.Feedback>
//           )}
//         </Form.Group>

//         <Form.Group controlId="formImage" className="mb-3">
//           <Form.Label>Profile Image</Form.Label>
//           <Form.Control
//             type="file"
//             {...register("image", { required: "Image is required" })}
//             isInvalid={!!errors.image}
//           />
//           {errors.image && (
//             <Form.Control.Feedback type="invalid">
//               {errors.image.message}
//             </Form.Control.Feedback>
//           )}
//         </Form.Group>

//         <Button
//           variant="primary"
//           type="submit"
//           className="w-100"
//           disabled={loading}
//         >
//           {loading ? (
//             <>
//               <Spinner animation="border" size="sm" /> Registering...
//             </>
//           ) : (
//             "Register"
//           )}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default RegisterForm;
