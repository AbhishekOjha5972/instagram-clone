
const append = (data, container) => {

  // Append ko kya khilate hey 
  container.innerHTML = null
  data.forEach(({ caption, imagURL }) => {
      let div = document.createElement('div');
      let captionData = document.createElement('p')
      captionData.innerText = caption;
      let img = document.createElement('img')
      img.src = imagURL;
      div.append(img, caption);

      container.append(div);
  })
}


export { append };