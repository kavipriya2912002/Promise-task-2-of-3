let form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var Value = e.target.querySelector('input').value
    console.log(Value)
    food(Value)
})

//to get data from api 
async function food(inpVal) {
  app_id='5b619391';
  app_key = ' a8853be64b96bb1656fe1cc09e78c86d	';
  baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}`;
  
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
     display(datas.hits);
}

//to show data in form of container in the webpage
function display(results) {
  showINHTML = '';
  results.map(result => {
      showINHTML += `
      <div class="col-3 my-3">
      <div class="card">
          <div class="card-body">
              <img src="${result.recipe.image}" alt="" class='img-fluid'>
              <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
              <div class="d-flex justify-content-between align-items-center">
                  <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                  <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
              </div>
          </div>
      </div>
  </div> 
      `
      document.querySelector('#showRecipe').innerHTML = showINHTML;
  })
}