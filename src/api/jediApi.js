// eslint-disable-next-line import/prefer-default-export
export async function getJedi() {
  let jediList;
  try {
    const response = await fetch('http://localhost:3001/jedi');
    jediList = await response.json();
  } catch (errorPromise) {
    const error = await errorPromise;
    console.log('Error during API request: ', error);
  }
  return jediList;
}
