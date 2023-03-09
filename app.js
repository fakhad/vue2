
const app = {
    data(){
        return{
        category:'',
        name:'',
       clubs:{
        real:['Benzema','Vinicius'],
        barsa:['Pedri','Ter Stegen'],
        nasr:['Ronaldo','Masharipov']
       },
       

        }
    },
    methods: {
        
    add(){
        
        const uniqName = new Set(this.clubs[this.category])
  
            if (!this.clubs[this.category].includes(this.name)) {
                this.clubs[this.category].push(this.name)
            }
          
            
        
    }
    }
    }

    
    Vue.createApp(app).mount('#app')