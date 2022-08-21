import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useCreateUser from "../hooks/useCreateUser";
import useDeleteUser from "../hooks/useDeleteUser";
import useEditUser from "../hooks/useEditUser";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import Typography from "@mui/material/Typography";

import MUIButton from "@mui/material/Button";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";

import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
const FormSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "First Name can only contain letters."
    )
    .min(2, "One letter, seriously?"),
  last_name: Yup.string()
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
  confirm_pass: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function ProfileForm({ user }) {
  const [createUser, setCreateUser] = useState({});
  const [editUser, setEditUser] = useState({});
  const [deleteUser, setDeleteUser] = useState({});

  useCreateUser(createUser);
  useEditUser(editUser);
  useDeleteUser(deleteUser);

  const initialValues = {
    first_name: user?.first_name ? user?.first_name : "",
    last_name: user?.last_name ? user?.last_name : "",
    email: user?.email ?? "",
    password: "",
    confirm_pass: "",
  };

  const handleSubmit = (values, resetForm) => {
    if (user?.token) {
      setEditUser(values);
    } else {
      setCreateUser(values);
    }
    resetForm(initialValues);
  };

  const handleDelete = () => {
    setDeleteUser({ key: "value" });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid>
        <Paper elevation={5} sx={{ p: "20px", width: 300, m: "0 auto" }}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "#ff533d" }}>
              <FaceTwoToneIcon />
            </Avatar>
            <h2>{user?.token ? "Profile" : "Registration"}</h2>
            <Typography variant="caption">
              {user?.token
                ? "Edit desired field"
                : "Fill out the registration form"}
            </Typography>
          </Grid>
          {/* FIRST NAME */}
          <TextField
            sx={{ mb: 2, mt: 2 }}
            fullWidth
            label="First Name"
            // FORMIK
            id="first_name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          {/* LAST NAME */}
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="Last Name"
            // FORMIK
            id="last_name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
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
            id="confirm_pass"
            name="confirm_pass"
            value={formik.values.confirm_pass}
            onChange={formik.handleChange}
            error={
              formik.touched.confirm_pass && Boolean(formik.errors.confirm_pass)
            }
            helperText={
              formik.touched.confirm_pass && formik.errors.confirm_pass
            }
          />

          {user?.token ? (
            <MUIButton
              type="submit"
              color="primary"
              variant="contained"
              endIcon={<EditTwoToneIcon />}
              fullWidth
              sx={{ m: "14px 0" }}
            >
              EDIT PROFILE
            </MUIButton>
          ) : (
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
          )}
          {user?.token ? (
            <MUIButton
              color="error"
              endIcon={<ClearTwoToneIcon />}
              onClick={() => {
                handleDelete();
              }}
              sx={{ width: "100%", fontWeight: "bold" }}
              variant="contained"
            >
              DELETE PROFILE
            </MUIButton>
          ) : (
            ""
          )}
        </Paper>
      </Grid>
    </form>
  );
}
