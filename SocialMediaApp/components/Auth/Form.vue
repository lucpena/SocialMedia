<template>
    <div class="w-full">

        <div class="flex justify-center">
            <div class="w-240 h-240">
                <AlienDance />
            </div>
        </div>
        
        <div class="pt-5 space-y-6">
            <UIInput value="" label="Username" placeholder="user" v-model="data.username" />
            <UIInput value="" label="Password" placeholder="********" type="password" v-model="data.password"/>

            <UIBlueButton liquid :disabled="isButtonDisabled" @click="handleLogin">
                Login
            </UIBlueButton>
        
        </div>
    </div>
</template>
<script setup>
import AlienDance from '../UI/AlienDance.vue';

const data = reactive({
    username: '',
    password: '',
    loading: false
})

async function handleLogin() 
{
    const {login} = useAuth()
    data.loading = true;

    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log(error);
    } finally {
        data.loading = false;
    }
}

const isButtonDisabled = computed (() => 
{
    return (!data.username || !data.password) || data.loading;
})

</script>