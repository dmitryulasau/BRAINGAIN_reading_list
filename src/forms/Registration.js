import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import MUIButton from "@mui/material/Button";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useFormik } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "One letter, seriously?")
    .required("First Name is required")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "First Name can only contain letters."
    ),
  lastName: Yup.string()
    .min(2, "One letter, seriously?")
    .required("Last Name is required")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Last Name can only contain letters."
    ),
  email: Yup.string()
    .email("Must be a valid e-mail format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Should be minimum 3 characters"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function Registration() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid>
        <Paper sx={{ p: "20px", width: 300, m: "0 auto" }}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "#ff533d" }}>
              <FaceTwoToneIcon />
            </Avatar>
            <h2>Registration</h2>
            <Typography variant="caption">
              Fill out the registration form
            </Typography>
          </Grid>

          {/* FIRST NAME */}
          <TextField
            sx={{ mb: 2, mt: 2 }}
            fullWidth
            label="First Name"
            // FORMIK
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          {/* LAST NAME */}
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Last Name"
            // FORMIK
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          {/* EMAIL */}
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Email"
            // FORMIK
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {/* PASSWORD */}
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Password"
            type="password"
            // FORMIK
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {/* CONFIRM PASSWORD */}
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Confirm password"
            type="password"
            // FORMIK
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
          />

          <MUIButton
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<HowToRegTwoToneIcon />}
            fullWidth
            sx={{ m: "14px 0" }}
          >
            REGISTER
          </MUIButton>
        </Paper>
      </Grid>
    </form>
  );
}
