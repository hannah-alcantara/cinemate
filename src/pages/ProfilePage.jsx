// import { Link } from "react-router-dom";

export function ProfilePage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className='flex flex-col gap-2'>
      Profile Page
      {/* {profiles.map((profile) => (
        <Link key={profile} to={`/profile/${profile}`}>
          Profile {profile}
        </Link>
      ))} */}
    </div>
  );
}
