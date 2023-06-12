import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          p: 2,
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Contact My Restuarant
        </Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ipsa
          exercitationem nobis odio explicabo alias facere itaque saepe
          suscipit, a animi non voluptate, ab, praesentium reprehenderit
          asperiores labore veritatis accusamus?
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: "10",
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> +90 544 445
                  3455 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  hasanar2778@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  +212 843 1875
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
