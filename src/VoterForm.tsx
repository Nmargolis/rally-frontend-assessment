// If tree shaking is being used, it will handle tree shaking with this syntax.
// If not, switch to default imports from specific paths e.g. import FormControl from "@mui/material/FormControl"
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const VoterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault();
        console.warn({firstName, lastName, city, state});
      }}
    >
      <TextField
        id="first-name-input"
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={firstName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.warn('change to firstNAme', event.target.value)
          setFirstName(event.target.value);
        }}
      />
      <TextField
        id="last-name-input"
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        id="city-input"
        label="City"
        variant="outlined"
        margin="normal"
        sx={{ width: "50%" }}
        value={city}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCity(event.target.value);
        }}
      />
      {/* TODO: a dropdown or autocomplete might be helpful */}
      <TextField
        id="state-input"
        label="State"
        variant="outlined"
        margin="normal"
        sx={{ width: "50%" }}
        value={state}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setState(event.target.value);
        }}
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
