import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useFormControls } from "./validation";

const SignUp = () => {
  //Final submit function
  const formSignUp = () => {
    console.log("Form Values ", values);
  };

  const { handleInputValue, handleFormSubmit, values, errors } =
    useFormControls(formSignUp);

  return (
    <Container className="main" margin={2} component="main" maxWidth="xs">
      <div className="paper">
        <Typography fontWeight="bold" pt={2} component="h1" variant="h5">
          Create account
        </Typography>
        <Typography pb={2} fontSize={12} component="h1" variant="h5">
          Already have an account ? <Link>SignIn</Link>
        </Typography>
        <form onSubmit={handleFormSubmit} className="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                variant="outlined"
                required
                fullWidth
                label="Username"
                name="username"
                onBlur={handleInputValue}
                onChange={handleInputValue}
              />
              {errors.username && <p>{errors.username}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onBlur={handleInputValue}
                onChange={handleInputValue}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onBlur={handleInputValue}
                onChange={handleInputValue}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </Grid>

            <Grid pb={2} item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                onBlur={handleInputValue}
              />
              {errors.email && <p>{errors.email}</p>}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            disabled={errors.length > 0}
            endIcon={<ArrowForwardIcon color="white " />}
          >
            Sign Up
          </Button>

          <Grid pt={2} item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label={
                <Typography fontSize={12} component="h1" variant="h5">
                  I have read and agree to the <Link>Terms of Service</Link>
                </Typography>
              }
              fontSize={12}
            />
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
