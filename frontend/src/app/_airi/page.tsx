// fetchData 함수 정의
async function fetchData() {
  console.log("called");

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const text = await res.text();
    if (!text) {
      throw new Error('Received empty response');
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return []; // 에러 발생 시 빈 배열 반환
  }
}

const AiriPage = async () => {
  const data = await fetchData();
  // console.log(data);

  return (
    <div>
      <h1>AiriPage, app router Test</h1>
      {data.length > 0 ? (
        data.map((user: any) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}

export default AiriPage