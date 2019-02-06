<template>
    <div class="xz-button" ref="button" @click="click">
        {{title}}<i class="fa fa-cloud-upload fa-lg" v-show="isIcon" ref="icon"></i>
    </div>
</template>

<script>
export default {
    name: "XZButton",
    props: {
        title: {
            type: String,
            default: "upload"
        },
        click: {
            type: Function,
            default: ()=> {}
        },
        hoverColor: {
            type: String,
            default: "#07aae3"
        },
        defaultColor: {
            type: String,
            default: "white"
        },
        defaultBackgroundColor: {
            type: String,
            default: "#07aae3"
        },
        hoverBackgroundColor: {
            type: String,
            default: 'white'
        },
        isIcon: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String,
            default: 'cloud-upload'
        },
        size: {
            type: String,
            default: "normal"
        }
    },
    methods: {
        // initialUI
        initial() {
            const style = this.$refs.button.style
            style.background = this.defaultBackgroundColor
            style.color = this.defaultColor
            style.border = `2px solid ${this.defaultBackgroundColor}`
        },
        // mouseover
        changeUI_1(event) {
            const style = event.currentTarget.style
            style.background = this.hoverBackgroundColor
            style.color = this.hoverColor
        },
        // mouseleave
        changeUI_2(event) {
            const style = event.currentTarget.style
            style.background = this.defaultBackgroundColor
            style.color = this.defaultColor
        },
        // size
        initialSize() {
            const style = this.$refs.button.style
            switch(this.size) {
                case 'small':
                    style.padding = "5px 6px"
                    style.fontSize = "12px"
                    break
                case 'normal':
                    style.padding = "5px 8px"
                    style.fontSize = "16px"
                    break
                case 'large':
                    style.padding = "7px 10px"
                    style.fontSize = "20px"
                    break
            }
        },
        // icon-type
        initialIcon() {
            const icon = this.$refs.icon
            icon.classList.remove('fa-cloud-upload')
            icon.classList.add(`fa-${this.iconType}`)
        }
    },
    mounted() {
        this.$refs.button.addEventListener('mouseover', this.changeUI_1)
        this.$refs.button.addEventListener('mouseleave', this.changeUI_2)
        this.initial()
        this.initialSize()
        this.initialIcon()
    },
}
</script>

<style scoped>
    .xz-button {
        position: relative;
        display: inline-block;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        transition: .3s;
    }

    .xz-button > i {
        position: relative;
        left: 2px;
        margin: 0 3px;
    }
</style>
