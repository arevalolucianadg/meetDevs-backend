import bcrypt from 'bcrypt';



export const passwordEncrypt = async (password: string | Buffer): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};
