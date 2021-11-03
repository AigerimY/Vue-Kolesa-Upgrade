<template>
  <div>
    <ul class="breadcrumb">
      <li><router-link :to="'/shop'">Kolesa Shop</router-link></li>
      <span> / </span>
      <li><router-link :to="'#'">Как получить баллы</router-link></li>
    </ul>
    <section class="catalog">
    <h2>Как получить баллы</h2>
    <div>
      <ul class="get-points-list">
        <li
          class="get-points-list__item"
          v-for="way in ways"
          :key="way.title"
        >
          <div>
            <img :src="way.icon" width="32" height="32">
            <h3>{{ way.title }}</h3>
            <span class="points" v-if="way.cost">{{ way.cost }} баллов</span>
            <p>{{ way.description }}</p>
          </div>
          <button class="button get-points-button">Отправить заявку</button>
        </li>
      </ul>
    </div>
  </section>
  </div>
</template>

<script>

const img1 = require('@/img/give-points-1.svg');
const img2 = require('@/img/give-points-2.svg');
const img3 = require('@/img/give-points-3.svg');
const img4 = require('@/img/give-points-4.svg');
const img5 = require('@/img/give-points-5.svg');
const img6 = require('@/img/give-points-6.svg');
const img7 = require('@/img/give-points-7.svg');
const img8 = require('@/img/give-points-8.svg');
const img9 = require('@/img/give-points-9.svg');

export default {
  name: 'ScorePage',
  data() {
    return {
      ways: [
        {
          icon: img1,
          title: 'Выступление на конференциях',
          cost: 90,
          description: 'Стань спикером на международной конференции по своему направлению',
        },
        {
          icon: img2,
          title: 'Выступление на meetup',
          cost: 60,
          description: 'Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем',
        },
        {
          icon: img3,
          title: 'Статья на habr/vc.ru/rusbase',
          cost: 60,
          description: 'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          icon: img4,
          title: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
          cost: 60,
          description: 'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
        },
        {
          icon: img5,
          title: 'Организация мероприятия',
          cost: 60,
          description: 'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
        {
          icon: img6,
          title: 'Стань ментором в проекте «Kolesa Academy»',
          cost: 90,
          description: 'Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно',
        },
        {
          icon: img7,
          title: 'Помощь HR team',
          cost: 50,
          description: 'Помоги организовать мероприятие',
        },
        {
          icon: img8,
          title: 'Выступление на Demoday',
          cost: 50,
          description: 'Выступи на Demoday внутри своей команды и поделись знаниями',
        },
        {
          icon: img9,
          title: 'Другое',
          description: 'Получай баллы если уже что-то сделано',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

@import '@/scss/mixins.scss';
@import '@/scss/variables.scss';

  .get-points-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    margin-bottom: 64px;

    &__item {
      display: flex;
      flex-direction: column;
      width: 26%;
      max-width: 282px;
      padding: 24px;
      margin: 0 0 24px;
      margin-right: 1.3%;
      border-radius: 16px;
      box-shadow: 0px 2px 10px rgba(28, 24, 25, 0.1);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0;
    padding: 0;
  }
  h2 {
    @include font(20px, 32px, 600);
    margin: 0 0 16px;
  }
  h3 {
    @include font(16px, 24px, 600);
    margin: 16px 0 8px;
  }
  .points {
    display: block;
    width: max-content;
    background-color: #E9F2FB;
    padding: 0 8px;
    @include font(13px, 20px, 400);
    border-radius: 4px;
    margin-bottom: 8px;
  }
  p {
    margin: 0 0 20px;
  }
  .get-points-button {
    width: 100%;
    height: 44px;
    @include font(16px, 24px, 400);
    &:hover {
      background-color: #2574c9;
    }
  }
  .breadcrumb {
    list-style: none;
    margin: 24px 0;
    padding: 0;
    li {
      display: inline-block;
    }
    a, span {
      @include font(14px, 24px, 400);
      text-decoration: none;
      color: $f-blue;
    }
  }
</style>
