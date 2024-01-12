import { Box, Button } from "@mui/material";
import { SearchData, createContactFromFields } from "./api";

// TODO: extend react component props
export interface CreateContactProps {
  searchData: SearchData;
}
export const CreateContact = ({ searchData }: CreateContactProps) => {
  return (
    <Box>
      <h3>None of these match?</h3>
      <Button
        variant="outlined"
        onClick={async () => {
          try {
            const creationResult = await createContactFromFields(searchData);
            alert(JSON.stringify(creationResult));
          } catch (error: any) {
            alert(`Error creating contact ${error?.message}`);
          }
        }}
      >
        Create a New Contact
      </Button>
    </Box>
  );
};
