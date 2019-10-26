const url = "/v1/tp/";
const coord_value = "150.892210:-33.962226:EPSG:4326"; //Current Location (LONG:LAT)
const api_call = "stop_finder";
const name = "Central";

//function to make parameters
export const makeRequest = () => {
  const data = {
    outputFormat: "rapidJSON", //response data type
    type_sf: "any",
    name_sf: name,
    coordOutputFormat: "EPSG:4326",
    TfNSWSF: "true"
  };

  //methods for working with the query string of a URL (e.g. everything after "?").
  //This means no more string splitting URLs!
  const searchParams = new URLSearchParams(data);

  return fetch(url + api_call + "?" + searchParams.toString()).then(res =>
    res.json()
  );
};

export default makeRequest;
