class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    for (let call of this.alarmCollection) {
      if (call.time === time) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (call) => call.time !== time
    );
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(
      () =>
        this.alarmCollection.forEach((call) => {
          if (call.time === this.getCurrentFormattedTime() && call.canCall) {
            call.canCall = false;
            call.callback();
          }
        }),
      1000
    );
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((call) => (call.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
