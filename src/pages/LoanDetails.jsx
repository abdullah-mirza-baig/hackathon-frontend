import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { Box, Typography, Table, TableBody, TableRow, TableCell, Button as MUIButton } from "@mui/material";

// React Modal Styles
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const LoanDetails = () => {
  const location = useLocation();
  const loanDetails = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userDetails) => {
    const payload = { loanDetails, userDetails };

    try {
      const response = await fetch("http://localhost:5000/api/submit-loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Data saved successfully!");
        alert("Data submitted successfully!");
      } else {
        console.error("Failed to save data:", response.statusText);
        alert("Failed to submit data. Please try again.");
      }
    } catch (err) {
      console.error("Error occurred:", err);
      alert("An error occurred. Please try again.");
    }

    setIsModalOpen(false); // Close the modal after submission
  };

  if (!loanDetails) {
    return (
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ marginTop: "50px", color: "gray" }}
      >
        No Loan Details Found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        backgroundColor: "#f9fafb",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#3f51b5",
          borderBottom: "2px solid #3f51b5",
          display: "inline-block",
          paddingBottom: "10px",
        }}
      >
        Loan Details
      </Typography>
      <Table
        aria-label="loan-details-table"
        sx={{
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TableBody>
          {Object.entries(loanDetails).map(([key, value], index) => (
            <TableRow
              key={index}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" },
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  textTransform: "capitalize",
                }}
              >
                {key.replace(/([A-Z])/g, " $1")}:
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MUIButton
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        sx={{
          marginTop: "20px",
          backgroundColor: "#3f51b5",
          "&:hover": { backgroundColor: "#2c387e" },
        }}
      >
        Get User Details
      </MUIButton>

      {/* React Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
        ariaHideApp={false} // Disable for this example, but it's recommended to set appElement
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#3f51b5",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          User Details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
            {errors.email && (
              <Typography color="error" fontSize="small">
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
            {errors.username && (
              <Typography color="error" fontSize="small">
                {errors.username.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>CNIC Number</label>
            <input
              type="text"
              {...register("cnic", {
                required: "CNIC is required",
                pattern: {
                  value: /^[0-9]{13}$/,
                  message: "CNIC must be a 13-digit number",
                },
              })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
            {errors.cnic && (
              <Typography color="error" fontSize="small">
                {errors.cnic.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <MUIButton
              variant="contained"
              onClick={() => setIsModalOpen(false)}
              sx={{
                backgroundColor: "#f44336",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
            >
              Cancel
            </MUIButton>
            <MUIButton
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#4caf50",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              Submit
            </MUIButton>
          </Box>
        </form>
      </Modal>
    </Box>
  );
};

export default LoanDetails;