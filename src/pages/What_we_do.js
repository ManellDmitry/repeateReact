import { Button } from "../components/Button";
import { InputText } from "../components/Input";
import withLeftSidebar from "../hocs/withLeftSidebar";
import { setSearchValue, setImages } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { getImagesSelector, searchValueSelector } from "../redux/selectors";
import debounce from "lodash.debounce";

import "../redux/selectors";

const API_KEY = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";
const BASE_URL = "https://api.pexels.com/v1/";
const endpoint = "search";
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

function WhatWeDo() {
  const dispatch = useDispatch();
  const search = useSelector(searchValueSelector);
  const images = useSelector(getImagesSelector);

  const handleInputChange = debounce((e) => {
    dispatch(setSearchValue(e.target.value));
  }, 500);

  const searchValue = () => {
    console.log("click", search);
    if (search) {
      let params = `?query=${search}&orientaion=portrait&size=small&per_page=5`;
      const url = BASE_URL + endpoint + params;
      fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          dispatch(setImages(data.photos));
          return data.photos;
        });
    }
  };

  return (
    <>
      <section>
        <InputText
          placeholder="enter value"
          handleChange={handleInputChange}
          xxx="111"
        />
        <Button type="submit" label="search" handleClick={searchValue} />
        <ul>
          {images.map(({ src: { tiny }, alt, id }) => {
            return (
              <li key={id}>
                <img src={tiny} alt={alt} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default withLeftSidebar(WhatWeDo);
