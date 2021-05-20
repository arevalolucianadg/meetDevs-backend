type props = {
  collection: string;
  collections: string | string[];
};

export const allowedCollections = ({
  collection = '',
  collections = '',
}: props) => {
  const isIncluded = collections.includes(collection);
  if (!isIncluded) {
    throw new Error(`La colección ${collection} ingresada no está permitida.`);
  }

  return true;
};
