import { useState, useEffect } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
function RandomCat() {
  //randomCat state to hold object with cat info and image
  const [randomCat, setRandomCat] = useState(null);
  //toggleCat state that changes upon button click, which then fetches another random cat object
  const [toggleCat, setToggleCat] = useState(false);
  //isLoading state for different conditional render approach
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //another approach declaring fetch/get function inside useEffect

    //async function that requests a random cat object
    const getRandomCat = async () => {
      try {
        //isLoading set to true until promise is fullfilled
        setIsLoading(true);

        //store response in variable
        const response = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );

        //response from this api came in array format, so set randomCat state to response.data[0]
        setRandomCat(response.data[0]);

        //once request is done and randomCat state is set, set loading to false
        setIsLoading(false);
      } catch (error) {
        //catch error if any
        console.log(error);
      }
    };

    getRandomCat();

    //toggleCat in dependency array of useEffect
    //meaning this useEffect will run after initial render
    // AND when toggleCat state changes
  }, [toggleCat]);

  useEffect(() => {
    console.log("THIS IS THE CURRENT RANDOM CAT ->", randomCat);
    //console logs randomCat state whenever it changes
  }, [randomCat]);

  return (
    <div>
      {/* if not loading, render cat image and button to toggle toggleCat state      */}
      {!isLoading ? (
        <>
          <img
            src={randomCat.url}
            alt="randomcat picture"
            style={{ height: "400px", width: "300px", objectFit: "contain" }}
          />
          {/* button that toggles toggleCat state between true or false
          the change is being tracked by useEffect above
          which then makes another request upon state update
      */}
          <button
            onClick={() => {
              setToggleCat(!toggleCat);
            }}
          >
            Find another cat
          </button>
        </>
      ) : (
        // loading spinner component from react-loader-spinner npm package

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
