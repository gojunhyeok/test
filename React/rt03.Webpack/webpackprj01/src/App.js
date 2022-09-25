import Header from "./Header";
// 이놈들 하나하나가 홈페이지의 일부가 된다.
import Footer from "./Footer";
// 얘도 ㅇㅇ
import "./App.css";
//얘도 ㅇㅇ

function App() {
  return (
    <div class="container">
      <Header></Header>

      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}
// 이것을 jsx 라고 불리우며 이것은 js 라고 생각 하면 쉽다 ㅇㅇ
export default App;
