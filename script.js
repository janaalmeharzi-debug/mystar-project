document.addEventListener("DOMContentLoaded", () => {
  // إشعار يظهر بعد ثانيتين
  const notification = document.getElementById("notification");
  if (notification) {
    setTimeout(() => {
      notification.classList.add("show");
    }, 2000);
  }

  // زر الانتقال للصفحة الثانية
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      window.location.href = "second.html"; // رابط مباشر
    });
  }

  // الفيد إن للنصوص
  setTimeout(() => {
    const elements = document.querySelectorAll(".fade-text");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, 1000 * (index + 1));
    });
  }, 100);

  // أيقونات + النص الإضافي
  const wrappers = document.querySelectorAll(".icon-wrapper");
  const extraText = document.getElementById("extra-text");

  if (wrappers.length > 0 && extraText) {
    wrappers.forEach(wrapper => {
      wrapper.addEventListener("click", () => {
        wrappers.forEach(w => w.classList.remove("active"));
        wrapper.classList.add("active");

        let text = wrapper.dataset.extra;
        let words = text.split(" ");
        extraText.innerHTML = "";
        extraText.style.opacity = 1;

        words.forEach((word, i) => {
          setTimeout(() => {
            const span = document.createElement("span");
            span.textContent = word;
            span.classList.add("word");
            extraText.appendChild(span);
            extraText.appendChild(document.createTextNode(" "));

            span.classList.add("bounce");
            setTimeout(() => {
              span.classList.remove("bounce");
            }, 500);
          }, i * 200);
        });
      });
    });

    extraText.addEventListener("mouseover", e => {
      if (e.target.classList.contains("word")) {
        e.target.classList.add("bounce");
        setTimeout(() => {
          e.target.classList.remove("bounce");
        }, 500);
      }
    });
  }

  // أيقونة يسار + الشات
  const leftIcon = document.getElementById("left-icon");
  const chatbox = document.getElementById("chatbox");
  const sendBtn = document.getElementById("sendBtn");
  const chatMessage = document.getElementById("chatMessage");
  const chatContent = document.querySelector(".chat-content");

  if (leftIcon) {
    leftIcon.addEventListener("click", () => {
      leftIcon.classList.add("flash");
      setTimeout(() => {
        leftIcon.classList.remove("flash");
      }, 500);

      // إظهار مربع المحادثة
      if (chatbox) {
        chatbox.style.display = "block";
      }
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const msg = chatMessage.value.trim();
      if (msg !== "") {
        const p = document.createElement("p");
        p.textContent = msg;
        chatContent.appendChild(p);
        chatMessage.value = "";
      }
    });
  }
});


