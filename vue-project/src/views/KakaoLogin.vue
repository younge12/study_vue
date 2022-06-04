<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" alt="" width="222">
        </a>
        <a id="custom-logout-btn" @click="kakaoLogout()">
            로그아웃
        </a>
    </div>
</template>
<script>
    export default {
        methods: {
            kakaoLogin() {
                window.Kakao.Auth.login({
                    scope: 'profile_nickname, account_email',
                    success: this.getKakaoAccount
                });
            },
            kakaoLogout(){
                window.Kakao.Auth.logout((response) => {
                    console.log(response)
                });
            },
            getKakaoAccount() {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: res => {
                        const kakao_account = res.kakao_account;
                        const nickname = kakao_account.profile.nickname; // 카카오 닉네임
                        const email = kakao_account.email; // 카카오 이메일
                        console.log('nickname', nickname);
                        console.log('email', email);

                        // 로그인 처리 구현
                        alert("로그인 성공!");
                    },
                    fail: error => {
                        console.log(error);
                    }
                })
            }
        }
    }
</script>