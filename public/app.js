// ① 사용자가 웹 브라우저에서 INU 버튼을 누르면 (이벤트), 웹 브라우저는 JSON-SERVER 에게 데이터를 요청
document.getElementById('inu-button').addEventListener('click', fetchData);

async function fetchData() {
  try {
      const response = await fetch('http://localhost:3000/web');
      const responseData = await response.json();
      
      // 응답 데이터를 화면에 출력
      if (responseData) {
        console.log(responseData);
        document.getElementById('responseData').textContent = `${JSON.stringify(responseData)}`;
      }

      // ② 저장된 데이터를 웹 브라우저의 localStorage에 저장
      localStorage.setItem('web', JSON.stringify(responseData));

      // ③ 저장이 완료된 이후 데이터를 화면에 출력 (출력 형태는 관계없음)
      const localData = JSON.parse(localStorage.getItem('web'));
      if (localData) {
        console.log(localData);
        document.getElementById('localData').textContent = `${JSON.stringify(localData)}`;
      }
  } catch (error) {
    console.error(error);
  }
}