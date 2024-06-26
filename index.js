const questions = [
  {
    title: "2. Как работают чат-боты?",
    text: "Чат-боты работают на основе набора инструкций, имитируя общение с живым человеком 24/7.  Создание эффективных воронок продаж в чат-ботах поможет стимулировать покупки и увеличивать конверсию. Персонализированные сообщения, адаптированные под предпочтения каждого клиента, будут способствовать налаживанию тесной связи между вашим чат-ботом и пользователями. А возможность работы на разных языках позволяет чат-боту достичь широкой аудитории.",
  },
  {
    title:
      "3. Сколько стоит переход на коммерческую модель чат-ботов в Viber? ",
    text: "Чтобы перейти на коммерческую модель чат-бота, необходимо оплатить активационный взнос 300 EUR (включает 100 EUR за текущий месяц). Каждый следующий календарный месяц будет взиматься оплата за обслуживание в размере 100 EUR за каждого бота, а также оплата за доставленные сообщения, инициированные чат-ботом.",
  },

  {
    title: "4. Что такое «приветственное сообщение» и как оно работает?",
    text: "Чат-боты могут отправить пользователю одно приветственное сообщение, как только он откроет беседу, прежде чем пользователь подпишется. Это сообщение не тарифицируется . Используйте его, чтобы ознакомить пользователя с функциями вашего чат-бота, предоставить информацию и побудить пользователя подписаться на чат-бота.",
  },
  {
    title: "5. Что такое «диалоговая сессия»?",
    text: "Сеанс (сессия) — это 24-часовое временное окно, которое активируется, когда подписчик отправляет сообщение чат-боту. Сеанс также активируется, когда подписчик отвечает на сообщение, инициированное чат-ботом. Через 24 часа сеанс автоматически завершается. Следующая сессия будет активирована, как только подписчик чат-бота отправит новое сообщение.",
  },
  {
    title: "6. Какова стоимость доставки исходящих сообщений?",
    text: "Viber не выставляет счет владельцам чат-ботов за сообщения, которыми обмениваются чат-бот и его подписчики во время сессии. Неограниченное количество сеансовых сообщений уже включено в ежемесячную плату.",
  },
  {
    title: "7. Что такое «сообщение, инициированное чат-ботом»?",
    text: "Сообщение, отправленное чат-ботом своему подписчику, классифицируется как сообщение, инициированное чат-ботом, если между чат-ботом и его подписчиком нет активного сеанса. Сообщения, инициированные чат-ботами, — это платная функция. Обратите внимание: если подписчик ответит на сообщение, инициированное чат-ботом, он активирует сеанс , и впоследствии все сообщения, которыми обмениваются во время этого сеанса (24 часа), не будут оплачиваться.",
  },

  {
    title: "8. Что такое «платные сообщения» и как они работают?",
    text: "Если между чат-ботом и его подписчиком нет активного сеанса, то отправка сообщения от имени чат-бота будет платной. Каждый календарный месяц с владельцев чат-ботов будет взиматься плата на основе стоимости за доставку каждого сообщения, инициированного чат-ботом. Ставка, применяемая к каждому сообщению, зависит от кода страны номера телефона, под которым подписчик чат-бота зарегистрировался в Viber.",
  },
  {
    title: "9. Буду ли я платить за ответы пользователей?",
    text: "Нет, за ответы пользователей не нужно платить. Вы оплачиваете ежемесячный взнос 100 EUR и счет за доставленные сообщения, инициированные чат-ботом. Неограниченное количество сеансовых сообщений включено в ежемесячную плату за обслуживание.",
  },
];

const questionList = document.querySelector(`.faq__list`);

const questionItem = questions.map((question) => {
  addQuestionToList(question);
});

function addQuestionToList({ title, text }) {
  questionList.insertAdjacentHTML(
    `beforeend`,
    `<li class="faq__item">
    <div class="faq__wrapper">
      <h3 class="faq__title faq__title--secondary faq__title--margin">
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
  const faqWrapper = faqItem.querySelector(".faq__wrapper");

  faqItem.addEventListener("click", () => {
    faqItems.forEach((item) => {
      if (item !== faqItem && item.classList.contains("faq__item--active")) {
        item.classList.remove("faq__item--active");
        item.querySelector(".faq__text").classList.add("visually-hidden");
        item.querySelector("#up").classList.add("visually-hidden");
        item.querySelector("#down").classList.remove("visually-hidden");
        item.querySelector(".faq__wrapper").classList.remove("faq__wrapper--margin");
      }
    });

    faqItem.classList.toggle("faq__item--active");
    imgUp.classList.toggle("visually-hidden");
    imgDown.classList.toggle("visually-hidden");
    faqText.classList.toggle("visually-hidden");
    faqWrapper.classList.toggle("faq__wrapper--margin");

    if (faqItem.classList.contains("faq__item--active")) {
      faqItem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
