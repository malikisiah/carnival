import Link from "next/link";
export default function AdminPage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg mb-96">
          <h1 className="text-3xl text-black mb-5">Admin Page</h1>
          {/* <p className="mb-5">
            {" "}
            Manage team members, manage users, manage items.
          </p> */}
          <div className="space-x-16">
            <Link className="link link-info" href="/admin/users">
              Manage employees
            </Link>
            {/* <Link className="link link-info" href="/admin/users">
              Manage users
            </Link> */}
            <Link className="link link-info" href="/admin/items">
              Manage items
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
