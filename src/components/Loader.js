import loading from "./loading.gif";

const Loader = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loader-gif" />
    </div>
  );
};

export default Loader;
