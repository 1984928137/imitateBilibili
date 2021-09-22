const router = require('koa-router')()
let animation = require('../module/animationData.js')
let music = require('../module/musicData.js')
const axios = require('axios')
const mysqlQuery = require('../module/query')

let animeData = require('../routes/blbl_anime.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/api',async function(ctx,next){
  let datas = 'file';
  ctx.body = datas
})
router.post('/api/post',async function(ctx,next){
  // urlToHttpOptions
     console.log(ctx.request.body);
     let postData = ctx.request.body
     ctx.body = '史诗级'
})
router.get('/api/homeData',async function(ctx,next){
  console.log(mysqlQuery)
  // let dom
  let mysqlData = new mysqlQuery();
  let res = await mysqlData.query('SELECT * FROM home_data')
  mysqlData.destroy()
  ctx.body = res
  
  console.log(10,ctx.body)
  
  
  // console.log(a)
  
})
router.get('/api/homeImgAvatar',async function(ctx,next){
  let mysqlData = new mysqlQuery();
  let res = await mysqlData.query('SELECT * FROM home_avatar_img')
  mysqlData.destroy()
  ctx.body = res
})
router.get('/api/animeUpdataDivUlLiData',async function(ctx,next){
  // let animeData = await axios.get('https://bangumi.bilibili.com/api/timeline_v2_global')
  ctx.body = animeData
})
router.get('/api/animationNav',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationNav)
  ctx.body = animation.animationNav
})
router.get('/api/animationSto',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationSto)
  ctx.body = animation.animationSto
})
router.get('/api/animationCar',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationCar)
  ctx.body = animation.animationCar
})
router.get('/api/animationMadAmv',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationMadAmv)
  ctx.body = animation.animationMadAmv
})
router.get('/api/animationMadAmvPhb',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationMadAmvPhb)
  ctx.body = animation.animationMadAmvPhb
})
router.get('/api/animationMadAmvTwo',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationMadAmvTwo)
  ctx.body = animation.animationMadAmvTwo
})
router.get('/api/animationMadThreeD',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationMadThreeD)
  ctx.body = animation.animationMadThreeD
})
router.get('/api/animationMadThreeDPhb',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationMadThreeDPhb)
  ctx.body = animation.animationMadThreeDPhb
})
router.get('/api/animationMadThreeDTwo',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationMadThreeDTwo)
  ctx.body = animation.animationMadThreeDTwo
})
router.get('/api/animationVoice',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationVoice)
  ctx.body = animation.animationVoice
})
router.get('/api/animationVoiceTwo',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationVoiceTwo)
  ctx.body = animation.animationVoiceTwo
})
router.get('/api/animationVoicePhb',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationVoicePhb)
  ctx.body = animation.animationVoicePhb
})
router.get('/api/animationGarageKit',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationGarageKit)
  ctx.body = animation.animationGarageKit
})
router.get('/api/animationGarageKitTwo',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationGarageKitTwo)
  ctx.body = animation.animationGarageKitTwo
})
router.get('/api/animationGarageKitPhb',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationGarageKitPhb)
  ctx.body = animation.animationGarageKitPhb
})
router.get('/api/animationToKusatsu',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationToKusatsu)
  ctx.body = animation.animationToKusatsu
})
router.get('/api/animationToKusatsuTwo',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationToKusatsuTwo)
  ctx.body = animation.animationToKusatsuTwo
})
router.get('/api/animationToKusatsuPhb',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationToKusatsuPhb)
  ctx.body = animation.animationToKusatsuPhb
})
router.get('/api/animationSynthesize',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationSynthesize)
  ctx.body = animation.animationSynthesize
})
router.get('/api/animationSynthesizeTwo',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationSynthesizeTwo)
  ctx.body = animation.animationSynthesizeTwo
})
router.get('/api/animationSynthesizePhb',async function(ctx,next){
  // let animeData = await axios.get('https://api.bilibili.com/pgc/web/follow/list?season_type=1&ps=12&pn=1')
  console.log(animation.animationSynthesizePhb)
  ctx.body = animation.animationSynthesizePhb
})

module.exports = router
