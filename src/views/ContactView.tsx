import { defineComponent } from 'vue';

// https://cn.vuejs.org/api/general#definecomponent
export default defineComponent(
  <T extends Record<string, string>>(props: { list: T[] }) => {
    // 就像在 <script setup> 中一样使用组合式 API
    // const count = ref(0);
    return () => {
      return props.list.map((item) => (
        <div>
          {item.name}-{item.phone}
        </div>
      ));
    };
  },
  // 目前仍然需要手动声明运行时的 props 和 emits
  {
    props: ['list'],
  },
);
