<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                    </div>
    
                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>
    
                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>

  
</template>
  

<script>
export default {
    data(){
        return{
            showModal: false
        }
    }
}
</script>


<style scroped>
    button{
        cursor: pointer;
    }

    .modal-mask {
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .45);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {

        width: 600px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 10px 10px 25px rgba(46,53,53,.5);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header{
        padding: 15px;
        font: 16px Arial, sans-serif;
        font-weight: bold;
        border-bottom: 1px solid #f0f3f5;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
        padding: 0 15px;
    }
    .modal-footer{
        background-color: #85bd47;
        height: 70px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .modal-default-button {
        background: none;
        border: none;
        color: #fff;
        font: 16px Arial, sans-serif;
        padding: 10px 20px;
        border-radius: 40px;
        font-weight: bold;
        transition: all .25s ease-out;
        outline: 0;
        
    }
    .modal-default-button:hover{
        background-color:#fff;
        color: #e8364f;
        box-shadow: 5px 5px 12px rgba(126,128,128,.8);
    }


    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
