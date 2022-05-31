import React from "react";
import "./style.css";

import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
function signIn({ showAuth }) {
  return (
    <Popper
      id={"show-categories"}
      open={showAuth}
      placement={"bottom-start"}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Box
            sx={{
              border: "1px solid #d8d8d8",
              display: "flex",
              flexDirection: "row",
              marginTop: 11,
              marginLeft: 23.5,
              p: 1,
              bgcolor: "background.paper",
            }}
          >
            <div>Hello</div>
          </Box>
        </Fade>
      )}
    </Popper>
  );
}

export default signIn;
