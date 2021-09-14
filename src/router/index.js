import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Commhadeer from '../components/commer_compon/Comm_hadeer'
// import Commnav from '../components/commer_compon/Comm_nav'
import Home from '@/components/haeder_comp/Home'
import Longin from '@/components/haeder_comp/Longin'
import Search from '@/components/haeder_comp/Search'

const Anime = ()=>import( '@/components/haeder_comp/Anime')
const Cartoon = ()=>import( '@/components/haeder_comp/Cartoon')
const Downloadapp = ()=>import( '@/components/haeder_comp/Download_app')
const Gamecentre = ()=>import( '@/components/haeder_comp/Game_centre')
const Livetelecast = ()=>import( '@/components/haeder_comp/Live_telecast')
const Match = ()=>import( '@/components/haeder_comp/Match')
const Vipbuy = ()=>import( '@/components/haeder_comp/Vip_buy')
const Bigvip = ()=>import( '@/components/haeder_comp/vip_comp/Big_vip')
const Collect = ()=>import( '@/components/haeder_comp/vip_comp/Collect')
const Contribute = ()=>import( '@/components/haeder_comp/vip_comp/Contribute')
const Creatrcentre = ()=>import( '@/components/haeder_comp/vip_comp/Creatr_centre')
const History = ()=>import( '@/components/haeder_comp/vip_comp/History')
const Message = ()=>import( '@/components/haeder_comp/vip_comp/Message')
const Trends = ()=>import( '@/components/haeder_comp/vip_comp/Trends')
const Car = ()=>import( '@/components/nav/Car')
const Cate = ()=>import( '@/components/nav/Cate')
const Channel = ()=>import( '@/components/nav/Channel')
const Countrycreate = ()=>import( '@/components/nav/Country_create')
const Daily = ()=>import( '@/components/nav/Daily')
const Dance = ()=>import( '@/components/nav/Dance')
const Exercise = ()=>import( '@/components/nav/Exercise')
const Film = ()=>import( '@/components/nav/Film')
const Game = ()=>import( '@/components/nav/Game')
const Ghostanimal = ()=>import( '@/components/nav/Ghost_animal')
const Humour = ()=>import( '@/components/nav/Humour')
const Information = ()=>import( '@/components/nav/Information')
const Knowledge = ()=>import( '../components/nav/Knowledge')
const life = ()=>import( '@/components/nav/life')
const Music = ()=>import( '@/components/nav/Music')
const Popular = ()=>import( '@/components/nav/Popular')
const Recreation = ()=>import( '@/components/nav/Recreation')
const Technology = ()=>import( '@/components/nav/Technology')
const Theater = ()=>import( '@/components/nav/Theater')
const vogue = ()=>import( '@/components/nav/vogue')
const zoosphere = ()=>import( '@/components/nav/zoosphere')
const column = ()=>import('@/components/nav/Column')
const activity = ()=>import('@/components/nav/Activity')
const blackRoom = ()=>import('@/components/nav/BlackRoom')
const classRoom = ()=>import('@/components/nav/ClassRoom')
const songHotList = ()=>import('@/components/nav/SongHotList')
const Animation = ()=>import('@/components/nav/Animation')

// const commhadeer = ()=>import('@/components/commer_compon/comm_hadeer')

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/Commnav',
    //   name: 'comm_nav',
    //   component: Commnav
    // },
    // {
    //   path: '/commhadeer',
    //   name: 'comm_hadeer',
    //   component: Commhadeer
    // },
    {
      path:'/login',
      name:'login',
      component:Longin
    },
    {
      path: '/anime',
      name: 'anime',
      component: Anime
    },
    {
      path: '/cartoon',
      name: 'cartoon',
      component: Cartoon
    },
    {
      path: '/downloadapp',
      name: 'downloadapp',
      component: Downloadapp
    },
    {
      path: '/gamecentre',
      name: 'gamecentre',
      component: Gamecentre
    },
    {
      path: '/livetelecast',
      name: 'livetelecast',
      component: Livetelecast
    },
    // {
    //   path: '/longin',
    //   name: 'longin',
    //   component: Longin
    // },
    {
      path: '/match',
      name: 'match',
      component: Match
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/vipbuy',
      name: 'vipbuy',
      component: Vipbuy
    },
    {
      path: '/bigvip',
      name: 'bigvip',
      component: Bigvip
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: Contribute
    },
    {
      path: '/creatrcentre',
      name: 'creatrcentre',
      component: Creatrcentre
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/trends',
      name: 'trends',
      component: Trends
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate
    },
    {
      path: '/channel',
      name: 'channel',
      component: Channel
    },
    {
      path: '/countrycreate',
      name: 'countrycreate',
      component: Countrycreate
    },
    {
      path: '/daily',
      name: 'daily',
      component: Daily
    },
    {
      path: '/dance',
      name: 'dance',
      component: Dance
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise
    },
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/ghostanimal',
      name: 'ghostanimal',
      component: Ghostanimal
    },
    {
      path: '/humour',
      name: 'humour',
      component: Humour
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/recreation',
      name: 'recreation',
      component: Recreation
    },
    {
      path: '/technology',
      name: 'technology',
      component: Technology
    },
    {
      path: '/theater',
      name: 'theater',
      component: Theater
    },
    {
      path: '/vogue',
      name: 'vogue',
      component: vogue
    },
    {
      path: '/zoosphere',
      name: 'zoosphere',
      component: zoosphere
    },
    {
      path:'/column',
      name:'column',
      component: column
    },
    {
      path:'/activity',
      name:'activity',
      component: activity
    },
    {
      path:'/blackRoom',
      name:'blackRoom',
      component: blackRoom
    },
    {
      path:'/classRoom',
      name:'classRoom',
      component: classRoom
    },
    {
      path:'/songHotList',
      name:'songHotList',
      component: songHotList
    },
    {
      path:'/animation',
      name:'animation',
      component: Animation
    }
  ]
})


router.beforeEach((to,from,next)=>{
  console.log(to,from)
  // if(to.name !== 'login'){
      // let dmt = document.getElementById('appFireCom')
      // console.log(dmt)
      // dmt.style.display = 'none'
  // }
  next()
})


export default router