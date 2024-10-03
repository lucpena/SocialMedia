<template>
    <div>        
        <div class="flex items-center flex-shrink-0 p-4 pb-0">

            <!-- Profile image  -->
            <div class="flex w-12 items-top">
                <img :src="props.user?.profileImage" alt="" class="inline-block w-10 h-10 rounded-full">
            </div>

            <!-- Text input form -->
            <div class="w-full p-2">
                <textarea v-model="text" 
                class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0 overflow-hidden"
                :placeholder="props.placeholder" ></textarea>
            </div>

            
        </div>

        <div class="p-4 pl-16">
            <img v-if="inputImageUrl" 
            :src="inputImageUrl" 
            alt="uploaded image"
            class="rounded-2xl border"
            :class="twitterBorderColor">
            
            <input type="file"
            accept="image/png, image/gif, image/jpeg"
            hidden 
            ref="imageInput"
            @change="handleImageChange">
        </div>
        
        <div class="flex p-2 pl-14">             
            <!-- Form Icons -->
            <div class="flex w-full text-white">
                <div @click="handleImageClick" class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
                    <UIImageIcon />
                </div>

                <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
                    <UIGIFIcon />
                </div>

                <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
                    <UIChartIcon />
                </div>

                <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
                    <UIEmojiIIcon />
                </div>

                <div class="p-2 text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-dim-800 cursor-pointer">
                    <UICalendarIcon />
                </div>
            </div>

            <!-- Tweet button -->
           <div class="ml-auto">
                <UIBlueButton @onClick="handleFormSubmit" size="sm" :disabled="isDisabled">Post</UIBlueButton>
           </div>
                
        </div>

    </div>
</template>
<script setup>

const {twitterBorderColor} =  useTailwindConfig()

const emits = defineEmits(['onSubmit']);

const text = ref('');
const imageInput = ref()
const selectedFile = ref(null);
const inputImageUrl = ref(null)

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})

const isDisabled = computed(() => text.value === '');

function handleFormSubmit () 
{
    emits('onSubmit', 
    {
        text: text.value,
        mediaFiles: [selectedFile.value]
    })
}

function handleImageClick()
 {
    imageInput.value.click();
 }

 function handleImageChange(event)
 {
    const file = event.target.files[0];
    selectedFile.value = file;

    const reader = new FileReader();
    reader.onload = (event) =>
    {
        inputImageUrl.value = event.target.result;
    }
    reader.readAsDataURL(file);

 }

</script>