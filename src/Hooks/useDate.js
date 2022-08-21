const useDate = () => {

  function convertDate(dateString){
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR');
  }

  return {convertDate}
}

export default useDate