const usedIDs: Set<string> = new Set<string>();

export const createId = (proposedID: string) => {
  let tries = 0;
  while (!isUniqueId(proposedID, tries)) {
    tries++;
  }
  const newID = makeId(proposedID, tries);
  usedIDs.add(newID);
  return newID;
};

export const removeId = uischema => usedIDs.delete(uischema);

const isUniqueId = (idBase: string, iteration: number) => {
  const newID = makeId(idBase, iteration);
  return !usedIDs.has(newID);
};

const makeId = (idBase: string, iteration: number) => idBase + iteration;

export const clearAllIds = () => usedIDs.clear();
