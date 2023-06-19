const dateConversor = () => {
  const date = new Date();

  const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate}` // 19
  const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}` // 19
  const year = date.getFullYear();

  const hours =  date.getHours() > 10 ? date.getHours() : `0${date.getHours}`;
  const minutes =  date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes}`;
  const seconds =  date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds}`;

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
};

const dateReversor = () => {
  
}

module.exports = {
  dateConversor,
  dateReversor,
}