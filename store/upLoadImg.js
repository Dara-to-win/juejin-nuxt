import { upload } from 'qiniu-js'
import { v4 as uuidv4 } from 'uuid';
const QiniuUPToken = require('qiniu-uptoken')
const qiniu = require('qiniu-js')

export const state = () => ({
        token:'',
        imgSrc:'',
    })

export const actions = { 
    // 生成上传 Token
    getToken(context){
    context.state.token = QiniuUPToken(
            'StZJMeCvllWcmnvI7VaUdQsebPOIjOemENGm5sQd', 
            'S2fKXsgqhItS78sf3Oz1VhkB3X00RRWLQEDocKmH', 
            'dian210')
    },
   upLoadImg(context,file){
          const config = {
            useCdnDomain: false,
            region:null
          };
          const putExtra = {
            fname: "",
            params: {},
            mimeType: null
          };
          const observer = {
          next(res){
            // ...
          },
          error(err){
            this.$message.error(err)
          }, 
          complete(res){
            // ...
          }}
          const uuid=uuidv4()
          const observable = qiniu.upload(file, uuid, context.state.token, putExtra, config)
          observable.subscribe(observer) // 上传开始
          context.state.imgSrc= `http://qiniu.diandian210.top/${uuid}`
    }
}