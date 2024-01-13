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

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // TODO: validation if all fields are required, or with Material UI
    try {
        const searchFields = {firstName, lastName, city, state}
        const matchData = await searchVoterfile(searchFields)
        setMatchData(matchData);
        setSearchData(searchFields);
    }
    catch (error: any) {
        console.error(error)
        alert(`Error searching. ${JSON.stringify(error?.message)}`);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
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
