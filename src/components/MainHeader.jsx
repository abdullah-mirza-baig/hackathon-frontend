import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const [anchorEl, setAnchorEl] = useState({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Modal state

  const handleMenuOpen = (event, category) => {
    setAnchorEl((prev) => ({ ...prev, [category]: event.currentTarget }));
  };

  const handleMenuClose = (category) => {
    setAnchorEl((prev) => ({ ...prev, [category]: null }));
  };

  const handleLoginModalOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const categories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
    },
    {
      name: "Business Startup Loans",
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
    },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
        {/* Top Section */}
        <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#eeeeee", color: "#a4a3a3" }}>
          <Typography variant="body2">📞 833-786-0999 | 📧 info@SaylaniWelfareUSA.com</Typography>
          <Typography variant="body2">Open Monday to Saturday - 9AM to 6PM</Typography>
        </Toolbar>

        {/* Main Header */}
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left - Logo */}
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
          >
            Micro Finance
          </Typography>

          {/* Center - Categories */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {categories.map((category) => (
              <div key={category.name}>
                <Button
                  aria-controls={`${category.name}-menu`}
                  aria-haspopup="true"
                  onClick={(e) => handleMenuOpen(e, category.name)}
                  sx={{ fontSize: "1rem", fontWeight: "bold", textTransform: "capitalize", color: "black" }}
                >
                  {category.name}
                </Button>
                <Menu
                  id={`${category.name}-menu`}
                  anchorEl={anchorEl[category.name]}
                  open={Boolean(anchorEl[category.name])}
                  onClose={() => handleMenuClose(category.name)}
                >
                  {category.subcategories.map((sub) => (
                    <MenuItem key={sub} onClick={() => handleMenuClose(category.name)}>{sub}</MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </Box>

          {/* Right - Login Button */}
          <Button
            variant="contained"
            sx={{ backgroundColor: "#8dc73f", color: "white", '&:hover': { backgroundColor: "#93b765" } }}
            onClick={handleLoginModalOpen} // Open modal on click
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Login Modal */}
      <Dialog open={isLoginModalOpen} onClose={handleLoginModalClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginModalClose}>Cancel</Button>
          <Button variant="contained" onClick={handleLoginModalClose}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MainHeader;
