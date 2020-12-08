export function getAuthForm() {
   return `
   <form id="auth-form" class="mui-form">
   <div class="mui-textfield mui-textfield--float-label">
      <input type="email" id="email" required>
      <label for="email">Email</label>
   </div>
   <div class="mui-textfield mui-textfield--float-label">
      <input type="password" id="password" required>
      <label for="password">Пароль</label>
   </div>
   <button type="submit" class="mui-btn mui-btn--raised mui-btn--accent">Войти</button>
   </form>
   `
}

export function authWithEmailAndPassword(email, password) {
   const apiKey = 'AIzaSyCgPzZo7r_GTu-p9oDnNMqajqBjpF5UoaM'
   return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
         'Content-type': 'application/json'
      }
   })
      .then(response => response.json())
      .then(data => data.idToken)
}