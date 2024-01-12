// If tree shaking is being used, it will handle tree shaking with this syntax.
// If not, switch to default imports from specific paths e.g. import FormControl from "@mui/material/FormControl"
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const VoterForm = () => {

  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault();
        console.warn(event);
      }}
    >
      <TextField
        id="first-name-input"
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="last-name-input"
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="city-input"
        label="City"
        variant="outlined"
        margin="normal"
        sx={{ width: "50%" }}
      />
      {/* TODO: a dropdown or autocomplete might be helpful */}
      <TextField
        id="state-input"
        label="State"
        variant="outlined"
        margin="normal"
        sx={{ width: "50%" }}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        sx={{ margin: "16px 0px 8px 0px" }}
      >
        Search
      </Button>
    </form>
  );
};
