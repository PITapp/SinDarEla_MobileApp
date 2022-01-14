export interface AbrechnungBasis {
  AbrechnungBasisID: number;
  Art: string;
  Jahr: number;
  Monat: number;
  Gesperrt: boolean;
  Info: string;
}

export interface AbrechnungKundenReststunden {
  AbrechnungKundenReststundenID: number;
  KundenID: number;
  KundenLeistungArtID: number;
  AbrechnungBasisID: number;
  BaseID: number;
  KundenLeistungID: number;
  LeistungArt: string;
  LeistungSchluessel: string;
  KundenLeistungenBescheidID: number;
  Von: string;
  Bis: string;
  Stunden: number;
  StundenArt: string;
  Selbstkostenbefreiung: boolean;
  KundenLeistungenBescheideKontingentID: number;
  KontingentVon: string;
  KontingentBis: string;
  Anspruch: number;
  Reststunden: number;
  NichtAbgerechnet: number;
  Offen: number;
  Info: string;
}

export interface Aufgaben {
  AufgabeID: number;
  BaseID: number;
  ZustaendigBaseID: number;
  Am: string;
  Titel: string;
  Beschreibung: string;
  FaelligBis: string;
  Erledigt: boolean;
  ErledigtAm: string;
  Info: string;
}

export interface AuswahlJahr {
  AuswahlJahrID: number;
  Jahr: number;
}

export interface AuswahlMonat {
  AuswahlMonatID: number;
  MonatZahl: number;
  MonatText: string;
}

export interface Base {
  BaseID: number;
  AnredeID: number;
  Name1: string;
  Name2: string;
  NameKuerzel: string;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Versicherungsnummer: string;
  Staatsangehoerigkeit: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Webseite: string;
  BildURL: string;
  Notiz: string;
  KontoName: string;
  KontoNummer: string;
  KontoInfo: string;
}

export interface BaseAnreden {
  AnredeID: number;
  Anrede: string;
}

export interface BaseKontakte {
  KontaktID: number;
  BaseID: number;
  NameKontakt: string;
  Handy: string;
  Telefon: string;
  EMail: string;
  Info: string;
}

export interface Benutzer {
  BenutzerID: number;
  BaseID: number;
  AspNetUsers_Id: string;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  Notiz: string;
  LetzteKundenID: number;
  LetzteMitarbeiterID: number;
  LetzteBaseID: number;
  LetzteBenutzerID: number;
  FilterKontakteName: string;
  FilterKontakteStrasse: string;
  FilterKontaktePlz: string;
  FilterKontakteOrt: string;
  FilterKontakteNotiz: string;
  FilterKontakteVerlinkt: string;
}

export interface Debugg {
  DebuggID: number;
  Variable: string;
  VariableWert: string;
  Sortierung1: number;
  Sortierung2: number;
}

export interface Dokumente {
  DokumentID: number;
  DokumenteKategorieID: number;
  LinkID: number;
  Titel: string;
  Beschreibung: string;
  DokumentURL: string;
  DokumentName: string;
  DokumentNameUrsprung: string;
  DokumentTyp: string;
  DokumentErstelltVon: string;
  DokumentErstelltAm: string;
}

export interface DokumenteKategorien {
  DokumenteKategorieID: number;
  Titel: string;
}

export interface Ereignisse {
  EreignisID: number;
  BaseID: number;
  EreignisArtCode: string;
  EreignisSonderurlaubArtID: number;
  KundenID: number;
  KundenLeistungArtID: number;
  Start: string;
  Ende: string;
  GanzerTag: number;
  Titel: string;
  Beschreibung: string;
  BeantragtAm: string;
  BearbeiterBaseID: number;
  GenehmigtAm: string;
  AbgelehntAm: string;
  Begruendung: string;
  StatusAntrag: string;
  Verwendung: string;
  Gesperrt: number;
  Wert01: number;
  Bemerkungen: string;
  GefuehlSituation01: number;
  GefuehlSituation02: number;
  GefuehlSituation03: number;
  GefuehlSituation04: number;
  GefuehlSituation05: number;
  GefuehlSituation06: number;
  KundenFahrtMinuten: number;
  KundenFahrtKM: number;
  BetreuerAnAbReiseMinuten: number;
  BetreuerAnAbReiseKM: number;
}

