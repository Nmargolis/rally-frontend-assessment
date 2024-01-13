import { Box, Button } from "@mui/material";
import { MatchData, createContactFromVoter } from "../api";

// TODO: extend React component props
export interface VoterResultsProps {
  matchData: MatchData[];
}

export const VoterResults = ({ matchData }: VoterResultsProps) => {
 
  return (
    <>
      {matchData.map((match) => {
        const { voterfileId, firstName, lastName, city, state, score } = match;
        const addContactHandler = async() => {
          try {
            await createContactFromVoter(voterfileId);
            alert(`${firstName} ${lastName} has been added to your contacts.`);
          } catch (error) {
            console.error(`Error adding ${firstName} ${lastName} with id ${voterfileId}`);
          }
        }
        return (
          <Box
            key={voterfileId}
            sx={{
              border: "1px solid black",
              padding: "0 12px 12px",
              margin: "12px 0",
            }}
          >
            <h3> Name: {firstName} {lastName}</h3>
            <b>{score >= 4 ? "Likely Match" : "Partial Match"}</b>
            <p>City: {city}, {state}</p>
            <Button
              variant="outlined"
              onClick={addContactHandler}
            >
              Add
            </Button>
          </Box>
        );
      })}
    </>
  );
};
