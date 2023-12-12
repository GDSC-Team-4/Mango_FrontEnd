import { useRecoilValue } from "recoil";
import { searchStateTest } from "../../Atom/Search";
import { MainHeader } from "./MainHeader";
import { SimpleSlider } from "./Slider";

export const MainPage = () => {
  const searchResults = useRecoilValue(searchStateTest);

  return (
    <>
      <MainHeader />
      <p>메인 페이지</p>
      <SimpleSlider />
      {/* 배열인지 확인한 후 검색 결과 출력 */}
      {Array.isArray(searchResults) &&
        searchResults.slice(0, 2).map((result) => (
          <div key={result.id}>
            <p>{result.address_name}</p>
            <p>{result.place_name}</p>
          </div>
        ))}
    </>
  );
};
