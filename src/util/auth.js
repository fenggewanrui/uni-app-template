const root = 'Authorization'

export function getToken(){
	return uni.getStorageSync(root)
}

export function setToken(token){
	return uni.setStorageSync(root,token);
}

export function removeToken(){
	return uni.removeStorageSync(root)
}