export class Confi_App {
  private _entreprise: string = "GNIOOS";
  private _logo: string;
  constructor() {}

  set S_entreprise(entr: string) {
    this._entreprise = entr;
  }
  set S_logo(log: string) {
    this._logo = log;
  }
  get G_logo() {
    return this._logo;
  }
  get G_entreprise() {
    return this._entreprise;
  }
}
