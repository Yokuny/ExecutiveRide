const extractData = (format: string, data: Date) => {
  // Converte a data para um objeto Date.
  const date = new Date(data);

  // Extrai a hora do objeto Date.
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  let formattedHour;
  switch (format) {
    case "hour":
      formattedHour = `${hour}:${minute}`;
      break;
    case "hourDate":
      formattedHour = `${date.getDate()}/${date.getMonth() + 1} ${hour}:${minute}`;
      break;
    case "full":
      formattedHour = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${hour}:${minute}:${second}`;
      break;
    default:
      formattedHour = `${date.getDate()}/${date.getMonth() + 1} ${hour}:${minute}`;
      break;
  }

  return formattedHour;
};

export default extractData;
