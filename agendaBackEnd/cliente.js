const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (isSlotAvailable(date, time)) {
        const appointment = { name, email, date, time };
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        alert('Agendamento realizado com sucesso!');
        displayAvailableSlots();
        this.reset();
    } else {
        alert('Este horário já está agendado. Por favor, escolha outro.');
    }
});

function isSlotAvailable(date, time) {
    return !appointments.some(appointment => appointment.date === date && appointment.time === time);
}

function displayAvailableSlots() {
    const slotList = document.getElementById('slotList');
    slotList.innerHTML = '';

    // Exemplo: Disponibilizar horários de 9h às 17h
    const hours = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const date = new Date().toISOString().split('T')[0]; // Data atual

    hours.forEach(hour => {
        if (isSlotAvailable(date, hour)) {
            const slotItem = document.createElement('li');
            slotItem.textContent = `${date} - ${hour}`;
            slotList.appendChild(slotItem);
        }
    });
}

displayAvailableSlots();