// Enquiry form validation + cost/availability response
// Part 3 - JavaScript functionality

var serviceInfo = {
    solar: {
        price: 'R45 000 – R120 000',
        availability: '3 – 5 business days',
        note: 'Price depends on the number of panels and your property size. We will do a free site assessment before giving you a final quote.'
    },
    battery: {
        price: 'R25 000 – R60 000',
        availability: '2 – 3 business days',
        note: 'We stock multiple brands and capacities. A consultant will contact you to find the best fit for your needs.'
    },
    maintenance: {
        price: 'R1 500 per visit',
        availability: 'Within 7 business days',
        note: 'Includes a full system inspection, panel cleaning, and a written performance report.'
    },
    consultation: {
        price: 'Free',
        availability: 'Within 2 business days',
        note: 'One of our energy consultants will reach out to discuss your needs and design a custom solution at no cost.'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('enquiryForm');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        clearErrors();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var interest = document.getElementById('interest').value;
        var isValid = true;

        if (name.length < 2) {
            showError('nameError', 'Please enter your full name');
            isValid = false;
        }

        // basic email check - i looked this up on MDN
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('emailError', 'That email address does not look right');
            isValid = false;
        }

        if (!isValid) return;

        var info = serviceInfo[interest];
        var selectedLabel = document.getElementById('interest').options[document.getElementById('interest').selectedIndex].text;

        var responseDiv = document.getElementById('enquiryResponse');
        responseDiv.innerHTML =
            '<h3>Thanks, ' + name + '!</h3>' +
            '<p>Here is what we can offer for <strong>' + selectedLabel + '</strong>:</p>' +
            '<table class="response-table">' +
            '<tr><th>Estimated Cost</th><td>' + info.price + '</td></tr>' +
            '<tr><th>Availability</th><td>' + info.availability + '</td></tr>' +
            '</table>' +
            '<p class="response-note">' + info.note + '</p>' +
            '<p>We will also send more details to <strong>' + email + '</strong> within 24 hours.</p>';

        responseDiv.style.display = 'block';
        responseDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

        form.reset();
    });
});

function showError(id, message) {
    var el = document.getElementById(id);
    if (el) el.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(function (el) {
        el.textContent = '';
    });
}
