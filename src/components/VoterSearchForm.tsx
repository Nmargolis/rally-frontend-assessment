import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { MatchData, SearchData, searchVoterfile } from "../api";

export interface VoterFormProps {
  searchData: SearchData;
  setMatchData: Dispatch<SetStateAction<MatchData[]>>;
  setSearchData: Dispatch<SetStateAction<SearchData>>;
  setHasSearched: Dispatch<SetStateAction<boolean>>;
}

export const VoterSearchForm = ({
  searchData,
  setMatchData,
  setSearchData,
  setHasSearched,
}: VoterFormProps) => {
  const { firstName, lastName, city, state } = searchData;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // TODO: validation if all fields are required, or add required Material UI prop
    try {
      const searchFields = { firstName, lastName, city, state };
      const matchData = await searchVoterfile(searchFields);
      setMatchData(matchData);
    } catch (error: any) {
      console.error(error);
      alert(`Error searching. ${JSON.stringify(error?.message)}`);
    }
    setHasSearched(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="first-name-input"
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        autoComplete="off"
        value={firstName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setHasSearched(false);
          setSearchData({ ...searchData, firstName: event.target.value });
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
          setHasSearched(false);
          setSearchData({ ...searchData, lastName: event.target.value });
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
          setHasSearched(false);
          setSearchData({ ...searchData, city: event.target.value });
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
          setHasSearched(false);
          setSearchData({ ...searchData, state: event.target.value });
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
