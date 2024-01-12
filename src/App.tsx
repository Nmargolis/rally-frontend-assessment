import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";

import "./App.css";
import { VoterForm } from "./VoterForm";


/**
 * Entry point component for the application.
 */
function App() {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "20px" }}>
      {/* TODO: Add components for a search form and to display the results */}
      <Container component="section" maxWidth="md" sx={{ backgroundColor: grey[50], padding: "20px"}}>
        <VoterForm />
      </Container>
    </Container>
  );
}

export default App;