export interface EreignisseArten {
  EreignisArtCode: string;
  Gruppe: string;
  Ebene: string;
  Bezeichnung: string;
  Kurzzeichen: string;
  TerminGanzerTag: boolean;
  Beantragungspflicht: boolean;
  Begruendungspflicht: boolean;
  TeilnehmerErfassen: boolean;
  KundeErfassen: boolean;
  FarbeName: string;
  FarbeHintergrund: string;
  FarbeText: string;
  FarbeName2: string;
  FarbeHintergrund2: string;
  FarbeText2: string;
  VerwendenFuer: string;
  Sortierung: number;
  TermineDienstplan: boolean;
  TermineManagement: boolean;
  SortierungTermineDienstplan: number;
  SortierungTermineManagement: number;
}

export interface EreignisseSonderurlaubArten {
  EreignisSonderurlaubArtID: number;
  Bezeichnung: string;
  FreieTage: string;
  FreieTageZusatz: string;
  Sortierung: number;
  Info: string;
}

export interface EreignisseTeilnehmer {
  EreignisseTeilnehmerID: number;
  BaseID: number;
  EreignisID: number;
  StatusCode: string;
  Nachricht: string;
}

export interface EreignisseTeilnehmerStatus {
  StatusCode: string;
  Titel: string;
  Sortierung: number;
  VerwendenFuer: string;
}

export interface Feedback {
  FeedbackID: number;
  BaseID: number;
  ErstelltAm: string;
  Modul: string;
  Titel: string;
  Beschreibung: string;
  Erledigt: boolean;
  ErledigtAm: string;
}

export interface InfotexteHtml {
  InfotextID: number;
  Code: string;
  Titel: string;
  Inhalt: string;
  Sortierung: number;
}

export interface Kunden {
  KundenID: number;
  BaseID: number;
  KundenStatusID: number;
  Betreuungsbeginn: string;
  Vorbemerkungen: string;
  Info: string;
}

export interface KundenKontakte {
  KundenKontaktID: number;
  KundenID: number;
  KundenKontaktArtID: number;
  Name: string;
  Adresse: string;
  Telefon: string;
  EMail: string;
  BaseID: number;
  Hauptansprechpartner: boolean;
  Info: string;
}

export interface KundenKontakteArten {
  KundenKontaktArtID: number;
  Bezeichnung: string;
  Gruppe: string;
  Sortierung: number;
}

export interface KundenLeistungArten {
  KundenLeistungArtID: number;
  LeistungArt: string;
  LeistungSchluessel: string;
}

export interface KundenLeistungen {
  KundenLeistungID: number;
  KundenID: number;
  KundenLeistungArtID: number;
}

export interface KundenLeistungenBescheide {
  KundenLeistungenBescheidID: number;
  KundenKontaktID: number;
  KundenLeistungID: number;
  StatusCode: string;
  Von: string;
  Bis: string;
  Stunden: number;
  StundenArt: string;
  Geschaeftszahl: string;
  Selbstkostenbefreiung: boolean;
  BeantragtAm: string;
  Ergaenzungsbescheid: boolean;
  ErgaenzungsbescheidInfo: string;
  Ablaufdatum: string;
  Info: string;
}

export interface KundenLeistungenBescheideKontingente {
  KundenLeistungenBescheideKontingentID: number;
  KundenLeistungenBescheidID: number;
  KontingentVon: string;
  KontingentBis: string;
  Anspruch: number;
  Verbrauch: number;
  Rest: number;
}

export interface KundenLeistungenBescheideStatus {
  StatusCode: string;
  Bezeichnung: string;
  Sortierung: number;
}

export interface KundenLeistungenBetreuer {
  KundenLeistungenBetreuerID: number;
  BaseID: number;
  KundenLeistungenBetreuerArtID: number;
  KundenLeistungID: number;
  Info: string;
}

export interface KundenLeistungenBetreuerArten {
  KundenLeistungenBetreuerArtID: number;
  Bezeichnung: string;
  Sortierung: number;
}

export interface KundenStatus {
  KundenStatusID: number;
  Status: string;
}

export interface Mitarbeiter {
  MitarbeiterID: number;
  BaseID: number;
  MitarbeiterArtID: number;
  MitarbeiterStatusID: number;
  ArbeitsrechtEintritt: string;
  ArbeitsrechtAustritt: string;
  LetzterEintritt: string;
  LetzterAustritt: string;
  Notfallkontakt: string;
  NotfallkontaktTelefon: string;
  Info: string;
  InfoGF: string;
}

