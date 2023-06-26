import axiosConnect from "../../utils/axios";

export async function logging (email, password) {
  let response = null;
  let error = null;
  
  axiosConnect.post('/logs/register', {
    email,
    password
  }).then((resp) => {
    console.log(resp);
    response = resp;
  }).catch((err) => {
    console.log(err)
    error = err;
  });

  response ? console.log(response) : console.log(error);

  return response ? response : error;
}