function adjustBalance(amount) {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    document.getElementById('main-balance').innerText = mainBalance - amount;
}

function donationLog (amount, location) {
    const div = document.createElement('div');
    div.classList.add('border-2', 'p-2', 'mb-4', 'rounded-md');
    div.innerHTML = `<h1 class="font-bold text-xl">${amount} Taka is Donated to ${location}</h1>
    <p>${new Date()}</p>`;
    const historyLogs = document.getElementById('history-logs');
    historyLogs.appendChild(div);
     
}