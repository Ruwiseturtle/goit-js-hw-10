//ф-ція приймає масив даних котиків та малює розмітку
//для поля select зі списком порід котів
export function createMarkupOptions(arr) {
  return arr
    .map(elem => `<option value="${elem.id}">${elem.name}</option>`)
    .join();
}

export function createMarkupCatShow(array) {
  const markup = ` <!-- розмітка для кота -->
    <div class="info-cat">
    <div><img
                srcset="${array.url}"
                src="${array.url}"
                loading="lazy"
                alt="Cat"
                class="cat-img"
              /></div>
        <div>
            <div><h1>${array.breeds[0].name}</h1></div>
            <div class="description-cat">${array.breeds[0].description}</div>
            <div class="description-cat"><b>Temperament: </b>${array.breeds[0].temperament}</div>
        </div>
    </div>
   `;
  return markup;
}