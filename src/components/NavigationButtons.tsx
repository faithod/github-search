export default function NavigationButtons({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="buttons">
      <button
        onClick={() =>
          setPage((prev) => {
            if (prev > 1) {
              return prev - 1;
            }
            return prev;
          })
        }
      >
        previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
    </div>
  );
}
