import Vue from 'vue'
import JSEncrypt from 'jsencrypt'

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBOzCpdkNjG2gQd+V/LqDbiMp+dd86SucxxlTmGhX8+couJfXydXJ5UkROkHFRtIPIV6CrrEJQkte/scGFIzic+hQWWl2g5UgV0i+Eqm2X6zUHuOOv3VOMlPOK0OAUOLiuqTS/Z212XLY3I2hG/MOLpKF3S36rVlMqP+FUMp4w6QIDAQAB'
let rsa = {
    install(Vue) {
        Vue.prototype.$encrypt = function(txt){
            const encryptor = new JSEncrypt()
            encryptor.setPublicKey(publicKey) // 设置公钥
            return encryptor.encrypt(txt) // 对数据进行加密
        };
    }
}
Vue.use(rsa);