import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.3rem",
            },
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
          }}
          variant="h4"
        >
          Welcome To My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          mollitia consequatur vero perspiciatis cum, aliquid magni adipisci
          cumque tenetur ab iste, quis porro. Necessitatibus nobis dolores quos
          tenetur minima ducimus, consequatur numquam vero corporis! Illo
          architecto deleniti repellat ullam adipisci neque itaque esse suscipit
          ipsa, consequuntur reiciendis voluptatem voluptatum excepturi, debitis
          assumenda fuga. Accusamus nesciunt maiores id dignissimos ipsam fuga?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
          aliquid magnam dignissimos asperiores odio iste aspernatur minima sunt
          numquam incidunt quia ipsa, facere delectus quam earum non enim, quae
          impedit similique tenetur! Amet laudantium optio velit iure
          necessitatibus maiores, cumque libero voluptatibus suscipit iste.
          Veritatis id animi ratione ab tempore laboriosam enim voluptates nobis
          adipisci, corrupti maxime a sint porro modi voluptatem esse error
          nesciunt. Unde, rerum! Iste eligendi placeat praesentium tempora
          ducimus explicabo eos repellendus, et odio nostrum, doloremque vel
          ullam temporibus similique, nobis commodi? Neque quas suscipit odio
          maxime eligendi corporis hic, quo enim, assumenda nobis magni!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
