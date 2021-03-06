const firstClassPlus = document.getElementById('firstClassPlus');
firstClassPlus.addEventListener('click', function () {
    plusMinusIncreaseDecrease('firstClass', 'firstClassTicketNumber', true);
})

const firstClassMinus = document.getElementById('firstClassMinus');
firstClassMinus.addEventListener('click', function () {
    plusMinusIncreaseDecrease('firstClass', 'firstClassTicketNumber', false);
})

const economyPlus = document.getElementById('economyPlus');
economyPlus.addEventListener('click', function () {
    plusMinusIncreaseDecrease('economy', 'economyTicketNumber', true);
})

const economyMinus = document.getElementById('economyMinus');
economyMinus.addEventListener('click', function () {
    plusMinusIncreaseDecrease('economy', 'economyTicketNumber', false);
})

function plusMinusIncreaseDecrease(ticket, id, increase) {
    let ticketNumber = parseInt(document.getElementById(id).value);
    if (ticket == 'firstClass') {
        if (increase == true) {
            let newTicketNumber = ticketNumber + 1;
            document.getElementById(id).value = newTicketNumber;
            calculation();

        }
        if (increase == false && ticketNumber > 0) {
            let newTicketNumber = ticketNumber - 1;
            document.getElementById(id).value = newTicketNumber;
            calculation();
        }

    }
    if (ticket == 'economy') {
        if (increase == true) {
            let newTicketNumber = ticketNumber + 1;
            document.getElementById(id).value = newTicketNumber;
            calculation();

        }
        if (increase == false && ticketNumber > 0) {
            let newTicketNumber = ticketNumber - 1;
            document.getElementById(id).value = newTicketNumber;
            calculation();

        }
    }
}

function calculation() {
    let subtotalValue = (document.getElementById('firstClassTicketNumber').value * 150) + (document.getElementById('economyTicketNumber').value * 100);
    document.getElementById('subtotal').innerText = subtotalValue;

    let vat = subtotalValue * 0.1;
    document.getElementById('vat').innerText = vat;

    let total = subtotalValue + vat;
    document.getElementById('total').innerText = total;
}

const bookingBtn = document.getElementById('bookingBtn').addEventListener('click', function () {
    document.getElementById('show').style.display = 'none';

    document.getElementById('hide').style.display = 'block';

    document.getElementById('showFirstClassTicketNumber').innerText = document.getElementById('firstClassTicketNumber').value;
    document.getElementById('showEconomyClassTicketNumber').innerText = document.getElementById('economyTicketNumber').value;
    document.getElementById('showSubtotal').innerText = document.getElementById('subtotal').innerText;
    document.getElementById('showVat').innerText = document.getElementById('vat').innerText;
    document.getElementById('showTotal').innerText = document.getElementById('total').innerText;
})