export interface MitarbeiterArten {
  MitarbeiterArtID: number;
  MitarbeiterArt: string;
  Sortierung: number;
}

export interface MitarbeiterFortbildungen {
  MitarbeiterFortbildungID: number;
  DokumentID: number;
  MitarbeiterID: number;
  FortbildungArtID: number;
  Von: string;
  Bis: string;
  Veranstalter: string;
  Kosten: number;
  Info: string;
}

export interface MitarbeiterFortbildungenArten {
  FortbildungArtID: number;
  Titel: string;
  Sortierung: number;
}

export interface MitarbeiterKundenbudget {
  MitarbeiterKundenbudgetID: number;
  MitarbeiterID: number;
  KundenbudgetKategorieID: number;
  AusgabeAm: string;
  AusgabeText: string;
  AusgabeBetrag: number;
  Info: string;
}

export interface MitarbeiterKundenbudgetKategorien {
  KundenbudgetKategorieID: number;
  Titel: string;
  Sortierung: number;
}

export interface MitarbeiterStatus {
  MitarbeiterStatusID: number;
  Status: string;
  Sortierung: number;
}

export interface MitarbeiterTaetigkeiten {
  MitarbeiterTaetigkeitenID: number;
  MitarbeiterID: number;
  MitarbeiterTaetigkeitenArtID: number;
}

export interface MitarbeiterTaetigkeitenArten {
  MitarbeiterTaetigkeitenArtID: number;
  TaetigkeitArt: string;
  LeistungSchluessel: string;
  Sortierung: number;
}

export interface MitarbeiterUrlaub {
  MitarbeiterUrlaubID: number;
  MitarbeiterID: number;
  Jahr: number;
  AnspruchJahrTage: number;
  AnspruchJahrWochen: number;
  RestVorjahr: number;
  AnspruchJahr: number;
  AnspruchGesamt: number;
  Verbraucht: number;
  Geplant: number;
  RestJahr: number;
  Info: string;
}

export interface MitarbeiterUrlaubDetail {
  MitarbeiterUrlaubDetailsID: number;
  MitarbeiterUrlaubID: number;
  Art: string;
  Von: string;
  Bis: string;
  Tage: number;
  StundenDetail: number;
  StundenNormalarbeitszeit: number;
  Wochentage: number;
  Info: string;
}

export interface MitarbeiterUrlaubKumuliertAnspruch {
  MitarbeiterUrlaubKumuliertAnspruchID: number;
  MitarbeiterID: number;
  Jahre: number;
  Art: string;
  AnspruchTage: number;
  AnspruchWochen: number;
  AnspruchBerechnetAb: string;
  AnspruchAb: string;
  AnspruchJahrVon: number;
  AnspruchJahrBis: number;
}

export interface MitarbeiterUrlaubKumuliertDienstzeiten {
  MitarbeiterUrlaubKumuliertDienstzeitenID: number;
  MitarbeiterID: number;
  Sortierung: number;
  Art: string;
  DienstzeitCode: string;
  DienstzeitAnrechnungInfo: string;
  DienstzeitBerechnet: number;
  DienstzeitAnrechnung: number;
}

export interface MitarbeiterVerlaufDienstzeiten {
  MitarbeiterVerlaufDienstzeitenID: number;
  MitarbeiterID: number;
  MitarbeiterVerlaufDienstzeitenArtID: number;
  Von: string;
  Bis: string;
  AnzahlTage: number;
  AnzahlMonate: number;
  AnzahlJahre: number;
  AnzahlJahreKomma: number;
  AnzahlBisLeer: number;
  AnzahlText: string;
  AnrechnungGehalt: boolean;
  AnrechnungUrlaub: boolean;
  Sortierung: number;
  Info: string;
}

export interface MitarbeiterVerlaufDienstzeitenArten {
  MitarbeiterVerlaufDienstzeitenArtID: number;
  Status: string;
  DienstzeitRechnen: boolean;
  DienstzeitGruppe: string;
  Referenz_MitarbeiterStatusID: number;
  Sortierung: number;
}

export interface MitarbeiterVerlaufGehalt {
  MitarbeiterVerlaufGehaltID: number;
  MitarbeiterID: number;
  Von: string;
  Bis: string;
  Verwendungsgruppe: number;
  Gehaltsstufe: number;
  Info: string;
}

