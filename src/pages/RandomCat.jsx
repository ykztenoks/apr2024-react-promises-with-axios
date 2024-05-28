import { useState, useEffect } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
function RandomCat() {
  const [randomCat, setRandomCat] = useState(null);
  const [toggleCat, setToggleCat] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRandomCat = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );
        setRandomCat(response.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomCat();
  }, [toggleCat]);

  useEffect(() => {
    console.log("THIS IS THE CURRENT RANDOM CAT ->", randomCat);
  }, [randomCat]);

  return (
    <div>
      {!isLoading ? (
        <>
          <img
            src={randomCat.url}
            alt="randomcat picture"
            style={{ height: "400px", width: "300px", objectFit: "contain" }}
          />

          <button
            onClick={() => {
              setToggleCat(!toggleCat);
            }}
          >
            Find another cat
          </button>
        </>
      ) : (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
    </div>
  );
}

export default RandomCat;
