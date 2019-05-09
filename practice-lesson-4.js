var product = {
    name: "Iphone 10",
    brand: 'Apple',
    price: 80000,
    variable: {model: 1, country: 'china'},
    version: ['1.5', '2.0', 3.0,],
};

for(var key in product.variable){
    console.log(product.variable[key]);
}

var product2 = product;
var a = 888;
var b = a;
b = 777;

var productCopy = Object.assign({}, product);

// создаем логику для слайдера

var carousel = {
    slides: ['circle', 'square', 'triangle'],
    currentSlideIdx: 0,
    next: function(){
        if(this.currentSlideIdx === this.slides.length - 1){
            this.currentSlideIdx = 0;
        }
        else{
            this.currentSlideIdx++;
        }
    },
    prev: function(){
        if(this.currentSlideIdx === 0){
            this.currentSlideIdx = this.slides.length - 1;
        }
        else{
            this.currentSlideIdx--;
        }
    },
    getCurrentSlide: function(){
        return this.slides[this.currentSlideIdx];
    }

}

// Игра "Кто хочет стать миллионером?"

var game = {
    questions: [
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 2,
            prize: 100,
            fixed: false,
        },
        {
            text: "Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?",
            option: ['сделать сегодня', 'сделать послезавтра', "сделать через месяц", "никогда не делать"],
            correct: 0,
            prize: 200,
            fixed: false,
        },
        {
            text: "Что помогает туристу ориентироваться в незнакомом городе?",
            option: ['путепровод', 'путеукладчик', "путеводитель", "путеводная звезда"],
            correct: 2,
            prize: 300,
            fixed: false,
        },
        {
            text: "Как звали старшую сестру императора Петра Первого?",
            option: ['Вера', 'Надежда', "Любовь", "Софья"],
            correct: 3,
            prize: 500,
            fixed: false,
        },
        {
            text: "Откуда обычно достает подарки Дед Мороз?",
            option: ['из шкатулки', 'из мешка', "из-за пазухи", "из интернет-магазина"],
            correct: 1,
            prize: 1000,
            fixed: true,
        },
        {
            text: "Чем профессионально занимается провизор?",
            option: ['наблюдает за погодой', 'готовит лекарства', "ухаживает за растениями", "импровизирует"],
            correct: 1,
            prize: 2000,
            fixed: false,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 5000,
            fixed: false,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 10000,
            fixed: true,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 20000,
            fixed: false,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 50000,
            fixed: false,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 100000,
            fixed: true,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 250000,
            fixed: false,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 500000,
            fixed: false,
        },
        {
            text: "Назовите столицу Австрии?",
            option: ['Бремен', 'Будапешт', "Вена", "Зальцбург"],
            correct: 3,
            prize: 1000000,
            fixed: false,
        },
    ],
    currentQuestion: 0,
    currentPrize: 0,
    buildQuestion: function(){
        var activeQuestion = this.questions[this.currentQuestion];
        var message = (activeQuestion.fixed ? '* ' : '') + 'Вопрос № ' + (this.currentQuestion + 1) + ' ' + '\n' + activeQuestion.text + ' ( ' + activeQuestion.prize + ' руб' + ' ) ';

        for(var i = 0; i < activeQuestion.option.length; i++){
            message += '\n' + (i + 1) + ') ' + activeQuestion.option[i];
        }

        return message;
    },
    ask: function(){
      var answer = +prompt(this.buildQuestion());
      var activeQuestion = this.questions[this.currentQuestion];

      if(answer === (activeQuestion).correct + 1){
          // ответ правильный
          this.currentPrize = activeQuestion.prize;
          this.currentQuestion++;

          if(this.currentQuestion > this.questions.length - 1){
              alert('Поздравляем! Вы выграли 1 000 000 руб!');
          }
          else{
              if(confirm('Хотите забрать деньги?')){
                  alert('Вы выграли ' + activeQuestion.prize + ' руб');
              }
              else{
                  this.ask();
              }
          }
      }
      else{
          // ответ неправильный
          var prize = 0;
          for(var i = this.currentQuestion; i >= 0; i--){
              if(this.questions[i].fixed){
                  prize = this.questions[i].prize;
                  break;
              }
          }

        alert('Вы выграли ' + prize + ' рублей');
      }
    },
}

game.ask();