import { Box, Button } from "@mui/material";
import { SearchData, createContactFromFields } from "../api";

// TODO: extend react component props
export interface CreateContactProps {
  searchData: SearchData;
}

export const CreateContact = ({ searchData }: CreateContactProps) => {
  const createNewContactHandler = async ()=> {
    try {
      const creationResult = await createContactFromFields(searchData);
      alert(JSON.stringify(creationResult));
    } catch (error: any) {
      alert(`Error creating contact ${error?.message}`);
    }
  }
  return (
    <Box>
      <h3>None of these match?</h3>
      <Button variant="outlined"onClick={createNewContactHandler}>
        Create a New Contact
      </Button>
    </Box>
  );
};
