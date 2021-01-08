const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const singleMealEl = document.getElementById("single-meal");

//fetching meal from api
function searchMeal(e) {
	e.preventDefault();

	//clear single meal
	singleMealEl.innerHTML = "";

	//Get search term
	const term = search.value;
	console.log(term);

	//check for empty
	if (term.trim()) {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	} else {
		alert("Please enter a search term in the input");
	}
}

//Event Listeners
submit.addEventListener("submit", searchMeal);
