/* 
상단에서 cdn 스크립트 import 필요

<script src="https://smtpjs.com/v3/smtp.js"></script>

 */


/*** variable */

/*** DOM */


/*** Function */
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com", // Gmail SMTP 서버
        Port: 587,             // TLS 포트
        Username: "your-email@gmail.com", // Gmail 계정
        Password: "your-app-password",   // 앱 비밀번호
        To: "recipient@example.com",     // 받는 사람 이메일
        From: "your-email@gmail.com",    // 발신자 이메일
        Subject: "테스트 메일",
        Body: "SMTP.js를 사용한 이메일 전송 테스트입니다.",
    }).then((message) => alert("메일 전송 성공: " + message));
}

/*** EventListener */


/*** init */

