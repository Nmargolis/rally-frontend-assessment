import { Box, Button } from "@mui/material";
import { SearchData, createContactFromFields } from "../api";
import { Dispatch, SetStateAction } from "react";

// TODO: extend react component props
export interface CreateContactProps {
  searchData: SearchData;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
  setDialogMessage: Dispatch<SetStateAction<string>>;
}

export const CreateContact = ({
  searchData,
  setDialogOpen,
  setDialogMessage,
}: CreateContactProps) => {
  const createNewContactHandler = async () => {
    try {
      await createContactFromFields(searchData);
      setDialogOpen(true);
      setDialogMessage(
        `Successfully created ${searchData.firstName} ${searchData.lastName} as a contact.`
      );
    } catch (error: any) {
      setDialogOpen(true);
      setDialogMessage(
        `Error creating contact: ${error?.message}. Make sure full name and location information are entered.`
      );
    }
  };
  return (
    <Box>
      <h3>None of these match?</h3>
      <Button variant="outlined" onClick={createNewContactHandler}>
        Create a New Contact
      </Button>
    </Box>
  );
};
