import { ref } from "vue";

const useCounter = (value = 5) => {
  const counter = ref(value);

  // const increase = () => {
  //   counter.value++;
  // };
  // const decrease = () => {
  //   counter.value--;
  // };

  return {
    counter,
    //
    decrease: () => counter.value--,
    increase: () => counter.value++
  };
};

export default useCounter;
