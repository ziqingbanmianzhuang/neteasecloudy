<template>
    <section class="contain">
    </section>
    <img src="../public/images/home-5.jpg" alt="" style="--i:1">
    <img src="../public/images/home-4.jpg" alt="" style="--i:2">
    <img src="../public/images/home-3.jpg" alt="" style="--i:3">
    <img src="../public/images/home-2.jpg" alt="" style="--i:4">
    <img src="../public/images/home-1.jpg" alt="" style="--i:5">
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@media screen and (min-width:0px) {
    .contain {
        width: calc(100vw - 100px);
    }
}

@media screen and (min-width:1000px) {
    .contain {
        width: calc(80vw - 100px);
    }
}

.contain {
    animation: backgroundAnimate 60s linear 0s infinite both;
    animation-delay: 0.7s;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;

    @keyframes backgroundAnimate {
        0% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-1.jpg) center/cover no-repeat fixed;
        }

        19.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-1.jpg) center/cover no-repeat fixed;
        }

        20% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-2.jpg) center/cover no-repeat fixed;


        }

        39.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-2.jpg) center/cover no-repeat fixed;


        }

        40% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-3.jpg) center/cover no-repeat fixed;

        }

        59.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-3.jpg) center/cover no-repeat fixed;

        }



        60% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-4.jpg) center/cover no-repeat fixed;

        }

        79.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-4.jpg) center/cover no-repeat fixed;

        }

        80% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-5.jpg) center/cover no-repeat fixed;

        }

        99.5% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-5.jpg) center/cover no-repeat fixed;

        }

        100% {
            background: rgba(0, 0, 0, 0.03) url(../public/images/home-1.jpg) center/cover no-repeat fixed;

        }
    }


}

img {
    position: absolute;
    bottom: 50px;
    right: 0px;
    width: 90px;
    height: 90px;
    border: 5px solid #fff;
    border-radius: 30px;
    animation: translateAnimate 60s linear 0s infinite both;
    animation-delay: calc(var(--i) * -12s);
}

@keyframes translateAnimate {
    0% {
        transform: translateX(0);
        z-index: 1;
        opacity: 1;
    }

    19% {
        transform: translateX(0);
        z-index: 1;
        opacity: 1;

    }

    20% {
        transform: translateX(-40px);
        z-index: 2;
        opacity: 1;

    }

    39% {
        transform: translateX(-40px);
        z-index: 2;
        opacity: 1;

    }

    40% {
        transform: translateX(-80px);
        z-index: 3;
        opacity: 1;

    }

    59% {
        transform: translateX(-80px);
        z-index: 3;
        opacity: 1;

    }

    60% {
        transform: translateX(-120px);
        z-index: 4;
        opacity: 1;

    }

    79% {
        transform: translateX(-120px);
        z-index: 4;
        opacity: 1;

    }

    80% {
        transform: translateX(-160px);
        z-index: 5;
        opacity: 1;

    }

    99% {
        transform: translateX(-160px);
        z-index: 5;
        opacity: 1;

    }

    99.2% {
        transform: translateX(-200px);
        opacity: 0;
    }

    99.4% {
        z-index: 1;
    }

    100% {
        z-index: 1;
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>