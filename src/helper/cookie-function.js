export default function getToken(event, getCookie) {
    const token = getCookie(event, 'authToken')
  
    if (!token) {
        return {
            status: 401,
            body: JSON.stringify({
                message: 'Unauthorized',
                success: false,
            }),
        }
    }
  
    return token
};