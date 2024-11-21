export const stringSplitter = (myString, chunkSize) => {
  let splitString = [];
  let start = 0;
  while (start < myString.length) {
    // Trouver la fin du chunk
    let end = start + chunkSize;
    // Si on dépasse la longueur de la chaîne, on ajuste
    if (end >= myString.length) {
      splitString.push(myString.slice(start));
      break;
    }
    // Trouver le dernier espace avant la limite de chunkSize
    let lastSpace = myString.lastIndexOf(" ", end);
    // Si aucun espace n'est trouvé, on coupe quand même
    if (lastSpace === -1 || lastSpace < start) {
      lastSpace = end; // coupe à l'endroit prévu si pas d'espace
    }
    // Ajouter le morceau à l'array
    splitString.push(myString.slice(start, lastSpace));
    // Mettre à jour le début pour le prochain chunk
    start = lastSpace + 1; // +1 pour sauter l'espace
  }
  return splitString;
};

export const stringListToHTML = (listString, parent) => {
  parent.innerText = "";
  listString.forEach((string) => {
    const span = document.createElement("span");
    span.textContent = string; // Utilise textContent pour éviter l'injection
    parent.appendChild(span);
  });
};