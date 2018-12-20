import pluralize from 'pluralize';

export class Plural {
  /**
   * @Method: Returns the plural form of any noun.
   * @Param {string}
   * @Return {string}
   */
  public getPlural(str: any): string {
    return pluralize.plural(str);
  }
}
