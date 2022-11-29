import { UserContext } from "./UserContext";

export default function ButtonSection({ handleClick }) {
  return (
    <div className="buttonSection">
      <UserContext.Provider value="hi">
        <button
          type="button"
          className="button"
          onClick={() => handleClick("filmarzec")}
        >
          GitHub
        </button>
        <button
          type="button"
          className="button"
          onClick={() => handleClick("Filip Marzec")}
        >
          LinkedIn
        </button>
      </UserContext.Provider>
    </div>
  );
}
