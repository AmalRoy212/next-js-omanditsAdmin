import FadeLoader from "react-spinners/FadeLoader";

function Loader() {

  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0">
      <div className="w-[200px] h-[200px] rounded-xl bg-black flex justify-center items-center">
        <div className="sweet-loading flex justify-center items-center w-full h-full flex-col">
          <FadeLoader
            color={'blue'}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="ml-3"
            />
          <br />
          <h4>Loading ...</h4>
        </div>
      </div>
    </div>
  );
}

export default Loader;