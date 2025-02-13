import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
  const [movie, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  async function getMovie() {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    return json;
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovie = await getMovie(); // 데이터를 비동기적으로 가져오기
      setMovies(fetchedMovie.data.movie); // 가져온 데이터를 state에 저장
      setLoading(false); // 로딩 상태를 false로 설정
    };
    fetchData(); // 데이터 가져오기 함수 호출
  }, [id]); // 'id'가 변경될 때마다 useEffect 실행

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
        </div>
      )}
    </div>
  );
}

export default Detail;
