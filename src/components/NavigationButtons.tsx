export default function NavigationButtons({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="buttons">
      {page !== 1 && (
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
      )}

      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
    </div>
  );
}
