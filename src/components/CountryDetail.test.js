import { FetchCountries } from '../redux/countries/Countries';

describe('fetching from api', () => {
  test('data type', async () => {
    const data = await FetchCountries();
    expect(data).toBeInstanceOf(Object);
  });

  test('data contains object indeed', async () => {
    const data = await FetchCountries();
    expect.objectContaining(data);
  });
});
