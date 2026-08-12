const categories = [
  {
    id: 'honest',
    label: 'วิธีง้อแบบจริงใจ 💌',
    title: 'บางครั้งคำขอโทษที่จริงใจ อาจมีค่ามากกว่าของแพงๆ',
    description: 'คำขอโทษจากใจจะทำให้เขารู้สึกว่าคุณใส่ใจและตั้งใจเปลี่ยนตัวเอง',
    steps: [
      {
        title: '01 — ยอมรับความผิด',
        desc: 'อย่าเพิ่งรีบแก้ตัว ถ้าสิ่งที่เราทำทำให้เขาเสียใจ ก็ยอมรับตรงๆ ว่าเราผิด'
      },
      {
        title: '02 — ขอโทษจากใจ',
        desc: 'พูดคำขอโทษให้ชัดเจน ไม่ใช่แค่พูดว่า “ขอโทษละกัน” แต่บอกเขาว่าเราเสียใจเรื่องอะไร'
      },
      {
        title: '03 — ฟังเขา',
        desc: 'ให้เขาได้พูดความรู้สึกออกมา อย่าเพิ่งเถียงหรือขัด'
      },
      {
        title: '04 — พิสูจน์ด้วยการกระทำ',
        desc: 'คำพูดอาจทำให้เขาหายโกรธ แต่การกระทำจะทำให้เขากลับมาเชื่อใจ'
      }
    ]
  },
  {
    id: 'cute',
    label: 'วิธีง้อแบบน่ารัก 🌷',
    title: 'ความน่ารักช่วยละลายความโกรธได้อย่างอ่อนโยน',
    description: 'เลือกคำพูดและการกระทำที่ทำให้บรรยากาศเบาลงและอบอุ่นขึ้น',
    steps: [
      {
        title: '01 — สร้างบรรยากาศหวานๆ',
        desc: 'ส่งข้อความหรือของเล็กๆ ที่ทำให้เธอยิ้ม โดยไม่ดึงดันมากเกินไป'
      },
      {
        title: '02 — เอาใจด้วยความตั้งใจ',
        desc: 'เลือกสิ่งที่เธอชอบ เช่น ขนม ดอกไม้ หรือเพลงที่เธอรัก'
      },
      {
        title: '03 — ใช้น้ำเสียงนุ่มนวล',
        desc: 'พูดด้วยท่าทีที่อ่อนโยนและให้ความอบอุ่นมากกว่าความจริงจัง'
      },
      {
        title: '04 — เพิ่มท่าทางน่ารัก',
        desc: 'คำพูดเล็กๆ น้อยๆ ที่แสดงความหวังดี จะช่วยให้บรรยากาศอ่อนโยนขึ้น'
      }
    ]
  },
  {
    id: 'deep',
    label: 'วิธีง้อหลังทะเลาะหนัก 🫶',
    title: 'สเต็ปหนักหน่อย แต่ต้องจริงใจและไม่เร่งรีบ',
    description: 'เวลาที่ทะเลาะหนัก ต้องให้เวลา เขาฟัง และชัดเจนว่าคุณต้องการคืนดีจริงๆ',
    steps: [
      {
        title: '01 — ยอมรับความรู้สึกของเขา',
        desc: 'บอกว่าเข้าใจว่าการทะเลาะครั้งนี้ทำให้เขาเจ็บปวดอย่างไร'
      },
      {
        title: '02 — ขอเวลาเยียวยา',
        desc: 'ไม่ต้องดึงเขากลับมาทันที ให้เขารู้ว่าคุณพร้อมรอและเข้าใจ'
      },
      {
        title: '03 — บอกว่าคุณจะเปลี่ยน',
        desc: 'สื่อสารว่าคุณเห็นจุดที่ควรปรับและจะตั้งใจทำให้ดีขึ้น'
      },
      {
        title: '04 — ทำให้เห็นด้วยการกระทำ',
        desc: 'การกระทำที่สม่ำเสมอหลังจากนี้สำคัญกว่าคำพูดเพียงครั้งเดียว'
      }
    ]
  },
  {
    id: 'deluxe',
    label: 'วิธีง้อแบบจัดเต็ม 🎁',
    title: 'พร้อมทำทุกอย่างเพื่อให้เขากลับมายิ้มอีกครั้ง',
    description: 'การง้อแบบจัดเต็มคือการใช้ทั้งคำพูดของขวัญและการใส่ใจร่วมกัน',
    steps: [
      {
        title: '01 — เตรียมของขวัญเล็กๆ',
        desc: 'เลือกของที่เขาชอบและใส่ความหมายเข้าไปให้ชัดเจน'
      },
      {
        title: '02 — สร้างบรรยากาศพิเศษ',
        desc: 'เช่น จัดโต๊ะอาหารเล็กๆ เปิดเพลงเบาๆ ให้บรรยากาศอบอุ่น'
      },
      {
        title: '03 — พูดถึงความรู้สึกและอนาคต',
        desc: 'บอกว่าอยากให้เราดีกว่าเดิมและพร้อมเดินไปด้วยกัน'
      },
      {
        title: '04 — ปิดท้ายด้วยคำว่า “เรา”',
        desc: 'ย้ำว่าเขาไม่ได้อยู่คนเดียว คุณจะอยู่ข้างเขาเสมอ'
      }
    ]
  }
];

