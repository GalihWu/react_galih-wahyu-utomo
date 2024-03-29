import cookies from 'js-cookie';

const AUTH_NAMESPACE = 'auth_token';

export function setAuthCookie(token) {
  cookies.set(AUTH_NAMESPACE, token, {
    expires: 7, // 7 days
  });
}

export function getAuthCookie() {
  const token = cookies.get(AUTH_NAMESPACE);
  return token;
}

export function removeAuthCookie() {
  cookies.remove(AUTH_NAMESPACE);
}
