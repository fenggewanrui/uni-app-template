import {getToken,removeToken} from './auth.js'

export const config = {
	baseUrl: 'http://116.62.237.64:8080/',
}

const request = async function(url,parms,method){
	const token = getToken()
	try{
		const result = await uni.request({
			url:config.baseUrl+ url,
			method,
			data: parms || {},
			header:{
				Authorization:token
			}
		})
		if(result[1].statusCode !== 200){
			uni.showToast({
				title: result[1].data.message
			})
		}
		return result[1].data;
	}catch(e){
		uni.showToast({
			title:'网络错误,请稍后重试!!!'
		})
	}
}

export default request;