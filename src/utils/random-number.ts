export class RandomNumber {
  public SumTwoRandomNumbers(): number {
    return this.generateRandomNumber() + this.generateRandomNumber();
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }
}
