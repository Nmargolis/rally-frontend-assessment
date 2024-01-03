import voterfile from "./voterfile.json";

/**
 * Information about a voter that we want to match against the voterfile.
 */
export interface SearchData {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
}

/**
 * Information about a voter in the voterfile.
 */
export interface VoterData extends SearchData {
  voterfileId: string;
  address: string;
  age: number;
}

/**
 * Information about a match against the voterfile.
 */
export interface MatchData extends VoterData {
  // Number from 0 to 1 indicating how well the voter matches the search data.
  score: number;
}

/**
 * Generate a numeric score based on how well the voter matches the search data.
 */
function scoreMatch(voter: VoterData, data: SearchData): number {
  return (
    +(
      voter.firstName.toLocaleLowerCase() === data.firstName.toLocaleLowerCase()
    ) +
    +(
      voter.lastName.toLocaleLowerCase() === data.lastName.toLocaleLowerCase()
    ) +
    +(voter.city.toLocaleLowerCase() === data.city.toLocaleLowerCase()) +
    +(voter.state.toLocaleLowerCase() === data.state.toLocaleLowerCase())
  );
}

/**
 * Search the voterfile for voters matching the search data.
 */
export function searchVoterfile(data: SearchData) {
  return new Promise<MatchData[]>((resolve, reject) => {
    const result = voterfile
      .map((voter) => ({
        ...voter,
        score: scoreMatch(voter, data),
      }))
      .filter((result) => result.score > 0);
    setTimeout(() => {
      resolve(result);
    }, 200);
  });
}

/**
 * Add a new contact using a voterfile ID.
 */
export function createContactFromVoter(voterfileId: string) {
  return new Promise((resolve, reject) => {
    const voter = voterfile.find((voter) => voter.voterfileId === voterfileId);
    if (voter === undefined) {
      reject(new Error(`No voter with ID ${voterfileId}`));
      return;
    }
    setTimeout(() => {
      console.log(`Adding contact for ${voter.firstName} ${voter.lastName}`);
      resolve(undefined);
    }, 200);
  });
}

/**
 * Add a new contact using the data from search fields.
 */
export function createContactFromFields(searchData: SearchData) {
  return new Promise((resolve, reject) => {
    if (
      searchData.firstName === "" ||
      searchData.lastName === "" ||
      searchData.state === "" ||
      searchData.city === ""
    ) {
      reject(new Error("Invalid contact data"));
      return;
    }
    setTimeout(() => {
      console.log(
        `Adding a new contact for ${searchData.firstName} ${searchData.lastName}`
      );
      resolve(undefined);
    }, 200);
  });
}