export interface MitarbeiterVerlaufNormalarbeitszeit {
  MitarbeiterVerlaufNormalarbeitszeitID: number;
  MitarbeiterID: number;
  Von: string;
  Bis: string;
  Stunden: number;
  Wochentage: number;
  Info: string;
}

export interface Mitteilungen {
  MitteilungID: number;
  BaseID: number;
  DokumentID: number;
  Am: string;
  Titel: string;
  Beschreibung: string;
}

export interface MitteilungenVerteiler {
  MitteilungVerteilerID: number;
  MitteilungID: number;
  BaseID: number;
  Gelesen: boolean;
  GelesenAm: string;
  Kommentar: string;
}

export interface Notizen {
  NotizID: number;
  Modul: string;
  LinkID: number;
  Am: string;
  Titel: string;
  Notiz: string;
}

export interface Protokoll {
  ProtokollID: number;
  BaseID: number;
  ErstelltAm: string;
  Art: string;
  Bereich: string;
  Titel: string;
  Beschreibung: string;
  ManagementZeigen: number;
  LinkID: number;
  Gelesen: boolean;
  GelesenAm: string;
}

export interface RegelnAbwesenheiten {
  RegelnAbwesenheitenID: number;
  RegelBezeichnung: string;
  RegelWert: number;
  RegelInfo: string;
  Beschreibung: string;
}

export interface VwBaseAlle {
  BaseID: number;
  Name1: string;
  Name2: string;
  NameKuerzel: string;
  AnredeID: number;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Versicherungsnummer: string;
  Staatsangehoerigkeit: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Webseite: string;
  BildURL: string;
  Notiz: string;
  KontoName: string;
  KontoNummer: string;
  KontoInfo: string;
  NameGesamt: string;
}

export interface VwBaseKontakte {
  BaseID: number;
  Name1: string;
  Name2: string;
  NameGesamt: string;
  NameKuerzel: string;
  AnredeID: number;
  Anrede: string;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Versicherungsnummer: string;
  Staatsangehoerigkeit: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Webseite: string;
  BildURL: string;
  Notiz: string;
  KontoName: string;
  KontoNummer: string;
  KontoInfo: string;
  KundenID: number;
  MitarbeiterID: number;
  BenutzerID: number;
}

export interface VwBaseOrte {
  Ort: string;
}

export interface VwBasePlz {
  PLZ: string;
}

export interface VwBenutzerBase {
  BenutzerID: number;
  AspNetUsers_Id: string;
  BaseID: number;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  Notiz: string;
  Name1: string;
  Name2: string;
  NameGesamt: string;
  NameKuerzel: string;
  AnredeID: number;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Versicherungsnummer: string;
  Staatsangehoerigkeit: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Webseite: string;
  BildURL: string;
  BaseNotiz: string;
}

export interface VwBenutzerRollen {
  BenutzerID: number;
  AspNetUsers_Id: string;
  BaseID: number;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  Notiz: string;
  LetzteKundenID: number;
  LetzteMitarbeiterID: number;
  LetzteBaseID: number;
  LetzteBenutzerID: number;
  FilterKontakteName: string;
  FilterKontakteStrasse: string;
  FilterKontaktePlz: string;
  FilterKontakteOrt: string;
  FilterKontakteNotiz: string;
  FilterKontakteVerlinkt: string;
  RoleId: string;
  RolleTitel: string;
}

export interface VwKundenBetreuer {
  KundenID: number;
  Betreuungsart: string;
  Leistungsart: string;
  Name1: string;
  Name2: string;
  NameGesamtBetreuer: string;
  NameKuerzel: string;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  BildURL: string;
  Notiz: string;
}

export interface VwKundenUndBetreuerAuswahl {
  KundenID: number;
  BaseID: number;
  KundenStatusID: number;
  BetreuerBaseID: number;
  Betreuungsbeginn: string;
  Vorbemerkungen: string;
  Info: string;
  Status: string;
  Name1: string;
  Name2: string;
  NameGesamt: string;
  NameKuerzel: string;
  Anrede: string;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Versicherungsnummer: string;
  Staatsangehoerigkeit: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Webseite: string;
  BildURL: string;
  Notiz: string;
}

export interface VwRollen {
  Id: string;
  Titel: string;
}
