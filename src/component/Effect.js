import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState(1);
    const [list, setList] = useState([]);

    useEffect(() => {
        async function userList() {
            const res = await fetch("https://jsonplaceholder.org/users");
            const result = await res.json();
            console.log(result);
            const list = []
            for (let index = 0; index < result.length; index++) {
                list.push(<tr>
                    <td>{result[index].id}</td>
                    <td>{result[index].firstname}</td>
                    <td>{result[index].email}</td>
                    <td>{result[index].birthDate}</td>
                </tr>);

            }
            setList(list);
        }
        userList();
    }, []);

    // 랜더링 될때마다 실행되는 함수
    // useEffect(()=>{}, []);
    return <>
        <table>
            <tr>
                <th>아이디</th>
                <th>이름</th>
                <th>이메일</th>
                <th>생일</th>
            </tr>
            {list}
        </table>
        <button onClick={() => { setMenu(1) }}>1번 메뉴</button>
        <button onClick={() => { setMenu(2) }}>2번 메뉴</button>
        <button onClick={() => {
            setCount(prev => prev + 1);
        }}>증가!</button>
    </>
}
export default App;