import { useRecoilValue } from 'recoil';
import { searchStateTest } from '../../Atom/Search';
import { MainHeader } from './MainHeader';

export const MainPage = () => {
  const searchResults = useRecoilValue(searchStateTest);

  return (
    <>
      <MainHeader />
      <p>메인 페이지</p>
      {/* 배열인지 확인한 후 검색 결과 출력 */}
      {Array.isArray(searchResults) && searchResults.slice(0, 2).map((result) => (
        <div key={result.id}>
          <img src={result.imageURL} alt={result.place_name} />
        </div>
      ))}
    </>
  );
};
