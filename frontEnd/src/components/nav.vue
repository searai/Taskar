<template>

    <div id="nav">
        <router-link :style ="{textDecoration:linkStyle.home}" to="/">Home</router-link>
        <router-link :style ="{textDecoration:linkStyle.toDoList}"  to="/toDoList"  >To-do list</router-link>
        <router-link :style ="{textDecoration:linkStyle.about}"  to="/about" >About</router-link>
        <router-link :style ="{textDecoration:linkStyle.discussion}"  to="/discussion" >Discussion</router-link>
    
        
    </div>

</template>


<script>

export default {
    data(){
        return {

        }

    },
    computed:{
        linkStyle(){

            if(this.$route.path == "/"){
                return {
                    home : "underline",
                    toDoList : "none",
                    about : "none",
                    discussion : "none",    
                }
            }
            else if(this.$route.path == "/toDoList"){
                return {
                    home : "none",
                    toDoList : "underline",
                    about : "none",
                    discussion : "none",
                    
                }
            }
            else if(this.$route.path == "/about"){
                return {
                    home : "none",
                    toDoList : "none",
                    about : "underline",
                    discussion : "none",
                    
                }
            }
            else if(this.$route.path == "/discussion"){
                    return {
                    home : "none",
                    toDoList : "none",
                    about : "none",
                    discussion : "underline",
                    
                }
            }else{
               return {
                    home : "none",
                    toDoList : "none",
                    about : "none",
                    discussion : "none",
                    
                } 
            }
        }

    }
    
}
</script>

<style scoped>
#nav{
    width:100%;
    background-color:blue;
    text-align:center;
}
a{
    display:inline-block;
    font-size: 2em;
    color:black;
    text-decoration:none;
    margin:10px;

}
a:hover{
    font-size:2.05em;

}

</style>


