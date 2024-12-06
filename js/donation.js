document.getElementById('noakhali-btn').addEventListener('click', function () {
    const input = parseFloat(document.getElementById('noakhali-input').value);
    const currentAmount = parseFloat(document.getElementById('noakhali-amount').innerText);
    const location = document.getElementById('location1').innerText;
    
    if (input && !isNaN(input) && input > 0) {
        document.getElementById('noakhali-amount').innerText = currentAmount + input;
        document.getElementById('noakhali-input').value = '';
        donationLog(input, location);
    }
    else {
        alert('Please enter a valid amount');
    }
    adjustBalance(input);
});





document.getElementById('feni-btn').addEventListener('click', function () {
    const input = parseFloat(document.getElementById('feni-input').value);
    const currentAmount = parseFloat(document.getElementById('feni-amount').innerText);
    const location = document.getElementById('location2').innerText;

    if (input && !isNaN(input) && input > 0) {
        document.getElementById('feni-amount').innerText = currentAmount + input;
        document.getElementById('feni-input').value = '';
        donationLog(input, location);
    }
    else {
        alert('Please enter a valid amount');
    }
    adjustBalance(input);
});

document.getElementById('quota-btn').addEventListener('click', function () {
    const input = parseFloat(document.getElementById('quota-input').value);
    const currentAmount = parseFloat(document.getElementById('quota-amount').innerText);
    const location = document.getElementById('location3').innerText;

    if (input && !isNaN(input) && input > 0) {
        document.getElementById('quota-amount').innerText = currentAmount + input;
        document.getElementById('quota-input').value = '';
        donationLog(input, location);
    }
    else {
        alert('Please enter a valid amount');
    }
    adjustBalance(input);
});