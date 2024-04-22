export function Footer() {
  return (
    <footer className="bg-black">
      <div className="p-8">
        <a href="/" className="text-3xl font-bold font-oswald">
          CINEMATE
        </a>
        <ul className="flex justify-between my-6">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
        <hr className="my-6" />
        <span class="block text-sm">
          © 2023{" "}
          <a href="#" class="hover:underline">
            CINEMATE™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
