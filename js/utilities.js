function adjustBalance(amount) {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    document.getElementById('main-balance').innerText = mainBalance - amount;
}

function donationLog (amount, location) {
    const div = document.createElement('div');
    div.classList.add('border-4', 'p-2', 'mb-6', 'rounded-md', 'bg-gray-100');
    div.innerHTML = `<h1 class="font-bold text-xl">${amount} Taka is Donated to ${location}</h1>
    <p>${new Date()}</p>`;
    const historyLogs = document.getElementById('history-logs');
    historyLogs.appendChild(div);
     
}

//Page shifting upon button class change

function changePage(id) {
    // console.log(typeof id);
    if(id === 'donation-page') {
        const donationPage = document.getElementById(id);
        const historyPage = document.getElementById('history-page');
        donationPage.classList.add('btn-accent');
        historyPage.classList.remove('btn-accent');
        // section hiding and showing
        document.getElementById('donation-section').classList.remove('hidden');
        document.getElementById('history-logs').classList.add('hidden');
    }
    else {
        const donationPage = document.getElementById('donation-page');
        const historyPage = document.getElementById(id);
        donationPage.classList.remove('btn-accent');
        historyPage.classList.add('btn-accent');
        // section hiding and showing
        document.getElementById('donation-section').classList.add('hidden');
        document.getElementById('history-logs').classList.remove('hidden');
    }
}

// Redirect Page 
function goBlog() {
  location.replace("/blog.html")
}
function goHome() {
  location.replace("/index.html")
}