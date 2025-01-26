import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const WeddingLoan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      loanPurpose: "",
      loanAmount: "",
      loanPeriod: "",
      initialDeposit: "",
    },
  });

  const [loanDetails, setLoanDetails] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const monthlyInstallment = (
      (data.loanAmount - data.initialDeposit) / data.loanPeriod
    ).toFixed(2);
    const totalAmount = parseFloat(data.loanAmount).toFixed(2);

    setLoanDetails({
      ...data,
      monthlyInstallment,
      totalAmount,
    });

    reset();
  };

  const handleApplyForLoan = () => {
    if (loanDetails) {
      navigate("/loan-details", { state: loanDetails });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "40px auto",
        padding: "20px",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#ffffff",
      }}
    >
      <Card variant="outlined" sx={{ marginBottom: 4, padding: 2 }}>
        <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
          Wedding Loan Application
        </Typography>
      </Card>

      {!loanDetails ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <TextField
              fullWidth
              select
              label="Loan Purpose"
              variant="outlined"
              margin="normal"
              {...register("loanPurpose", {
                required: "Please select a loan purpose",
              })}
              error={!!errors.loanPurpose}
              helperText={errors.loanPurpose && errors.loanPurpose.message}
            >
              <MenuItem value="">Select Purpose</MenuItem>
              <MenuItem value="Valima">Valima</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Valima Food">Valima Food</MenuItem>
              <MenuItem value="Jahez">Jahez</MenuItem>
            </TextField>


            <TextField
              fullWidth
              label="Loan Amount"
              variant="outlined"
              type="number"
              margin="normal"
              {...register("loanAmount", {
                required: "Loan amount is required",
                min: { value: 50000, message: "Minimum loan amount is 5000" },
                max: { value: 500000, message: "Maximum loan amount is 500000" },
              })}
              error={!!errors.loanAmount}
              helperText={errors.loanAmount && errors.loanAmount.message}
            />

            <TextField
              fullWidth
              label="Loan Period (Months)"
              variant="outlined"
              type="number"
              margin="normal"
              {...register("loanPeriod", {
                required: "Loan period is required",
                min: { value: 12, message: "Minimum period is 12 months" },
              })}
              error={!!errors.loanPeriod}
              helperText={errors.loanPeriod && errors.loanPeriod.message}
            />

            <TextField
              fullWidth
              label="Initial Deposit"
              variant="outlined"
              type="number"
              margin="normal"
              {...register("initialDeposit", {
                required: "Initial deposit is required",
                min: { value: 0, message: "Initial deposit cannot be negative" },
              })}
              error={!!errors.initialDeposit}
              helperText={errors.initialDeposit && errors.initialDeposit.message}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                marginTop: 3,
                width: "100%",
                backgroundColor: "#8dc73f",
                "&:hover": { backgroundColor: "#93b765" },
              }}
            >
              Proceed
            </Button>
          </CardContent>
        </form>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Loan Purpose</TableCell>
                  <TableCell align="center">Loan Amount</TableCell>
                  <TableCell align="center">Initial Deposit</TableCell>
                  <TableCell align="center">Loan Period (Months)</TableCell>
                  <TableCell align="center">Monthly Installment</TableCell>
                  <TableCell align="center">Total Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">{loanDetails.loanPurpose}</TableCell>
                  <TableCell align="center">Rs{loanDetails.loanAmount}</TableCell>
                  <TableCell align="center">
                    Rs{loanDetails.initialDeposit}
                  </TableCell>
                  <TableCell align="center">
                    {loanDetails.loanPeriod}
                  </TableCell>
                  <TableCell align="center">
                    Rs{loanDetails.monthlyInstallment}
                  </TableCell>
                  <TableCell align="center">
                    Rs{loanDetails.totalAmount}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            variant="contained"
            color="success"
            size="large"
            fullWidth
            sx={{
              marginTop: 3,
              "&:hover": { backgroundColor: "#218838" },
            }}
            onClick={handleApplyForLoan}
          >
            Apply for Loan
          </Button>
        </>
      )}
    </Box>
  );
};

export default WeddingLoan;
