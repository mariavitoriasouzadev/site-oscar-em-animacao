const search_button = document.querySelector("#search-bar_button");
const search_input = document.querySelector("#search-bar_input");
const movie_elements = Array.from(document.querySelector("#nominated-display-list").children);
const close_poster_view = document.querySelector("#close-poster-view");

function search(year) {
    var filtered = movie_elements.filter((element) => element.getAttribute("data-year") == year)
    
    if(filtered.length == 0) {
        movie_elements.forEach(element => {
            element.classList.remove('hidden');
        })
        return
    }

    movie_elements.forEach(element => {
        if(element.getAttribute("data-year") != year) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    });
}

search_input.addEventListener('keyup', () => search(search_input.value))
search_button.addEventListener('click', () => search(search_input.value))

function openPosterView(element) {
    element.classList.add('poster-view');
    close_poster_view.classList.remove('hidden');
}

function closePosterView() {
    close_poster_view.classList.add('hidden');
    movie_elements.forEach((element) => {
        element.classList.remove('poster-view');
    });
}

movie_elements.forEach((element) => {
    element.addEventListener('click', () => {
        if(element.classList.contains('poster-view')) {
            closePosterView();
        } else {
            openPosterView(element);
        }
    });
});

close_poster_view.addEventListener('click', closePosterView);

