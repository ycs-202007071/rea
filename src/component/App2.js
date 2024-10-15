function App(){
    var list = ["자바", "오라클", "html"];
    return (<div>
        <Header text="Web Header!"></Header>
        <Body list={list} printSubject={(subject)=>{
            alert(subject);
        }}></Body>
        <Footer text="Web Footer!"></Footer>
    </div>);
}

export default App;