import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <header className="sticky top-0 bg-black p-2 h-16">
      <h3
        className="text-center text-white bg-primaryRed w-40 p-3 mx-auto cursor-pointer"
        onClick={() => history.push("/")}
      >
        Marvel Explorer
      </h3>
    </header>
  );
}
