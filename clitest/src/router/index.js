import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',//无/#/,两种模式：hash和history模式
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{//单页面多路由区操作,key是components加s
        default:HelloWorld,
        left:H1,
        right:H2
      },
      alias:'/home1' //这是坑，给根页面index，区别名不行；现在已经修复
    },
    {
        path:'/params/:newsId(\\d+)/:newsTitle',//这里加了正则表达式
        component:Params,
        beforeEnter:(to,from,next)=>{//进入钩子函数
            console.log(to);
            console.log(from);
            next();//一定要加next，否则不会跳转页面
            // next(true);
            // next(false);
            // next({path:'/'});//跳转至home
        }
    },
    {//重定向
        path:'/goHome',
        redirect:'/'
    },
    {//重定向，并带参数
        path:"/goParams/:newsId(\\d+)/:newsTitle",
        redirect:"/params/:newsId(\\d+)/:newsTitle"
    },
    {//alias别名的使用
        path:'/hi1',
        component:hi1,
        alias:'/jspang'
    },
    {
      path: '/jspang',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        left:H2,
        right:H1
      }
    },
    {
    	path:'/hi',
        name: 'hi',
    	component:hi,
    	children:[//配置子路由
    		{
    			path:'hi1',
    			name:'hi1',
    			component:hi1
    		},
    		{
    			path:'hi2',
    			name:'hi2',
    			component:hi2
    		},
    	]
    },
    {
        path:'*',
        component:Error
    }
  ]
})
