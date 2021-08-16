const cetificatesPopup = document.querySelector('.certificates')
const certificatesPopupCloser = document.querySelector('.js-close-certificates')
const certificatesPopupOpener = document.querySelector('.js-open-certificates')

function closeCertificatesPopup() {
  cetificatesPopup.classList.remove('certificates--open')
}

function openCertificatesPopup() {
  cetificatesPopup.classList.add('certificates--open')
}

certificatesPopupOpener.addEventListener('click', openCertificatesPopup)
certificatesPopupCloser.addEventListener('click', closeCertificatesPopup)
