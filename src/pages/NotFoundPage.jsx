import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">404 Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
