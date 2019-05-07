<template>
    <div class="component">
        <h3>Infomation User Details</h3>
        <p>List Details</p>
        <p>My name: {{ name }}</p>
        <p>My age : {{ userAge }}</p>
        <button @click="reChangeNameFn()">ReChangeName with CallBack</button>
    </div>
</template>
<script>
import { eventBus } from '../main';
export default {
    props: {
        name: {
            type: String,
            default: 'Pussy',
            //required: true
        },
        reChangeNameFn: Function,
        userAge: Number
    },
    methods: {
        reverseName() {
            return this.name.split("").reverse().join("");
        }
    },
    created() {
        eventBus.$on('ageWasEdit', (age) => {
            this.userAge = age;
        });
    }
}
</script>
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

