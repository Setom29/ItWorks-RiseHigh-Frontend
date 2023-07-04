
const results = $("#results")

$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, parking, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    
    results.empty()
    console.log(apartments) //array of apartments to render
    const template = Handlebars.compile($('#apartment-template').html())
    const newHTML = template({apartments});
    results.append(newHTML);
}

renderApts(apartments) //renders apartments when page loads