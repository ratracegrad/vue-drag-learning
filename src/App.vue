<template>
    <v-app dark>
        <v-content>
            <!--            <main id="content" class="main">-->
            <!--                <DragBox title="Default" />-->
            <!--                <DragBox axis="x" title="Horizontal" />-->
            <!--                <DragBox axis="y" title="Vertical" />-->
            <!--                <DragBox handle title="With handle" />-->
            <!--            </main>-->
            <!--            <DragBox></DragBox>-->

            <v-container fill-height fluid class="pa-0 ma-0 ">
                <div
                    style="position:relative; width: 100%; border: 1px solid red;"
                >
                    <div
                        style="position: absolute; bottom: 0; left: 0; right: 0; height: 30px;"
                        v-drag="{ axis: 'y', handle: '#dragHandle' }"
                    >
                        <!--                    <v-container-->
                        <!--                            fluid-->
                        <!--                            class="pa-0 ma-0"-->
                        <!--                            v-drag="{ axis: 'y', handle: '#dragHandle' }"-->
                        <!--                    >-->
                        <v-toolbar
                            class="white mb-3"
                            height="30"
                            id="dragHandle"
                        >
                            <v-spacer></v-spacer>
                            <v-icon light large>drag_handle</v-icon>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-layout v-for="n in 17" :key="n" class="px-3">
                            <v-flex xs12 class="machineEntry"
                                >Machine {{ n }}</v-flex
                            >
                        </v-layout>
                        <!--                    </v-container>-->
                    </div>
                </div>
            </v-container>

            <!--                        <v-container fill-height fluid class="pa-0 ma-0 wrapper" style="border: 2px solid red;">-->
            <!--                            <div class="parentElement">-->
            <!--                                <drag-it-dude :parent-height="500" :width="100" style="border: 1px solid white;">-->
            <!--                                    <v-layout v-for="n in 17" :key="n" class="px-3">-->
            <!--                                        <v-flex xs12 class="machineEntry">-->
            <!--                                            Machine {{ n }}-->
            <!--                                        </v-flex>-->
            <!--                                    </v-layout>-->
            <!--                                </drag-it-dude>-->
            <!--                            </div>-->
            <!--                        </v-container>-->

            <!--            <h1>vue-drag-it-dude</h1>-->
            <!--            <div class="wrapper">-->
            <!--                <DragItDude-->
            <!--                    v-for="item in inputItems"-->
            <!--                    :key="item.id"-->
            <!--                    @activated="onActivated(item.id)"-->
            <!--                    @dragging="onDragging(item.id)"-->
            <!--                    @dropped="onDropped(item.id)"-->
            <!--                >-->
            <!--                    <div class="div">-->
            <!--                        <input type="text" :value="item.text" />-->
            <!--                    </div>-->
            <!--                </DragItDude>-->
            <!--            </div>-->

            <!--                        <h1>vue-drag-it-dude</h1>-->
            <!--                        <div class="wrapper">-->
            <!--                            <DragItDude-->
            <!--                                :parent-height="350"-->
            <!--                                @activated="onActivated()"-->
            <!--                                @dragging="onDragging()"-->
            <!--                                @dropped="onDropped()"-->
            <!--                                ref="dragItem"-->
            <!--                            >-->
            <!--                                <div-->
            <!--                                    class="div"-->
            <!--                                    v-for="n in 3"-->
            <!--                                    :key="n"-->
            <!--                                    style="display:flex; height: 30px; border: 1px solid white; margin-bottom: 10px; width: 100%;"-->
            <!--                                >-->
            <!--                                    Machine {{ n }}-->
            <!--                                </div>-->
            <!--                            </DragItDude>-->
            <!--                        </div>-->
        </v-content>
    </v-app>
</template>

<script>
// import DragBox from '@/components/DragBox';
import DragItDude from 'vue-drag-it-dude';
import { Draggable } from 'draggable-vue-directive';
export default {
    name: 'App',
    components: {
        // DragBox
        DragItDude
    },
    directives: {
        Draggable
    },
    data() {
        return {
            inputItems: [
                {
                    text: 'Just move me!',
                    isActive: false,
                    id: 0
                }
            ]
        };
    },
    methods: {
        onActivated() {
            console.log('onActivated');
            // this.inputItems[key].text = 'I am ready for great things!';
        },
        onDragging() {
            console.log('onDragging');
            // this.inputItems[key].text = 'Weeee!';
        },
        onDropped() {
            console.log('onDropped', this.$refs.dragItem);
            // this.inputItems[key].text = "That's place is awesome!";
            // setTimeout(() => {
            //     this.inputItems[key].text = 'Just move me!';
            // }, 3000);
        }
    }
};
</script>
<style scoped lang="scss">
.machineEntry {
    border: 1px solid white;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.parentElement {
    position: relative;
}
.wrapper {
    z-index: 1;
    width: 100%;
    height: 350px;
    border: 1px solid #000;
    border-radius: 10px;
    position: relative;
    overflow-y: auto;
}
h1 {
    text-align: center;
}
.div {
    display: inline-block;
}
input {
    width: 200px;
    padding: 20px 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    text-align: center;
}
</style>
