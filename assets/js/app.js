(function (w) {
  function setHospital(obj) {
    try {
      localStorage.setItem("hospital", JSON.stringify(obj));
      console.log("Hospital set to:", obj);
    } catch (e) {}
  }
  function getHospital() {
    try {
      console.log("Hospital get:", localStorage.getItem("hospital"));
      return (
        JSON.parse(localStorage.getItem("hospital")) || {
          name: "Your Hospital",
          url: "https://example.org",
          logofile: "assets/img/hospital-logo.png",
        }
      );
    } catch (e) {
      return { name: "Your Hospital", url: "https://example.org" };
    }
  }
  function setPatientPurpose(purpose) {
    try {
      localStorage.setItem("patientPurpose", purpose);
    } catch (e) {}
  }
  function resetPatientPurpose() {
    try {
      localStorage.removeItem("patientPurpose");
    } catch (e) {}
  }
  function getPatientPurpose() {
    try {
      return localStorage.getItem("patientPurpose") || null;
    } catch (e) {
      return null;
    }
  }
  function applyHeader() {
    var h = getHospital();
    var title = document.querySelector("[data-hospital-name]");
    var link = document.querySelector("[data-hospital-link]");
    var logo = document.querySelector("[data-hospital-logo]");
    console.log(h);
    if (logo) logo.src = "/assets/img/" + h.logofile;
    if (title) title.textContent = h.name;
    if (link) link.href = h.url;
  }
  function go(href) {
    window.location.assign(href);
  }
  function params() {
    try {
      return Object.fromEntries(new URLSearchParams(location.search).entries());
    } catch (e) {
      return {};
    }
  }
  function share(text) {
    if (navigator.share) {
      navigator
        .share({ title: document.title, text: text || "", url: location.href })
        .catch(function () {});
    } else {
      alert("Share is not supported on this browser.");
    }
  }
  w.App = {
    setHospital: setHospital,
    getHospital: getHospital,
    applyHeader: applyHeader,
    go: go,
    params: params,
    share: share,
    getPatientPurpose: getPatientPurpose,
    setPatientPurpose: setPatientPurpose,
    resetPatientPurpose: resetPatientPurpose,
  };
})(window);
