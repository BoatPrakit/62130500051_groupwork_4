const app = {
    data(){
        return {
            imgs: [
                { id: "robot", src: "./images/robot.jpg", isActive: false , isHidden: false},
                { id: "iphone", src: "./images/iphone.jpg", isActive: false, isHidden: false},
                { id: "drone", src: "./images/drone.jpg", isActive: false, isHidden: false},
            ],
            isShowSearchBox: false,
            keywordForSearch: "",
            isFound: true
        }
    },
    methods: {
        showFavorite(index){
            this.imgs[index].isActive = !this.imgs[index].isActive;
        },
        showSearchBox(){
            this.isShowSearchBox = !this.isShowSearchBox;
        },
        findResult(){
            if(this.keywordForSearch){
                for (let i = 0; i < this.imgs.length; i++) {
                    const element = this.imgs[i];
                    if(element.id !== this.keywordForSearch){
                        element.isHidden = !element.isHidden;
                    }
                }
                if(this.imgs.every(element => element.isHidden)) this.isFound = false;
                this.keywordForSearch = '';
            }
        },
        handleCancel(){
            this.isShowSearchBox = !this.isShowSearchBox;
            for (const element of this.imgs) {
                element.isHidden = false
            }
            this.isFound = true
        }
    },
    computed: {
        getImgLength(){
            return this.imgs.length;
        }
    }

}
Vue.createApp(app).mount('#app')