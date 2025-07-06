import { useEffect } from "react";
import Papa from "papaparse";
import { useDispatch } from 'react-redux';
import { loading_songs, fetchDataError, songs_are_loaded} from "../../Redux/Action_creators";
const useFetch = (url, options) => {
  const dispatch = useDispatch();
  
  function fetchNow(url) {
    // setStatus({ loading: true });
    dispatch(loading_songs(true))
    dispatch(fetchDataError(null))
    // dispatch(songs_are_loaded(null)) 
    Papa.parse(url,
        {
         download: true,
         header: true,
         complete: (results) => {
            // setStatus({ loading: false, data: results.data })
            dispatch(songs_are_loaded(results.data))           
            dispatch(loading_songs(false))
         },
         skipEmptyLines: true,
         error: (error) => {
           console.error(error);
          //  setStatus({ loading: false, error });
           dispatch(loading_songs(false))
           dispatch(fetchDataError("error"))

       }
       })
  }
  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, [url]);
  return { fetchNow };
}

export default useFetch