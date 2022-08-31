$('#searchForm').submit(function (evt){
    evt.preventDefault();

    const address = $(this).attr('action');
    const input = $(this).serialize();
    const url = address + '?' + input;

    $.getJSON(url, function(movies){
        $.each(movies, function(i, movie){
            console.log(movie); // nimi, linkki sivuille (officialSite), 
            $('#result').append(`<h3>${movie.show.name}</h3>`);
            const site = movie.show.officialSite || movie.show.url;
            $('#result').append(`<a href="${site}">${site}</a><br>`);
            $('#result').append(`<img src="${movie.show.image.medium}"></img>`);
            $('#result').append(`<p>${movie.show.summary}</p>`);
            $('#result').append(`<p>Genres: ${movie.show.genres}</p>`);
        });
    });
});