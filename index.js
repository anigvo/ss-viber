const questions = [
  {
    title: "1. Что такое чат-бот Viber и зачем он мне нужен?",
    text: "Чат-бот — это виртуальный помощник, который обеспечивает удобное взаимодействие с пользователями в мессенджере Viber. Он помогает автоматизировать рутинные задачи, сократить время ответа на запросы клиентов и улучшить пользовательский опыт.",
  },
  {
    title: "2. Как работают чат-боты?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "3. Сколько стоит переход на коммерческую модель чат-ботов в Viber? ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "4. Какова стоимость доставки исходящих сообщений?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "5. Что такое «приветственное сообщение» и как оно работает?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "6. Что такое «сообщение, инициированное чат-ботом»?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "7. Что такое «диалоговая сессия»?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "8. Что такое «платные сообщения» и как они работают?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "9. Что такое «платные сообщения» и как они работают?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "10. Буду ли я платить за ответы пользователям?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const questionList = document.querySelector(`.faq__list`);

const questionItem = questions.map((question, index) => {
  addQuestionToList(question, index);
});

function addQuestionToList({ title, text }, index) {
  questionList.insertAdjacentHTML(
    `beforeend`,
    `<li id="${index}" class="faq__item">
    <div class="faq__wrapper">
      <h3 class="faq__title faq__title--secondary">
        ${title}
      </h3>
        <img
            id="up"
          class="faq__img visually-hidden"
          src="./images/svg/arrow-circle-down.svg"
          alt="Arrow"
        />
        <img
        id="down"
          class="faq__img"
          src="./images/svg/arrow-circle-down-transparent.svg"
          alt="Arrow"
        />
    </div>
    <p class="faq__text visually-hidden">
      ${text}
    </p>
  </li>`
  );
}

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((faqItem) => {
  const faqText = faqItem.querySelector(".faq__text");
  const imgUp = faqItem.querySelector("#up");
  const imgDown = faqItem.querySelector("#down");

  faqItem.addEventListener("click", () => {
    faqItem.classList.toggle("faq__item--active");
    imgUp.classList.toggle("visually-hidden");
    imgDown.classList.toggle("visually-hidden");
    faqText.classList.toggle("visually-hidden");
  });
});
