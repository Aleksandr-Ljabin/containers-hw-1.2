export default class ErrorRepository {
  constructor() {
    this.members = new Map();
    this.members.set('000', 'Ошибка');
  }

  translate(code) {
    if (this.members.has(code)) {
      return this.members.get(code);
    }
    return 'Unknown error';
  }
}
