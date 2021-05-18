import { HandleResponseProps } from './utils.interface';

export const handleResponse = ({ data, message, success }: HandleResponseProps): HandleResponseProps  => {
  return {
    data,
    message,
    success,
  };
};

