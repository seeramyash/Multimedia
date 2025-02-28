document.getElementById("showToastBtn").addEventListener("click", function () {
    var toast = new bootstrap.Toast(document.getElementById("myToast"));
    toast.show();
});

function showMessage() {
    window.alert("Thank you for contacting us. We will get back to you soon.");
}