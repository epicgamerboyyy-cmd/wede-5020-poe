// Contact form - validates all fields and compiles a mailto link
// Part 3 - JavaScript functionality

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        clearContactErrors();

        var name = document.getElementById('cname').value.trim();
        var email = document.getElementById('cemail').value.trim();
        var phone = document.getElementById('cphone').value.trim();
        var msgType = document.getElementById('msgtype').value;
        var message = document.getElementById('cmessage').value.trim();
        var valid = true;

        if (name.length < 2) {
            showContactError('cnameError', 'Please enter your name');
            valid = false;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showContactError('cemailError', 'Please enter a valid email address');
            valid = false;
        }

        // phone is optional - only validate if they typed something
        if (phone !== '') {
            // SA numbers: starts with 0 or +27, then 9 digits
            var phonePattern = /^(\+27|0)[6-8][0-9]{8}$/;
            if (!phonePattern.test(phone.replace(/[\s-]/g, ''))) {
                showContactError('cphoneError', 'Please enter a valid South African number (e.g. 072 210 4642)');
                valid = false;
            }
        }

        if (message.length < 10) {
            showContactError('cmessageError', 'Message is too short — please give us a bit more detail');
            valid = false;
        }

        if (!valid) return;

        // put together the email subject and body
        var subject = '[' + msgType + '] from ' + name;

        var body = 'Name: ' + name + '\r\n'
            + 'Email: ' + email + '\r\n';
        if (phone) body += 'Phone: ' + phone + '\r\n';
        body += 'Message Type: ' + msgType + '\r\n\r\n'
            + 'Message:\r\n' + message;

        // build the mailto link and open the email client
        var mailtoLink = 'mailto:info@solarsolutions.co.za'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        window.location.href = mailtoLink;

        var successEl = document.getElementById('contactSuccess');
        if (successEl) {
            successEl.style.display = 'block';
            successEl.scrollIntoView({ behavior: 'smooth' });
        }

        form.reset();
    });
});

function showContactError(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function clearContactErrors() {
    document.querySelectorAll('.error').forEach(function (el) {
        el.textContent = '';
    });
}
