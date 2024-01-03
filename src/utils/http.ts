import axios from 'axios';
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

/* 服務器返回數據的的類型，根據接口文檔確定 */
// export interface Result<T=any> {
//   code: number,
//   message: string,
//   data: T
// }

// TODO: 改baseURL由env取得
const service: AxiosInstance = axios.create({
  // baseURL: '/api',
  timeout: 0
})

/* 請求攔截器 */
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  //  偽代碼
  // if (user.token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config
}, (error: AxiosError) => {
  //   Message.error(error.message);
  return Promise.reject(error)
})

/* 響應攔截器 */
service.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
  // TODO: 根據自定義錯誤碼判斷請求是否成功
  // const { code, message, data } = response.data
  // if (code === 0) {
  //   // 將組件用的數據返回
  //   return data
  // } else {
  //   // 處理業務錯誤。
  //   // Message.error(message)
  //   return Promise.reject(new Error(message))
  // }
}, (error: AxiosError) => {
  // 處理 HTTP 網絡錯誤
  let message = ''
  // HTTP 狀態碼
  const status = error.response?.status
  switch (status) {
    case 400:
      message = 'Bad Request'
      break;
    case 401:
      message = 'token 失效，請重新登錄'
      // 這裏可以觸發退出的 action
      break;
    case 403:
      message = '拒絕訪問'
      break;
    case 404:
      message = '請求地址錯誤'
      break;
    case 500:
      message = '服務器故障'
      break;
    default:
      message = '網絡連接故障'
  }
  //   Message.error(message) 
  return Promise.reject(error)
})

/* 導出封裝的請求方法 */
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  }
}

/* 導出 axios 實例 */
export default service