function submitSearch() {
    const allWords = document.getElementById('allWords').value;
    const exactPhrase = document.getElementById('exactPhrase').value;
    const anyWords = document.getElementById('anyWords').value;
    const excludeWords = document.getElementById('excludeWords').value;
  
    // Construir la URL de búsqueda con los parámetros correspondientes
    let url = 'https://www.google.com/search?';
    if (allWords) {
      url += `q=${allWords}+&`;
    }
    if (exactPhrase) {
      url += `as_epq=${exactPhrase}+&`;
    }
    if (anyWords) {
      url += `as_oq=${anyWords}+&`;
    }
    if (excludeWords) {
      url += `-inurl:${excludeWords}+&`;
    }
    // Eliminar el último "&" de la URL si es necesario
    url = url.slice(0, -1);
  
    // Redirigir a la URL de búsqueda
    window.location.href = url;
  }


  function luckySearch() {
    const query = document.getElementById('query').value;
  
    // Construir la URL de búsqueda directa
    const url = `https://www.google.com/search?q=${query}&btnI`;
  
    // Redirigir a la URL de búsqueda
    window.location.href = url;
  }