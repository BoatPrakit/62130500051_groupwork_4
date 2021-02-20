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
            isFound: true,
            isShowImg : false,
            currentImg: '',
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
                for(imageObj of this.imgs){
                    if(imageObj.id === this.keywordForSearch){
                        imageObj.isHidden = false;
                    }else{
                        imageObj.isHidden = true;
                    }
                }
                if(this.imgs.every(element => element.isHidden)) this.isFound = false;
            }
            this.keywordForSearch = '';
        },
        handleCancel(){
            this.isShowSearchBox = !this.isShowSearchBox;
            for (const element of this.imgs) {
                element.isHidden = false
            }
            this.isFound = true
        },
        handleClickImg(src){
            this.currentImg = src;
            this.isShowImg = true;
        },
        handleCloseImg(){
            this.isShowImg = false;
        }
    },
    computed: {
        getImgLength(){
            return this.imgs.length;
        }
    }

}
Vue.createApp(app).mount('#app')