import { useState } from "react";
import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";

import "./App.css";
import { VoterForm } from "./VoterForm";
import { VoterResults } from "./VoterResults";
import { MatchData, SearchData } from "./api";
import { CreateContact } from "./CreateContact";

/**
 * Entry point component for the application.
 */
function App() {
  // TODO: type
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [searchData, setSearchData] = useState<SearchData>();
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
      {/* TODO: Add components for a search form and to display the results */}
      <Container component="section" maxWidth="md" sx={{ backgroundColor: grey[50], padding: "20px"}}>
        <VoterForm setMatchData={setMatchData} setSearchData={setSearchData}/>
        {matchData && <VoterResults matchData={matchData}/>}
        {/* TODO: handle state changes from form updates after submit, or make all fields required in original form */}
        {searchData && <CreateContact searchData={searchData}></CreateContact>
       }
      </Container>

    </Container>
  );
}

export default App;
