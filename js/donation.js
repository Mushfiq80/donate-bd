
// operation for all donation cards 
document.querySelectorAll('.donation-card').forEach((card) => {
    const id = card.dataset.id;
    
// Now trigger upon button click event
    card.querySelector('.donate-btn').addEventListener('click', function () {
        const input = parseFloat(card.querySelector(`#${id}-input`).value);
        const amountElement = card.querySelector(`#${id}-amount`);
        const currentAmount = parseFloat(amountElement.innerText);
        const location = card.querySelector(`#location1, #location2, #location3`).innerText;

        if (input && !isNaN(input) && input > 0) {
            amountElement.innerText = currentAmount + input;
            card.querySelector(`#${id}-input`).value = '';
            donationLog(input, location);
            const modal = document.getElementById('my_modal_5');
            modal.showModal();
            
        } else {
            card.querySelector(`#${id}-input`).value = '';
            alert('Please enter a valid amount');
        }
        adjustBalance(input);
    });
});
