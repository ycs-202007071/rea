function Header(props) {
    return (
        <div>{props.text}</div>
    );
}

function Body(props) {
    var list = [];
    for (let index = 0; index < props.list.length; index++) {
        list.push(<a href="#" onClick={()=>{props.printSubject(props.list[index])}}><li>{props.list[index]}</li></a>);
    }
    return (
        <ul>
       {list}
        </ul>
    );
}
function Footer(props) {
    return (
        <div>{props.text}</div>
    );
}

function App() {
    var list = ["자바", "오라클", "html"];
    return (<div>
        <Header text="Web Header!"></Header>
        <Body list={list} printSubject={(subject) => {
            alert(subject);
        }}></Body>
        <Footer text="Web Footer!"></Footer>
    </div>);
}

export default App; // 기본 내보내기 추가