function Header(props) {
  return (
    <div id="header">
      <a href="#" onClick={()=>{
        props.printText();
      }}><div>{props.title}</div></a>
    </div>
  )
}
function Main(props) {
  var list = [];
  // props.list.forEach(element=>{
  //   list.push(<li key={element}>{element}</li>);
  // })
  for (let i = 0; i < props.list.length; i++) {
    list.push(<li key={i}>{props.list[i]}</li>);
  }
  return (
    <div id="main">
      <ul>
        {list}
      </ul>
    </div>
  )
}
function Footer(props) {
  return (
    <div id="footer">
      <div><a href="#" onClick={()=>{
        alert(props.class);
      }}>{props.class}</a></div>
    </div>
  )
}
function App() {
  var subject1 = ["자바", "자바스크립트", "오라클"];
  var subject2 = ["html", "css", "리액트", "mysql"];
  return (
    <>
      <Header title="자바 재밌다!" printText ={()=>{
        console.log("함수 보내기 테스트")
      }}></Header>
      <Header title="오라클 재밌다!"printText ={()=>{
        alert("함수 보내기 테스트")
      }}></Header>
      <Header title="html 재미없다!"></Header>

      <Main list = {subject1}></Main>
      <Main list = {subject2}></Main>

      <Footer class="졸려요"></Footer>
      <Footer class="망고가 셔요"></Footer>
    </>
  );
}

export default App;
