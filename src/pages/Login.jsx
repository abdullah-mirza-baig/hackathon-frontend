// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie"; // Import js-cookie

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const [loginError, setLoginError] = useState(""); // For displaying server errors

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const loginUserFromBackend = async (data) => {
//     setLoading(true);
//     setLoginError(""); // Reset previous error

//     try {
//       // Send user data to backend
//       const userData = {
//         email: data.email,
//         password: data.password,
//       };

//       const response = await axios.post(
//         "http://localhost:3000/api/v3/login", // Update this URL based on your production URL
//         userData
//       );

//       console.log(response.data);

//       // Assuming the access token is in response.data.token
//       if (response.data.accessToken) {
//         // Save the token in a cookie with a 1-day expiration time
//         Cookies.set("accessToken", response.data.accessToken, { expires: 1 });

//         // Optionally, you can set other cookie options, like path or secure.
//       }

//       navigate("/"); // Navigate after successful login
//     } catch (error) {
//       console.error(error.response?.data?.message || "Login failed");
//       setLoginError(error.response?.data?.message || "Login failed"); // Display error message
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-4">
//           <div className="card shadow-lg border-0 rounded">
//             <div className="card-body mt-3">
//               <h3 className="card-title text-center mb-4">Login Your Account</h3>
//               {loginError && <div className="alert alert-danger">{loginError}</div>} {/* Display error */}
//               <form onSubmit={handleSubmit(loginUserFromBackend)}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">Email address</label>
//                   <input
//                     type="email"
//                     className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                     placeholder="Enter your email"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                         message: "Invalid email format",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <div className="invalid-feedback">{errors.email.message}</div>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     className={`form-control ${errors.password ? "is-invalid" : ""}`}
//                     placeholder="Enter your password"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "Password should be at least 6 characters long",
//                       },
//                     })}
//                   />
//                   {errors.password && (
//                     <div className="invalid-feedback">{errors.password.message}</div>
//                   )}
//                 </div>

//                 <div className="d-grid">
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     disabled={loading}
//                   >
//                     {loading ? "Logging in..." : "Login"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

