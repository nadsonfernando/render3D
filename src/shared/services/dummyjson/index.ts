import { HttpProvider } from '@core/providers/http';

//The ideal is to put it in the env, but that's just for testing purposes.
export default new HttpProvider({
  baseURL: 'https://dummyjson.com',
});
