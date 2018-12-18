    var link = document.querySelector(".maps-button");
    var popup = document.querySelector(".comment");
    var close = document.querySelector(".close-btn");
    var mapLink = document.querySelector(".map-fon");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = document.querySelector(".map-close");
    var login = document.querySelector("[name=name]");
    var form = document.querySelector(".comment-form");
    var email = document.querySelector("[name=email]");
    var text = document.querySelector("[name=email-text]");
    var buylink = document.querySelectorAll(".buy");
    var buypopup = document.querySelector(".modal-basket");
    var buyclose = document.querySelectorAll(".modal-close");
    for (var i = 0; i < buylink.length; i++) {
      buylink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        buypopup.classList.add("modal-show");

      });
    }
    if (buyclose) {
      for (var i = 0; i < buyclose.length; i++) {
        buyclose[i].addEventListener("click", function(evt) {
          evt.preventDefault();
          if (buypopup) {
            buypopup.classList.remove("modal-show");
          }
        });
      }
    }
    var isStorageSupport = true;
    var storage = "";


    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    if (link) {
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
    }

    if (close) {
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
    }

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });


    if (mapLink) {
      mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show-map");
      });

      mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show-map");
      });
    }

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
        }
      }
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show-map")) {
          mapPopup.classList.remove("modal-show-map");
        }
      }
    });
