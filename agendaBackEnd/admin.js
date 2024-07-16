const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

function displayAppointments() {
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';

    appointments.forEach(appointment => {
        const appointmentItem = document.createElement('li');
        appointmentItem.textContent = `Nome: ${appointment.name}, Email: ${appointment.email}, Data: ${appointment.date}, Hora: ${appointment.time}`;
        appointmentList.appendChild(appointmentItem);
    });
}

displayAppointments();