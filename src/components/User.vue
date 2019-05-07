<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome Developer! Globe {{ name }} {{ age }}</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm6">
                <app-user-detail 
                :name="name" 
                @nameWasRechanged="name = $event"
                :reChangeNameFn='reChangeName'
                :userAge="age"    
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdit="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDeTail';
import UserEdit from './UserEdit';

export default {
    data: function() {
        return {
            name: 'Natsu',
            age: 20
        }
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    },
    methods: {
        changeName() {
            this.name = 'Đẹp trai';
        },
        reChangeName() {
            this.name = 'Natsu';
        }
    }  
}
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
