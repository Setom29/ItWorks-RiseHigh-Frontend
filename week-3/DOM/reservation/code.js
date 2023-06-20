const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}


function checkReservation() {
    const Name = document.getElementById("name").value;
    const name = Name.toLowerCase();
    const reactionLabel = document.getElementById("reservationAnswer")
    if (name in reservations) {
        if (reservations[name].claimed) {
            reactionLabel.innerHTML = ("Sorry, " + Name + " someone already claimed this reservation");
        } else {
            reactionLabel.innerHTML = ("Welcome " + Name);
        }
    } else {
        reservations[name] = { claimed: true };
        reactionLabel.innerHTML = ("Welcome, new customer " + Name);
        console.log(reservations);
    };
    return true;
}