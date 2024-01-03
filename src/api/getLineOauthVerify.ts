import { http } from '@/utils/http';
import { LineVerifyResponse } from '@/api/interface';

export function getLineOauthVerify(accessToken: string): Promise<LineVerifyResponse> {
    return http.get('https://api.line.me/oauth2/v2.1/verify', {
        params: {
            access_token: accessToken
        }
    });
}