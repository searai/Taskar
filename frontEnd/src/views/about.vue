<template>
    <div>
    <h1>This is the about page!</h1>

    <p>
        {{sampleData}}
    </p>
    </div>
</template>

<script>

export default {
    data(){
        return {
            sampleData:this.$route.query.name
        }
    }
}

</script>


<style scoped>
h1{
    margin:0 auto;
}

</style>
