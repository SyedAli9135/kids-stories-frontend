import React from "react";
import phone from "../../assets/phone-call.png";
import email from "../../assets/email.png";
import home from "../../assets/home.png";
import "./styles/contact.css";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { contact } from "../../models/contact.dto";
export const Contact: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    phone: Yup.string().min(11, "It's too short").required("Required"),
    address: Yup.string().min(10, "It's too short").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const contactcredentials: contact = {
        email: values.email,
        phone: values.phone,
        address: values.address,
      };
      console.log("Register Credentials:", contactcredentials);
    },
  });
  return (
    <div className="container container-fluid contact__main ">
      <div className="col  contact__main__left">
        <h3 className="contact__main__left__heading">Get in Touch with Us</h3>
        <div className="contact__main__left__content">
          <div className="col-5 mb-2">
            <img src={email} style={{ width: "40px" }} />
            <p>loremipsum@gmail.com</p>
          </div>
          <div className="col-4 mb-2">
            <img src={phone} style={{ width: "40px" }} />
            <p>68689869869</p>
          </div>
          <div className="col-3 mb-2">
            <img src={home} style={{ width: "40px" }} />
            <p>Houston, CANADA</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px" }} className="col   contact__main__right">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h3" variant="h5">
              For Queries
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid style={{ marginTop: "20px" }} container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label="phone"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="address"
                    type="address"
                    id="address"
                    autoComplete="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#ba0909" }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
};
