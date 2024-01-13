import { useState } from "react";
import { Button, Container, Dialog, DialogTitle, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import "./App.css";
import { VoterSearchForm } from "./components/VoterSearchForm";
import { VoterResults } from "./components/VoterResults";
import { MatchData, SearchData } from "./api";
import { CreateContact } from "./components/CreateContact";

/**
 * Entry point component for the application.
 */
function App() {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [searchData, setSearchData] = useState<SearchData>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string>("");

  const handleClose = () => {
    setDialogOpen(false);
    setSearchData(undefined);
    setMatchData([]);
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
      <Container component="section" maxWidth="md" sx={{ backgroundColor: grey[50], padding: "20px"}}>
        <VoterSearchForm setMatchData={setMatchData} setSearchData={setSearchData}/>
        {matchData && <VoterResults matchData={matchData} setDialogOpen={setDialogOpen} setDialogMessage={setDialogMessage}/>}
        {/* TODO: handle state changes from form updates after submit by lifting
         up searchFields state, or make all fields required in original form */}
        {searchData && <CreateContact searchData={searchData} setDialogOpen={setDialogOpen} setDialogMessage={setDialogMessage}></CreateContact>
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
