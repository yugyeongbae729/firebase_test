const firebaseConfig = {
    apiKey: "AIzaSyCc8KH1di7x78yi5Bozyj-pnoyuVXpJiCA",
    authDomain: "project-yg-35bdc.firebaseapp.com",
    databaseURL: "https://project-yg-35bdc-default-rtdb.firebaseio.com",
    projectId: "project-yg-35bdc",
    storageBucket: "project-yg-35bdc.appspot.com",
    messagingSenderId: "891502950025",
    appId: "1:891502950025:web:abab56c6a6475dd40c3858",
    measurementId: "G-XH75XPZMTS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//   <!-- 파이어베이스 앱 초기화 -->

//   <!-- 파이어베이스 실시간 데이터베이스 생성 -->
const database = firebase.database();

//    데이터 저장 실습

function writeUserData(userId, email, nick) {
    database.ref("users/" + userId).set({
        email: email,
        nick: nick
    });
}

// 데이터 읽기 실습
// 1. 전체 조회된 결과 출력
// -테일블 태그 or 목록 태그를 활요해서 출력


// 2.특정 사용자 조회
// -id 값 입력받은 후 해당 사용자의 email, nick 출력

function readUserData() {
    database.ref("users/").on('value',(snapshop)=>{
        // 실시간 데이터베이스 값 접근
        console.log(snapshop.val());
        let data=snapshop.val();
        let keys=Object.keys(data);

       console.log( Object.keys(data));
       console.log(data["d"]);
       console.log(data[keys[0]]);

       const result= document.getElementById("result");
       
       //데이터베이스 웹 페이지 출력
       result.innerText=`${data[keys[0]].email}/${data[keys[0]].nick}`;
    })
    }
    

///////////////////////////////////////////////////////

let btn = document.getElementById("btn");

const readBtn = document.getElementById("readBtn")
readBtn.addEventListener("click",()=>{
    readUserData();

})
btn.addEventListener("click", (event) => {
    event.preventDefault();
    let id = document.getElementById("id");
    let email = document.getElementById("email");
    let nickname = document.getElementById("nickname");

    console.log(id.value);
    console.log(email.value);
    console.log(nickname.value);
    writeUserData(id.value, email.value, nickname.value)

});


