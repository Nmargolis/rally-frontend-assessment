import { useState } from "react";
// TODO: If tree shaking is being used, it will handle tree shaking with this syntax.
// If not, switch to default imports from specific paths
// e.g. import TextField from "@mui/material/TextField"
import { Button, Container, Dialog, DialogTitle, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import "./App.css";
import { VoterSearchForm } from "./components/VoterSearchForm";
import { VoterResults } from "./components/VoterResults";
import { CreateContact } from "./components/CreateContact";
import { MatchData } from "./api";

/**
 * Entry point component for the application.
 */
function App() {

  // TODO: use reducer
  const initialFormState = {
    firstName: "",
    lastName: "",
    city: "",
    state: ""
  }
  const [searchData, setSearchData] = useState(initialFormState);
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string>("");
  // This is necessary to show and hide the button t
  const [hasSearched, setHasSearched] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
    setSearchData(initialFormState);
    setHasSearched(false);
    setMatchData([]);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
      <Container component="section" maxWidth="md" sx={{ backgroundColor: grey[50], padding: "20px"}}>
        <VoterSearchForm searchData={searchData} setMatchData={setMatchData} setSearchData={setSearchData} setHasSearched={setHasSearched}/>
        {hasSearched && <VoterResults matchData={matchData} setDialogOpen={setDialogOpen} setDialogMessage={setDialogMessage}/>}

        {hasSearched && <CreateContact searchData={searchData} setDialogOpen={setDialogOpen} setDialogMessage={setDialogMessage}></CreateContact>
       }
      </Container>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        maxWidth="sm"
        // TODO: is there a better way to do this? Maybe with the theme?
        sx={{
          ".MuiDialog-paper": {
            padding: "12px"
          }
        }}
      >
        <DialogTitle>Result</DialogTitle>
        <Typography sx={{ padding: "16px 24px"}}>{dialogMessage}</Typography>
        {/* TODO: add ability to close without clearing form
        if someone needs to add a missing field to add a contact. */}
        <Button variant="outlined" onClick={handleClose}>Close</Button>
      </Dialog>
    </Container>
  );
}

export default App;
