const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const telefone = document.getElementById('telefone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (isSlotAvailable(date, time)) {
        const appointment = { name, telefone, date, time };
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        displayAppointments();

        this.reset();
    } else {
        alert('Este horário já está agendado. Por favor, escolha outro.');
    }
});

function isSlotAvailable(date, time) {
    return !appointments.some(appointment => appointment.date === date && appointment.time === time);
}

function displayAppointments() {
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';

    appointments.forEach(appointment => {
        const appointmentItem = document.createElement('li');
        appointmentItem.textContent = `Nome: ${appointment.name}, Telefone: ${appointment.telefone}, Data: ${appointment.date}, Hora: ${appointment.time}`;
        appointmentList.appendChild(appointmentItem);
    });
}

displayAppointments();