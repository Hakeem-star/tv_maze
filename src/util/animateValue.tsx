import { debounce } from "./debounce";

export function animateValue() {
  //Create function scope so the interval can be reset on each call
  let timer: number | undefined;
  clearInterval(timer);
  let startValue = [128, 128, 128];

  return debounce(
    (end: number[] = [128, 128, 128], func: (val: number[]) => void) => {
      let endValue = end;
      let duration = 500;
      // assumes integer values for start and end
      const range = startValue.map((val, index) => {
        return endValue[index] - val;
      });

      // no timer shorter than 50ms (not really visible any way)
      const minTimer = 50;

      // calc step time to show all interediate values

      let stepTime =
        range
          .map((val) =>
            Math.max(Math.abs(Math.floor(duration / val)), minTimer)
          )
          //get the average of all 3 step times
          .reduce((a, b) => a + b, 0) / range.length;

      // get current time and calculate desired end time
      const startTime = new Date().getTime();
      const endTime = startTime + duration;

      function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = end.map((val, index) =>
          Math.round(val - remaining * range[index])
        );

        func(value);

        if (value.join("") === end.join("") && timer) {
          clearInterval(timer);
          startValue = end;
        }
      }

      clearInterval(timer);

      timer = window.setInterval(run, stepTime);

      run();
    },
    250
  );
}
