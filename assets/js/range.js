/*========================
    range js
==========================*/
// const onInput = (parent, e) => {
//   const slides = parent.querySelectorAll("input");
//   const min = parseFloat(slides[0].min);
//   const max = parseFloat(slides[1].max);

  
//   if(min>=max) return 
//   let slide1 = parseFloat(slides[0].value);

//   let slide2 = parseFloat(slides[1].value);

//   const percentageMin = (slide1 / (max - min)) * 100;
//   const percentageMax = (slide2 / (max - min)) * 100;

//   console.log("percentageMin", percentageMin, "slide1", slide1);
//   parent.style.setProperty("--range-slider-value-low", percentageMin);
//   parent.style.setProperty("--range-slider-value-high", percentageMax);

//   if (slide1 > slide2) {
//     const tmp = slide2;
//     slide2 = slide1;
//     slide1 = tmp;

//     if (e?.currentTarget === slides[0]) {
//       slides[0].insertAdjacentElement("beforebegin", slides[1]);
//     } else {
//       slides[1].insertAdjacentElement("afterend", slides[0]);
//     }
//   }

//   const displayElement = parent.querySelector(".range-slider-display");
//   if (displayElement) {
//     displayElement.setAttribute("data-low", slide1);
//     displayElement.setAttribute("data-high", slide2);
//   }
// };

// const onInput = (parent, e) => {
//   const slides = parent.querySelectorAll("input");
//   const min = parseFloat(slides[0].min);
//   const max = parseFloat(slides[1].max);

//   let slide1 = parseFloat(slides[0].value);
//   let slide2 = parseFloat(slides[1].value);

//   // Ensure min value cannot exceed max
//   if (slide1 > slide2) {
//     if (e?.currentTarget === slides[0]) {
//       slide1 = slide2;
//       slides[0].value = slide1;
//     } else {
//       slide2 = slide1;
//       slides[1].value = slide2;
//     }
//   }

//   const percentageMin = ((slide1 - min) / (max - min)) * 100;
//   const percentageMax = ((slide2 - min) / (max - min)) * 100;

//   parent.style.setProperty("--range-slider-value-low", percentageMin);
//   parent.style.setProperty("--range-slider-value-high", percentageMax);

//   const displayElement = parent.querySelector(".range-slider-display");
//   if (displayElement) {
//     displayElement.setAttribute("data-low", slide1);
//     displayElement.setAttribute("data-high", slide2);
//   }
// };
// addEventListener("DOMContentLoaded", (event) => {
//   document.querySelectorAll(".range-slider").forEach((range) =>
//     range.querySelectorAll("input").forEach((input) => {
//       if (input.type === "range") {
//         input.oninput = (e) => onInput(range, e);
//         onInput(range);
//       }
//     })
//   );
// });



const onInput = (parent, e) => {
  const slides = parent.querySelectorAll("input");
  const min = parseFloat(slides[0].min);
  const max = parseFloat(slides[1].max);

  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);

  // Ensure min value cannot exceed max
  if (slide1 > slide2) {
    if (e?.currentTarget === slides[0]) {
      slide1 = slide2;
      slides[0].value = slide1;
    } else {
      slide2 = slide1;
      slides[1].value = slide2;
    }
  }

  const percentageMin = ((slide1 - min) / (max - min)) * 100;
  const percentageMax = ((slide2 - min) / (max - min)) * 100;

  parent.style.setProperty("--range-slider-value-low", percentageMin);
  parent.style.setProperty("--range-slider-value-high", percentageMax);

  const displayElement = parent.querySelector(".range-slider-display");
  if (displayElement) {
    displayElement.setAttribute("data-low", slide1);
    displayElement.setAttribute("data-high", slide2);

    // Adjust label positions dynamically
    displayElement.innerHTML = `
      <span class="value" style="left: ${percentageMin}%">${slide1}</span>
      <span class="value" style="right: ${percentageMax}%">${slide2}</span>
    `;
  }
};

addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".range-slider").forEach((range) =>
    range.querySelectorAll("input").forEach((input) => {
      if (input.type === "range") {
        input.oninput = (e) => onInput(range, e);
        onInput(range);
      }
    })
  );
});
