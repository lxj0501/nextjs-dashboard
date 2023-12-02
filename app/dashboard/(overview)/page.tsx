import { fetchData, fetchRevenue } from '../../lib/data';

export default async function Page() {
  const res = await fetchData();

  return <p>{res}</p>;
}
