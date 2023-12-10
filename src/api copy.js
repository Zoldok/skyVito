const PATH = "http://localhost:8090";

export async function loginUser(email, password) {
    const response = await fetch(`${PATH}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok && response.status === 401) {
      throw new Error('Ошибка авторизации');
    }
  
    const responseData = await response.json();
    return responseData;
  }

  
export async function registerUser(email, password, name, surname, city) {
  try {
    const response = await fetch(`${PATH}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        surname: surname,
        city: city,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok && response.status === 401) {
      throw new Error('Ошибка регистрации');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error('Ошибка регистрации');
  }
}