const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const summaryView = document.getElementById('summary-view');
const categoryLabel = document.getElementById('category-label');
const categoryTitle = document.getElementById('category-title');
const categoryDescription = document.getElementById('category-description');
const slideWrapper = document.getElementById('slide-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressLabel = document.getElementById('progress-label');
const homeBtn = document.getElementById('home-btn');
const overlay = document.getElementById('transition-overlay');
const categoryButtons = document.querySelectorAll('[data-category]');

let currentCategoryIndex = 0;
let currentStepIndex = 0;
let isTransitioning = false;
let isSliding = false;
let touchStartX = 0;
let touchEndX = 0;

function getCategoryIndexById(id) {
  return categories.findIndex((item) => item.id === id);
}

function createSlideCard(step) {
  const card = document.createElement('article');
  card.className = 'slide-card';
  card.innerHTML = `
    <span class="step-label">${step.title}</span>
    <h2>${step.desc.split(' ')[0] ? step.title : ''}</h2>
    <p class="slide-copy">${step.desc}</p>
  `;
  return card;
}

function updateDetailContent(direction) {
  const category = categories[currentCategoryIndex];
  categoryLabel.textContent = category.label;
  categoryTitle.textContent = category.title;
  categoryDescription.textContent = category.description;
  progressLabel.textContent = `${currentStepIndex + 1} / ${category.steps.length}`;
  prevBtn.disabled = currentStepIndex === 0;
  nextBtn.textContent = currentStepIndex === category.steps.length - 1 ? 'สรุป' : 'ถัดไป →';

  const nextCard = createSlideCard(category.steps[currentStepIndex]);
  nextCard.classList.add(direction === 'next' ? 'enter-from-right' : 'enter-from-left');
  slideWrapper.appendChild(nextCard);

  requestAnimationFrame(() => {
    nextCard.classList.add('active');
  });

  const currentCard = slideWrapper.querySelector('.slide-card.current');
  if (currentCard) {
    currentCard.classList.add(direction === 'next' ? 'exit-to-left' : 'exit-to-right');
    currentCard.classList.remove('current');
  }

  nextCard.addEventListener(
    'transitionend',
    () => {
      if (currentCard && slideWrapper.contains(currentCard)) {
        slideWrapper.removeChild(currentCard);
      }
      nextCard.classList.remove('enter-from-right', 'enter-from-left', 'active');
      nextCard.classList.add('current');
      isSliding = false;
    },
    { once: true }
  );
}

function showView(viewToShow) {
  homeView.classList.add('hidden');
  detailView.classList.add('hidden');
  summaryView.classList.add('hidden');

  if (viewToShow === 'home') {
    homeView.classList.remove('hidden');
  } else if (viewToShow === 'detail') {
    detailView.classList.remove('hidden');
  } else if (viewToShow === 'summary') {
    summaryView.classList.remove('hidden');
  }
}

function playTransition(callback) {
  if (isTransitioning) return;
  isTransitioning = true;
  overlay.classList.add('active');

  setTimeout(() => {
    callback();
  }, 380);

  setTimeout(() => {
    overlay.classList.remove('active');
  }, 900);

  setTimeout(() => {
    isTransitioning = false;
  }, 980);
}

function startDetail(categoryIndex) {
  currentCategoryIndex = categoryIndex;
  currentStepIndex = 0;
  showView('detail');
  slideWrapper.innerHTML = '';
  updateDetailContent('next');
}

function showSummary() {
  showView('summary');
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const categoryId = button.dataset.category;
    const index = getCategoryIndexById(categoryId);
    if (index === -1 || isTransitioning) return;

    playTransition(() => {
      startDetail(index);
    });
  });
});

prevBtn.addEventListener('click', () => {
  if (isSliding || currentStepIndex === 0) return;
  isSliding = true;
  currentStepIndex -= 1;
  updateDetailContent('prev');
});

nextBtn.addEventListener('click', () => {
  const category = categories[currentCategoryIndex];
  if (isSliding) return;

  if (currentStepIndex === category.steps.length - 1) {
    playTransition(() => {
      showSummary();
    });
    return;
  }

  isSliding = true;
  currentStepIndex += 1;
  updateDetailContent('next');
});

homeBtn.addEventListener('click', () => {
  if (isTransitioning) return;
  playTransition(() => {
    showView('home');
  });
});

function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) < 40) return;

  if (diff < 0) {
    nextBtn.click();
  } else {
    prevBtn.click();
  }
}

slideWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
slideWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });

function initializeHome() {
  showView('home');
}

initializeHome();
