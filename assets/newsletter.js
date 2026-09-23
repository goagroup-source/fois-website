(function () {
    // FOIS newsletter signup handler (Formspree)
    // To go live: create a free form at https://formspree.io, then replace
    // YOUR_FORM_ID below with the real form ID (e.g. https://formspree.io/f/abcdwxyz).
    // All newsletter forms on the site share this one endpoint/file.
    var NEWSLETTER_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
    var CONTACT_EMAIL = "hello@futureofinteriorspaces.com";

    function init() {
        var form = document.getElementById('newsletterForm');
        if (!form) return;

        var msg = form.parentElement.querySelector('.newsletter-msg');
        if (!msg) {
            msg = document.createElement('p');
            msg.className = 'newsletter-msg';
            msg.style.display = 'none';
            form.insertAdjacentElement('afterend', msg);
        }

        function showMessage(text, color) {
            form.style.display = 'none';
            msg.style.display = 'block';
            msg.style.color = color || 'var(--gold)';
            msg.style.fontFamily = "'Inter', sans-serif";
            msg.style.fontSize = '0.9rem';
            msg.textContent = text;
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (NEWSLETTER_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) {
                showMessage("Sign-ups aren't live yet — email " + CONTACT_EMAIL + " and we'll add you directly.", 'var(--slate)');
                return;
            }

            var btn = form.querySelector('button[type="submit"]');
            var originalLabel = btn ? btn.textContent : '';
            if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

            fetch(NEWSLETTER_ENDPOINT, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form)
            }).then(function (res) {
                if (res.ok) {
                    showMessage('Thank you — you’re on the list.');
                } else {
                    throw new Error('Request failed');
                }
            }).catch(function () {
                if (btn) { btn.disabled = false; btn.textContent = originalLabel; }
                showMessage('Something went wrong — please email ' + CONTACT_EMAIL + ' instead.', 'var(--slate)');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
