import Users from "../users";
import { getAdmins } from "@/lib/utils";

export default async function AdminPage() {
  const data = await getAdmins();
  console.log(data);
  return (
    <>
      <Users users={data} />
    </>
  );
}
