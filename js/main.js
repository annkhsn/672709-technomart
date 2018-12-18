    var link = document.querySelector(".maps-button");
    var popup = document.querySelector(".comment");
    var close = popup.querySelector(".close-btn");
    var mapLink = document.querySelector(".map-fon");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".map-close");
    var login = popup.querySelector("[name=name]");
    var form = popup.querySelector("form");
    var email = popup.querySelector("[name=email]");
    var text = popup.querySelector("[name=email-text]");
    var isStorageSupport = true;
    var storage = "";


    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storage) {
        login.value = storage;
        email.focus();
      } else {
        login.focus();
      }
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function(evt) {
      if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });



    mapLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show-map");
    });

    mapClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show-map");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show-map")) {
          mapPopup.classList.remove("modal-show-map");
        }
      }
    });

    var buylink = document.querySelectorAll(".buy");
    var buypopup = document.querySelector(".modal-basket");
    var buyclose = buypopup.querySelectorAll(".modal-close");
    for (var i = 0; i < buylink.length; i++) {
      buylink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        buypopup.classList.add("modal-show");

      });
    }
    for (var i = 0; i < buyclose.length; i++) {
      buyclose[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        buypopup.classList.remove("modal-show");

      });
    }
