import React, { useState } from "react";
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const LoanCalculator = () => {
  const [loanCategory, setLoanCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [emi, setEmi] = useState(null);
  const [loanPeriod, setLoanPeriod] = useState(36); // Default 3 years for Wedding Loans

  const loanData = {
    "Wedding Loans": [
      { value: "Valima", label: "Valima" },
      { value: "Furniture", label: "Furniture" },
      { value: "Valima Food", label: "Valima Food" },
      { value: "Jahez", label: "Jahez" }
    ],
    "Home Construction Loans": [
      { value: "Structure", label: "Structure" },
      { value: "Finishing", label: "Finishing" },
      { value: "Loan", label: "Loan" }
    ],
    "Business Startup Loans": [
      { value: "Buy Stall", label: "Buy Stall" },
      { value: "Advance Rent for Shop", label: "Advance Rent for Shop" },
      { value: "Shop Assets", label: "Shop Assets" },
      { value: "Shop Machinery", label: "Shop Machinery" }
    ],
    "Education Loans": [
      { value: "University Fees", label: "University Fees" },
      { value: "Child Fees Loan", label: "Child Fees Loan" }
    ]
  };

  const handleLoanCategoryChange = (event) => {
    setLoanCategory(event.target.value);
    setSubCategory(""); // Reset subcategory when loan category changes
    setLoanAmount(""); // Reset loan amount
    setEmi(null); // Reset EMI
    // Set loan period based on loan category
    if (event.target.value === "Wedding Loans") {
      setLoanPeriod(36); // 3 years for Wedding Loans
    } else if (event.target.value === "Home Construction Loans" || event.target.value === "Business Startup Loans") {
      setLoanPeriod(60); // 5 years for these loan types
    } else if (event.target.value === "Education Loans") {
      setLoanPeriod(48); // 4 years for Education Loans
    }
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
    setEmi(null); // Reset EMI if loan amount changes
  };

  const handleCalculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = 12; // Assume a flat annual interest rate (can be adjusted)
    const monthlyRate = annualRate / 12 / 100; // Convert annual rate to monthly rate
    const months = loanPeriod; // Loan period in months
    
    if (principal && principal > 0 && months && months > 0) {
      const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      setEmi(emiValue.toFixed(2)); // Calculate EMI and set the value
    } else {
      alert("Please enter valid loan amount and period");
    }
  };

  return (
    <Box sx={{ maxWidth: "500px", margin: "0 auto", padding: "20px", backgroundColor: "#f9fafb", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
        Loan Calculator
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel>Loan Category</InputLabel>
        <Select value={loanCategory} onChange={handleLoanCategoryChange} label="Loan Category">
          <MenuItem value="Wedding Loans">Wedding Loans</MenuItem>
          <MenuItem value="Home Construction Loans">Home Construction Loans</MenuItem>
          <MenuItem value="Business Startup Loans">Business Startup Loans</MenuItem>
          <MenuItem value="Education Loans">Education Loans</MenuItem>
        </Select>
      </FormControl>

      {/* Subcategory dropdown only enabled when a valid loan category is selected */}
      <FormControl fullWidth sx={{ marginBottom: "20px" }} disabled={!loanCategory}>
        <InputLabel>Subcategory</InputLabel>
        <Select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          label="Subcategory"
        >
          {loanCategory &&
            loanData[loanCategory].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <TextField
        label="Loan Amount (PKR)"
        value={loanAmount}
        onChange={handleLoanAmountChange}
        fullWidth
        sx={{ marginBottom: "20px" }}
        type="number"
        InputProps={{
          inputProps: { min: 1, step: 1 },
        }}
      />

      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Loan Period: {loanPeriod} months
      </Typography>

      <Button
  variant="contained"
  color="primary"
  onClick={handleCalculateEMI}
  sx={{
    marginBottom: "20px",
    backgroundColor: "#8dc73f",
    '&:hover': {
      backgroundColor: "#93b765", // Slightly darker shade on hover
    },
  }}
>
  Calculate EMI
</Button>

      {emi && (
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Monthly EMI: PKR {emi}
        </Typography>
      )}
    </Box>
  );
};

export default LoanCalculator;
