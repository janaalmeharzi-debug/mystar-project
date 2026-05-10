document.addEventListener("DOMContentLoaded", function() {
  const notification = document.getElementById("notification");

  // بعد ثانيتين يظهر الإشعار
  setTimeout(() => {
    notification.classList.add("show");
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
  // زر الانتقال للصفحة الثانية
  const nextBtn = document.getElementById("nextBtn");

  // عند الضغط على الزر → ينقلك للصفحة الثانية
  nextBtn.addEventListener("click", () => {
    window.location.href = "/second"; 
  });

  // الإشعار يبقى كزينة فقط، بدون أي حدث
});


document.addEventListener("DOMContentLoaded", function() {
  // الفيد إن للصفحة
  setTimeout(() => {
    document.body.classList.add("show");

    // النصوص + الإيقونات بتسلسل
    const elements = document.querySelectorAll(".fade-text");
    elements.forEach((el, index) => {
      setTimeout(() => {
        if (el) { // نتأكد إن العنصر موجود
          el.classList.add("show");
        }
      }, 1000 * (index + 1));
    });
  }, 100);
});


document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".icon-wrapper");
  const extraText = document.getElementById("extra-text");

  wrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      if (wrapper.classList.contains("active")) {
        wrapper.classList.remove("active");
        extraText.style.opacity = 0;
      } else {
        wrappers.forEach(w => w.classList.remove("active"));
        wrapper.classList.add("active");

        setTimeout(() => {
          let text = wrapper.dataset.extra;
          let words = text.split(" ");
          if (words.length > 15) {
            // إدخال سطر جديد بعد الكلمة الخامسة عشرة
            words.splice(15, 0, "<br>");
          }
          extraText.innerHTML = words.join(" ");
          extraText.style.opacity = 1;
        }, 1000);
      }
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".icon-wrapper");
  const extraText = document.getElementById("extra-text");

  wrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      if (wrapper.classList.contains("active")) {
        // إذا كانت مضغوطة بالفعل → رجوع للوضع الطبيعي
        wrapper.classList.remove("active");
        extraText.innerHTML = "";
        extraText.style.opacity = 0;
      } else {
        // إزالة الحالة من كل الأيقونات
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

            // القفزة + تغيير اللون عند أول ظهور
            span.classList.add("bounce");
            setTimeout(() => {
              span.classList.remove("bounce");
            }, 500);
          }, i * 200);
        });
      }
    });
  });

  // القفزة + اللون عند المرور بالماوس
  extraText.addEventListener("mouseover", e => {
    if (e.target.classList.contains("word")) {
      e.target.classList.add("bounce");
      setTimeout(() => {
        e.target.classList.remove("bounce");
      }, 500);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const leftIcon = document.getElementById("left-icon");

  leftIcon.addEventListener("click", () => {
    leftIcon.classList.add("flash");
    setTimeout(() => {
      leftIcon.classList.remove("flash");
    }, 500); // ترجع لشكلها الطبيعي بعد نصف ثانية
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const leftIcon = document.getElementById("left-icon");
  const newContent = document.getElementById("new-content");

  leftIcon.addEventListener("click", () => {
    // فيد آوت للصفحة
    document.body.classList.add("fade-out");

    // بعد ثانية → إظهار المحتوى الجديد بفيد إن
    setTimeout(() => {
      document.body.innerHTML = "";
      document.body.appendChild(newContent);
      newContent.style.display = "block";
      setTimeout(() => {
        newContent.style.opacity = 1;
      }, 50);
    }, 1000);
  });
});
