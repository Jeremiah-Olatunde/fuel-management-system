
import { timeline } from "motion";

export function initializeSlotScreen(selector: string){
  const container = document.querySelector(selector);
  if(!(container instanceof HTMLElement)) throw new Error("CONTAINER RETRIEVAL ERROR");

  const items = Array.from(container.children) as HTMLElement[];


  let width = 0;
  let height = 0; 

  for(const item of items){
    if(!(item instanceof HTMLElement)) throw new Error("ITEM NOT HTML ELEMENT");

    const { width: w, height: h } = item.getBoundingClientRect();
    height = height < h ? h : height;
    width = width < w ? w : width;

    // item.style.position = "absolute";
    // item.style.transform = 'translateY(100%) scale(.75)';
    item.style.transform = 'scale(.75)';
  }

  container.style.height = `${height}px`;
  container.style.width = `${width + 19}px`;    
  // container.style.overflow = "hidden";    

  let active = items.find(item => item.classList.contains("active"));
  if(!active) throw new Error("PLEASE SPECIFY AN ACTIVE ELEMENT");
  // active.style.transform = "translateY(0) scale(1)";
  active.style.transform = "scale(1)";

  const observer = new MutationObserver((mutations) => {
    let prevIdx = 0;
    let activeIdx = 0;

    for(const { oldValue, target } of mutations){
      if(oldValue?.includes("active")) activeIdx = items.findIndex(item => item === target);
      else prevIdx = items.findIndex(item => item === target);
    }

    // timeline([
    //   [ items[activeIdx], { transform: [null, "translateY(0) scale(.75)"] } ],
    //   [ items[activeIdx], { transform: [null, `translateY(${(activeIdx - prevIdx) * 100}%) scale(.75)`] } ],
    //   [ items[prevIdx], { transform: [null, "translateY(0) scale(.75)"] }, { at: "<" }],
    //   [ items[prevIdx], { transform: [null, "translateY(0) scale(1)"] }],
    // ]);
    if (document.documentElement.clientWidth < 900) {
      timeline([
        [ items[activeIdx], { transform: "scale(.75)" } ],
        [ container, { top: `${(-prevIdx) * height}px` }],
        [ items[prevIdx], { transform: "scale(.75)" }, { at: "<" }],
        [ items[prevIdx], { transform: "scale(1)" }],
      ]);
    } else {
        timeline([
          [container, { top: `0px` }],
          [container, { width: `unset` }],
        ]);

        items.forEach(item => {
          item.style.transform = `scale(1)`;
        })
    }
  });

  observer.observe(container, {
    attributeFilter: ["class"],
    attributeOldValue: true,
    subtree: true,
  });
}

// function change(items: HTMLElement[], dir: -1 | 1) {
//   let activeIdx = items.findIndex(item => item.classList.contains("active"));
//   const nextIdx = activeIdx + dir;
//   if(nextIdx < 0 || items.length - 1 < nextIdx) return;

//   timeline([
//     [ items[activeIdx], { transform: [null, "translateY(0) scale(.75)"] } ],
//     [ items[activeIdx], { transform: [null, `translateY(${dir * -100}%) scale(.75)`] } ],
//     [ items[nextIdx], { transform: [null, "translateY(0) scale(.75)"] }, { at: "<" }],
//     [ items[nextIdx], { transform: [null, "translateY(0) scale(1)"] }],
//   ]);

//   items[activeIdx].classList.toggle("active");
//   items[nextIdx].classList.toggle("active");
// }
