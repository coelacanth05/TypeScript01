export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "ABC") {
    console.log("Function parmeters sample 1: User is signed in!", username);
    return true;
  } else {
    console.log("Function parmeters sample 2: User is not signed in.");
    return false;
  }
};
