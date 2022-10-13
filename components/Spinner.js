export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 top-0 right-0 bottom-0 z-50">
      <img src="/spinner.svg" alt="Loading.." className="h-24" />
    </div>
  );
}
