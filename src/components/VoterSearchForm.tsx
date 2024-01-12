// If tree shaking is being used, it will handle tree shaking with this syntax.
// If not, switch to default imports from specific paths e.g. import FormControl from "@mui/material/FormControl"
import { Button, TextField } from "@mui/material";
import { useState, Dispatch, SetStateAction } from "react";
import { MatchData, SearchData, searchVoterfile } from "../api";

export interface VoterFormProps {
    setMatchData: Dispatch<SetStateAction<MatchData[]>>
    setSearchData: Dispatch<SetStateAction<SearchData | undefined>>
}

export const VoterSearchForm = ({setMatchData, setSearchData}: VoterFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event?.preventDefault();
        // TODO: validation, or in the onChanges, or figure out how to do with Material UI
        try {
            const searchFields = {firstName, lastName, city, state}
            const matchData = await searchVoterfile({firstName, lastName, city, state})
            setMatchData(matchData);
            setSearchData(searchFields);
        }
        catch (error) {
            console.error(error)
        }
      }}
    >
      <TextField
        id="first-name-input"
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        autoComplete="off"
        value={firstName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(event.target.value);
        }}
      />
      <TextField
        id="last-name-input"
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        autoComplete="off"
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
        autoComplete="off"
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
        autoComplete="off"
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
