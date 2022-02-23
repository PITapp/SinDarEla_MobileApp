import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { ConfigService } from './config.service';
import { ODataClient } from './odata-client';
import * as models from './db-sin-dar-ela.model';

@Injectable()
export class DbSinDarElaService {
  odata: ODataClient;
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('dbSinDarEla');
    this.odata = new ODataClient(this.http, this.basePath, { legacy: false, withCredentials: true });
  }

  getAbrechnungBases(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/AbrechnungBases`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createAbrechnungBasis(expand: string | null, abrechnungBasis: models.AbrechnungBasis | null) : Observable<any> {
    return this.odata.post(`/AbrechnungBases`, abrechnungBasis, { expand }, []);
  }

  deleteAbrechnungBasis(abrechnungBasisId: number | null) : Observable<any> {
    return this.odata.delete(`/AbrechnungBases(${abrechnungBasisId})`, item => !(item.AbrechnungBasisID == abrechnungBasisId));
  }

  getAbrechnungBasisByAbrechnungBasisId(expand: string | null, abrechnungBasisId: number | null) : Observable<any> {
    return this.odata.getById(`/AbrechnungBases(${abrechnungBasisId})`, { expand });
  }

  updateAbrechnungBasis(expand: string | null, abrechnungBasisId: number | null, abrechnungBasis: models.AbrechnungBasis | null) : Observable<any> {
    return this.odata.patch(`/AbrechnungBases(${abrechnungBasisId})`, abrechnungBasis, item => item.AbrechnungBasisID == abrechnungBasisId, { expand }, []);
  }

  getAbrechnungKundenReststundens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/AbrechnungKundenReststundens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createAbrechnungKundenReststunden(expand: string | null, abrechnungKundenReststunden: models.AbrechnungKundenReststunden | null) : Observable<any> {
    return this.odata.post(`/AbrechnungKundenReststundens`, abrechnungKundenReststunden, { expand }, ['Kunden', 'KundenLeistungArten']);
  }

  deleteAbrechnungKundenReststunden(abrechnungKundenReststundenId: number | null) : Observable<any> {
    return this.odata.delete(`/AbrechnungKundenReststundens(${abrechnungKundenReststundenId})`, item => !(item.AbrechnungKundenReststundenID == abrechnungKundenReststundenId));
  }

  getAbrechnungKundenReststundenByAbrechnungKundenReststundenId(expand: string | null, abrechnungKundenReststundenId: number | null) : Observable<any> {
    return this.odata.getById(`/AbrechnungKundenReststundens(${abrechnungKundenReststundenId})`, { expand });
  }

  updateAbrechnungKundenReststunden(expand: string | null, abrechnungKundenReststundenId: number | null, abrechnungKundenReststunden: models.AbrechnungKundenReststunden | null) : Observable<any> {
    return this.odata.patch(`/AbrechnungKundenReststundens(${abrechnungKundenReststundenId})`, abrechnungKundenReststunden, item => item.AbrechnungKundenReststundenID == abrechnungKundenReststundenId, { expand }, ['Kunden','KundenLeistungArten']);
  }

  getAufgabens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Aufgabens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createAufgaben(expand: string | null, aufgaben: models.Aufgaben | null) : Observable<any> {
    return this.odata.post(`/Aufgabens`, aufgaben, { expand }, ['Base', 'Base1']);
  }

  deleteAufgaben(aufgabeId: number | null) : Observable<any> {
    return this.odata.delete(`/Aufgabens(${aufgabeId})`, item => !(item.AufgabeID == aufgabeId));
  }

  getAufgabenByAufgabeId(expand: string | null, aufgabeId: number | null) : Observable<any> {
    return this.odata.getById(`/Aufgabens(${aufgabeId})`, { expand });
  }

  updateAufgaben(expand: string | null, aufgabeId: number | null, aufgaben: models.Aufgaben | null) : Observable<any> {
    return this.odata.patch(`/Aufgabens(${aufgabeId})`, aufgaben, item => item.AufgabeID == aufgabeId, { expand }, ['Base','Base1']);
  }

  getAuswahlJahrs(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/AuswahlJahrs`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createAuswahlJahr(expand: string | null, auswahlJahr: models.AuswahlJahr | null) : Observable<any> {
    return this.odata.post(`/AuswahlJahrs`, auswahlJahr, { expand }, []);
  }

  deleteAuswahlJahr(auswahlJahrId: number | null) : Observable<any> {
    return this.odata.delete(`/AuswahlJahrs(${auswahlJahrId})`, item => !(item.AuswahlJahrID == auswahlJahrId));
  }

  getAuswahlJahrByAuswahlJahrId(expand: string | null, auswahlJahrId: number | null) : Observable<any> {
    return this.odata.getById(`/AuswahlJahrs(${auswahlJahrId})`, { expand });
  }

  updateAuswahlJahr(expand: string | null, auswahlJahrId: number | null, auswahlJahr: models.AuswahlJahr | null) : Observable<any> {
    return this.odata.patch(`/AuswahlJahrs(${auswahlJahrId})`, auswahlJahr, item => item.AuswahlJahrID == auswahlJahrId, { expand }, []);
  }

  getAuswahlMonats(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/AuswahlMonats`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createAuswahlMonat(expand: string | null, auswahlMonat: models.AuswahlMonat | null) : Observable<any> {
    return this.odata.post(`/AuswahlMonats`, auswahlMonat, { expand }, []);
  }

  deleteAuswahlMonat(auswahlMonatId: number | null) : Observable<any> {
    return this.odata.delete(`/AuswahlMonats(${auswahlMonatId})`, item => !(item.AuswahlMonatID == auswahlMonatId));
  }

  getAuswahlMonatByAuswahlMonatId(expand: string | null, auswahlMonatId: number | null) : Observable<any> {
    return this.odata.getById(`/AuswahlMonats(${auswahlMonatId})`, { expand });
  }

  updateAuswahlMonat(expand: string | null, auswahlMonatId: number | null, auswahlMonat: models.AuswahlMonat | null) : Observable<any> {
    return this.odata.patch(`/AuswahlMonats(${auswahlMonatId})`, auswahlMonat, item => item.AuswahlMonatID == auswahlMonatId, { expand }, []);
  }

  getBases(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Bases`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBase(expand: string | null, base: models.Base | null) : Observable<any> {
    return this.odata.post(`/Bases`, base, { expand }, ['BaseAnreden']);
  }

  deleteBase(baseId: number | null) : Observable<any> {
    return this.odata.delete(`/Bases(${baseId})`, item => !(item.BaseID == baseId));
  }

  getBaseByBaseId(expand: string | null, baseId: number | null) : Observable<any> {
    return this.odata.getById(`/Bases(${baseId})`, { expand });
  }

  updateBase(expand: string | null, baseId: number | null, base: models.Base | null) : Observable<any> {
    return this.odata.patch(`/Bases(${baseId})`, base, item => item.BaseID == baseId, { expand }, ['BaseAnreden']);
  }

  getBaseAnredens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/BaseAnredens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBaseAnreden(expand: string | null, baseAnreden: models.BaseAnreden | null) : Observable<any> {
    return this.odata.post(`/BaseAnredens`, baseAnreden, { expand }, []);
  }

  deleteBaseAnreden(anredeId: number | null) : Observable<any> {
    return this.odata.delete(`/BaseAnredens(${anredeId})`, item => !(item.AnredeID == anredeId));
  }

  getBaseAnredenByAnredeId(expand: string | null, anredeId: number | null) : Observable<any> {
    return this.odata.getById(`/BaseAnredens(${anredeId})`, { expand });
  }

  updateBaseAnreden(expand: string | null, anredeId: number | null, baseAnreden: models.BaseAnreden | null) : Observable<any> {
    return this.odata.patch(`/BaseAnredens(${anredeId})`, baseAnreden, item => item.AnredeID == anredeId, { expand }, []);
  }

  getBaseKontaktes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/BaseKontaktes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBaseKontakte(expand: string | null, baseKontakte: models.BaseKontakte | null) : Observable<any> {
    return this.odata.post(`/BaseKontaktes`, baseKontakte, { expand }, ['Base']);
  }

  deleteBaseKontakte(kontaktId: number | null) : Observable<any> {
    return this.odata.delete(`/BaseKontaktes(${kontaktId})`, item => !(item.KontaktID == kontaktId));
  }

  getBaseKontakteByKontaktId(expand: string | null, kontaktId: number | null) : Observable<any> {
    return this.odata.getById(`/BaseKontaktes(${kontaktId})`, { expand });
  }

  updateBaseKontakte(expand: string | null, kontaktId: number | null, baseKontakte: models.BaseKontakte | null) : Observable<any> {
    return this.odata.patch(`/BaseKontaktes(${kontaktId})`, baseKontakte, item => item.KontaktID == kontaktId, { expand }, ['Base']);
  }

  getBenutzers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Benutzers`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBenutzer(expand: string | null, benutzer: models.Benutzer | null) : Observable<any> {
    return this.odata.post(`/Benutzers`, benutzer, { expand }, ['Base']);
  }

  deleteBenutzer(benutzerId: number | null) : Observable<any> {
    return this.odata.delete(`/Benutzers(${benutzerId})`, item => !(item.BenutzerID == benutzerId));
  }

  getBenutzerByBenutzerId(expand: string | null, benutzerId: number | null) : Observable<any> {
    return this.odata.getById(`/Benutzers(${benutzerId})`, { expand });
  }

  updateBenutzer(expand: string | null, benutzerId: number | null, benutzer: models.Benutzer | null) : Observable<any> {
    return this.odata.patch(`/Benutzers(${benutzerId})`, benutzer, item => item.BenutzerID == benutzerId, { expand }, ['Base']);
  }

  getDebuggs(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Debuggs`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createDebugg(expand: string | null, debugg: models.Debugg | null) : Observable<any> {
    return this.odata.post(`/Debuggs`, debugg, { expand }, []);
  }

  deleteDebugg(debuggId: number | null) : Observable<any> {
    return this.odata.delete(`/Debuggs(${debuggId})`, item => !(item.DebuggID == debuggId));
  }

  getDebuggByDebuggId(expand: string | null, debuggId: number | null) : Observable<any> {
    return this.odata.getById(`/Debuggs(${debuggId})`, { expand });
  }

  updateDebugg(expand: string | null, debuggId: number | null, debugg: models.Debugg | null) : Observable<any> {
    return this.odata.patch(`/Debuggs(${debuggId})`, debugg, item => item.DebuggID == debuggId, { expand }, []);
  }

  getDeviceCodes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/DeviceCodes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createDeviceCode(expand: string | null, deviceCode: models.DeviceCode | null) : Observable<any> {
    return this.odata.post(`/DeviceCodes`, deviceCode, { expand }, []);
  }

  deleteDeviceCode(userCode: string | null) : Observable<any> {
    return this.odata.delete(`/DeviceCodes('${encodeURIComponent(userCode)}')`, item => !(item.UserCode == userCode));
  }

  getDeviceCodeByUserCode(expand: string | null, userCode: string | null) : Observable<any> {
    return this.odata.getById(`/DeviceCodes('${encodeURIComponent(userCode)}')`, { expand });
  }

  updateDeviceCode(expand: string | null, userCode: string | null, deviceCode: models.DeviceCode | null) : Observable<any> {
    return this.odata.patch(`/DeviceCodes('${encodeURIComponent(userCode)}')`, deviceCode, item => item.UserCode == userCode, { expand }, []);
  }

  getDokumentes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Dokumentes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createDokumente(expand: string | null, dokumente: models.Dokumente | null) : Observable<any> {
    return this.odata.post(`/Dokumentes`, dokumente, { expand }, ['DokumenteKategorien']);
  }

  deleteDokumente(dokumentId: number | null) : Observable<any> {
    return this.odata.delete(`/Dokumentes(${dokumentId})`, item => !(item.DokumentID == dokumentId));
  }

  getDokumenteByDokumentId(expand: string | null, dokumentId: number | null) : Observable<any> {
    return this.odata.getById(`/Dokumentes(${dokumentId})`, { expand });
  }

  updateDokumente(expand: string | null, dokumentId: number | null, dokumente: models.Dokumente | null) : Observable<any> {
    return this.odata.patch(`/Dokumentes(${dokumentId})`, dokumente, item => item.DokumentID == dokumentId, { expand }, ['DokumenteKategorien']);
  }

  getDokumenteKategoriens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/DokumenteKategoriens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createDokumenteKategorien(expand: string | null, dokumenteKategorien: models.DokumenteKategorien | null) : Observable<any> {
    return this.odata.post(`/DokumenteKategoriens`, dokumenteKategorien, { expand }, []);
  }

  deleteDokumenteKategorien(dokumenteKategorieId: number | null) : Observable<any> {
    return this.odata.delete(`/DokumenteKategoriens(${dokumenteKategorieId})`, item => !(item.DokumenteKategorieID == dokumenteKategorieId));
  }

  getDokumenteKategorienByDokumenteKategorieId(expand: string | null, dokumenteKategorieId: number | null) : Observable<any> {
    return this.odata.getById(`/DokumenteKategoriens(${dokumenteKategorieId})`, { expand });
  }

  updateDokumenteKategorien(expand: string | null, dokumenteKategorieId: number | null, dokumenteKategorien: models.DokumenteKategorien | null) : Observable<any> {
    return this.odata.patch(`/DokumenteKategoriens(${dokumenteKategorieId})`, dokumenteKategorien, item => item.DokumenteKategorieID == dokumenteKategorieId, { expand }, []);
  }

  getEreignisses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Ereignisses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createEreignisse(expand: string | null, ereignisse: models.Ereignisse | null) : Observable<any> {
    return this.odata.post(`/Ereignisses`, ereignisse, { expand }, ['Base', 'EreignisseArten', 'EreignisseSonderurlaubArten', 'Kunden', 'KundenLeistungArten']);
  }

  deleteEreignisse(ereignisId: number | null) : Observable<any> {
    return this.odata.delete(`/Ereignisses(${ereignisId})`, item => !(item.EreignisID == ereignisId));
  }

  getEreignisseByEreignisId(expand: string | null, ereignisId: number | null) : Observable<any> {
    return this.odata.getById(`/Ereignisses(${ereignisId})`, { expand });
  }

  updateEreignisse(expand: string | null, ereignisId: number | null, ereignisse: models.Ereignisse | null) : Observable<any> {
    return this.odata.patch(`/Ereignisses(${ereignisId})`, ereignisse, item => item.EreignisID == ereignisId, { expand }, ['Base','EreignisseArten','EreignisseSonderurlaubArten','Kunden','KundenLeistungArten']);
  }

  getEreignisseArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/EreignisseArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createEreignisseArten(expand: string | null, ereignisseArten: models.EreignisseArten | null) : Observable<any> {
    return this.odata.post(`/EreignisseArtens`, ereignisseArten, { expand }, []);
  }

  deleteEreignisseArten(ereignisArtCode: string | null) : Observable<any> {
    return this.odata.delete(`/EreignisseArtens('${encodeURIComponent(ereignisArtCode)}')`, item => !(item.EreignisArtCode == ereignisArtCode));
  }

  getEreignisseArtenByEreignisArtCode(expand: string | null, ereignisArtCode: string | null) : Observable<any> {
    return this.odata.getById(`/EreignisseArtens('${encodeURIComponent(ereignisArtCode)}')`, { expand });
  }

  updateEreignisseArten(expand: string | null, ereignisArtCode: string | null, ereignisseArten: models.EreignisseArten | null) : Observable<any> {
    return this.odata.patch(`/EreignisseArtens('${encodeURIComponent(ereignisArtCode)}')`, ereignisseArten, item => item.EreignisArtCode == ereignisArtCode, { expand }, []);
  }

  getEreignisseSonderurlaubArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/EreignisseSonderurlaubArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createEreignisseSonderurlaubArten(expand: string | null, ereignisseSonderurlaubArten: models.EreignisseSonderurlaubArten | null) : Observable<any> {
    return this.odata.post(`/EreignisseSonderurlaubArtens`, ereignisseSonderurlaubArten, { expand }, []);
  }

  deleteEreignisseSonderurlaubArten(ereignisSonderurlaubArtId: number | null) : Observable<any> {
    return this.odata.delete(`/EreignisseSonderurlaubArtens(${ereignisSonderurlaubArtId})`, item => !(item.EreignisSonderurlaubArtID == ereignisSonderurlaubArtId));
  }

  getEreignisseSonderurlaubArtenByEreignisSonderurlaubArtId(expand: string | null, ereignisSonderurlaubArtId: number | null) : Observable<any> {
    return this.odata.getById(`/EreignisseSonderurlaubArtens(${ereignisSonderurlaubArtId})`, { expand });
  }

  updateEreignisseSonderurlaubArten(expand: string | null, ereignisSonderurlaubArtId: number | null, ereignisseSonderurlaubArten: models.EreignisseSonderurlaubArten | null) : Observable<any> {
    return this.odata.patch(`/EreignisseSonderurlaubArtens(${ereignisSonderurlaubArtId})`, ereignisseSonderurlaubArten, item => item.EreignisSonderurlaubArtID == ereignisSonderurlaubArtId, { expand }, []);
  }

  getEreignisseTeilnehmers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/EreignisseTeilnehmers`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createEreignisseTeilnehmer(expand: string | null, ereignisseTeilnehmer: models.EreignisseTeilnehmer | null) : Observable<any> {
    return this.odata.post(`/EreignisseTeilnehmers`, ereignisseTeilnehmer, { expand }, ['Base', 'Ereignisse', 'EreignisseTeilnehmerStatus']);
  }

  deleteEreignisseTeilnehmer(ereignisseTeilnehmerId: number | null) : Observable<any> {
    return this.odata.delete(`/EreignisseTeilnehmers(${ereignisseTeilnehmerId})`, item => !(item.EreignisseTeilnehmerID == ereignisseTeilnehmerId));
  }

  getEreignisseTeilnehmerByEreignisseTeilnehmerId(expand: string | null, ereignisseTeilnehmerId: number | null) : Observable<any> {
    return this.odata.getById(`/EreignisseTeilnehmers(${ereignisseTeilnehmerId})`, { expand });
  }

  updateEreignisseTeilnehmer(expand: string | null, ereignisseTeilnehmerId: number | null, ereignisseTeilnehmer: models.EreignisseTeilnehmer | null) : Observable<any> {
    return this.odata.patch(`/EreignisseTeilnehmers(${ereignisseTeilnehmerId})`, ereignisseTeilnehmer, item => item.EreignisseTeilnehmerID == ereignisseTeilnehmerId, { expand }, ['Base','Ereignisse','EreignisseTeilnehmerStatus']);
  }

  getEreignisseTeilnehmerStatuses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/EreignisseTeilnehmerStatuses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createEreignisseTeilnehmerStatus(expand: string | null, ereignisseTeilnehmerStatus: models.EreignisseTeilnehmerStatus | null) : Observable<any> {
    return this.odata.post(`/EreignisseTeilnehmerStatuses`, ereignisseTeilnehmerStatus, { expand }, []);
  }

  deleteEreignisseTeilnehmerStatus(statusCode: string | null) : Observable<any> {
    return this.odata.delete(`/EreignisseTeilnehmerStatuses('${encodeURIComponent(statusCode)}')`, item => !(item.StatusCode == statusCode));
  }

  getEreignisseTeilnehmerStatusByStatusCode(expand: string | null, statusCode: string | null) : Observable<any> {
    return this.odata.getById(`/EreignisseTeilnehmerStatuses('${encodeURIComponent(statusCode)}')`, { expand });
  }

  updateEreignisseTeilnehmerStatus(expand: string | null, statusCode: string | null, ereignisseTeilnehmerStatus: models.EreignisseTeilnehmerStatus | null) : Observable<any> {
    return this.odata.patch(`/EreignisseTeilnehmerStatuses('${encodeURIComponent(statusCode)}')`, ereignisseTeilnehmerStatus, item => item.StatusCode == statusCode, { expand }, []);
  }

  getFeedbacks(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Feedbacks`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createFeedback(expand: string | null, feedback: models.Feedback | null) : Observable<any> {
    return this.odata.post(`/Feedbacks`, feedback, { expand }, ['Base']);
  }

  deleteFeedback(feedbackId: number | null) : Observable<any> {
    return this.odata.delete(`/Feedbacks(${feedbackId})`, item => !(item.FeedbackID == feedbackId));
  }

  getFeedbackByFeedbackId(expand: string | null, feedbackId: number | null) : Observable<any> {
    return this.odata.getById(`/Feedbacks(${feedbackId})`, { expand });
  }

  updateFeedback(expand: string | null, feedbackId: number | null, feedback: models.Feedback | null) : Observable<any> {
    return this.odata.patch(`/Feedbacks(${feedbackId})`, feedback, item => item.FeedbackID == feedbackId, { expand }, ['Base']);
  }

  getInfotexteHtmls(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/InfotexteHtmls`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createInfotexteHtml(expand: string | null, infotexteHtml: models.InfotexteHtml | null) : Observable<any> {
    return this.odata.post(`/InfotexteHtmls`, infotexteHtml, { expand }, []);
  }

  deleteInfotexteHtml(infotextId: number | null) : Observable<any> {
    return this.odata.delete(`/InfotexteHtmls(${infotextId})`, item => !(item.InfotextID == infotextId));
  }

  getInfotexteHtmlByInfotextId(expand: string | null, infotextId: number | null) : Observable<any> {
    return this.odata.getById(`/InfotexteHtmls(${infotextId})`, { expand });
  }

  updateInfotexteHtml(expand: string | null, infotextId: number | null, infotexteHtml: models.InfotexteHtml | null) : Observable<any> {
    return this.odata.patch(`/InfotexteHtmls(${infotextId})`, infotexteHtml, item => item.InfotextID == infotextId, { expand }, []);
  }

  getKeys(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Keys`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKey(expand: string | null, key: models.Key | null) : Observable<any> {
    return this.odata.post(`/Keys`, key, { expand }, []);
  }

  deleteKey(id: string | null) : Observable<any> {
    return this.odata.delete(`/Keys('${encodeURIComponent(id)}')`, item => !(item.Id == id));
  }

  getKeyById(expand: string | null, id: string | null) : Observable<any> {
    return this.odata.getById(`/Keys('${encodeURIComponent(id)}')`, { expand });
  }

  updateKey(expand: string | null, id: string | null, key: models.Key | null) : Observable<any> {
    return this.odata.patch(`/Keys('${encodeURIComponent(id)}')`, key, item => item.Id == id, { expand }, []);
  }

  getKundens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Kundens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKunden(expand: string | null, kunden: models.Kunden | null) : Observable<any> {
    return this.odata.post(`/Kundens`, kunden, { expand }, ['Base', 'KundenStatus']);
  }

  deleteKunden(kundenId: number | null) : Observable<any> {
    return this.odata.delete(`/Kundens(${kundenId})`, item => !(item.KundenID == kundenId));
  }

  getKundenByKundenId(expand: string | null, kundenId: number | null) : Observable<any> {
    return this.odata.getById(`/Kundens(${kundenId})`, { expand });
  }

  updateKunden(expand: string | null, kundenId: number | null, kunden: models.Kunden | null) : Observable<any> {
    return this.odata.patch(`/Kundens(${kundenId})`, kunden, item => item.KundenID == kundenId, { expand }, ['Base','KundenStatus']);
  }

  getKundenKontaktes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenKontaktes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenKontakte(expand: string | null, kundenKontakte: models.KundenKontakte | null) : Observable<any> {
    return this.odata.post(`/KundenKontaktes`, kundenKontakte, { expand }, ['Kunden', 'KundenKontakteArten']);
  }

  deleteKundenKontakte(kundenKontaktId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenKontaktes(${kundenKontaktId})`, item => !(item.KundenKontaktID == kundenKontaktId));
  }

  getKundenKontakteByKundenKontaktId(expand: string | null, kundenKontaktId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenKontaktes(${kundenKontaktId})`, { expand });
  }

  updateKundenKontakte(expand: string | null, kundenKontaktId: number | null, kundenKontakte: models.KundenKontakte | null) : Observable<any> {
    return this.odata.patch(`/KundenKontaktes(${kundenKontaktId})`, kundenKontakte, item => item.KundenKontaktID == kundenKontaktId, { expand }, ['Kunden','KundenKontakteArten']);
  }

  getKundenKontakteArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenKontakteArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenKontakteArten(expand: string | null, kundenKontakteArten: models.KundenKontakteArten | null) : Observable<any> {
    return this.odata.post(`/KundenKontakteArtens`, kundenKontakteArten, { expand }, []);
  }

  deleteKundenKontakteArten(kundenKontaktArtId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenKontakteArtens(${kundenKontaktArtId})`, item => !(item.KundenKontaktArtID == kundenKontaktArtId));
  }

  getKundenKontakteArtenByKundenKontaktArtId(expand: string | null, kundenKontaktArtId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenKontakteArtens(${kundenKontaktArtId})`, { expand });
  }

  updateKundenKontakteArten(expand: string | null, kundenKontaktArtId: number | null, kundenKontakteArten: models.KundenKontakteArten | null) : Observable<any> {
    return this.odata.patch(`/KundenKontakteArtens(${kundenKontaktArtId})`, kundenKontakteArten, item => item.KundenKontaktArtID == kundenKontaktArtId, { expand }, []);
  }

  getKundenLeistungArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungArten(expand: string | null, kundenLeistungArten: models.KundenLeistungArten | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungArtens`, kundenLeistungArten, { expand }, []);
  }

  deleteKundenLeistungArten(kundenLeistungArtId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungArtens(${kundenLeistungArtId})`, item => !(item.KundenLeistungArtID == kundenLeistungArtId));
  }

  getKundenLeistungArtenByKundenLeistungArtId(expand: string | null, kundenLeistungArtId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungArtens(${kundenLeistungArtId})`, { expand });
  }

  updateKundenLeistungArten(expand: string | null, kundenLeistungArtId: number | null, kundenLeistungArten: models.KundenLeistungArten | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungArtens(${kundenLeistungArtId})`, kundenLeistungArten, item => item.KundenLeistungArtID == kundenLeistungArtId, { expand }, []);
  }

  getKundenLeistungens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungen(expand: string | null, kundenLeistungen: models.KundenLeistungen | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungens`, kundenLeistungen, { expand }, ['Kunden', 'KundenLeistungArten']);
  }

  deleteKundenLeistungen(kundenLeistungId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungens(${kundenLeistungId})`, item => !(item.KundenLeistungID == kundenLeistungId));
  }

  getKundenLeistungenByKundenLeistungId(expand: string | null, kundenLeistungId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungens(${kundenLeistungId})`, { expand });
  }

  updateKundenLeistungen(expand: string | null, kundenLeistungId: number | null, kundenLeistungen: models.KundenLeistungen | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungens(${kundenLeistungId})`, kundenLeistungen, item => item.KundenLeistungID == kundenLeistungId, { expand }, ['Kunden','KundenLeistungArten']);
  }

  getKundenLeistungenBescheides(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungenBescheides`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungenBescheide(expand: string | null, kundenLeistungenBescheide: models.KundenLeistungenBescheide | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungenBescheides`, kundenLeistungenBescheide, { expand }, ['KundenKontakte', 'KundenLeistungen', 'KundenLeistungenBescheideStatus']);
  }

  deleteKundenLeistungenBescheide(kundenLeistungenBescheidId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungenBescheides(${kundenLeistungenBescheidId})`, item => !(item.KundenLeistungenBescheidID == kundenLeistungenBescheidId));
  }

  getKundenLeistungenBescheideByKundenLeistungenBescheidId(expand: string | null, kundenLeistungenBescheidId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungenBescheides(${kundenLeistungenBescheidId})`, { expand });
  }

  updateKundenLeistungenBescheide(expand: string | null, kundenLeistungenBescheidId: number | null, kundenLeistungenBescheide: models.KundenLeistungenBescheide | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungenBescheides(${kundenLeistungenBescheidId})`, kundenLeistungenBescheide, item => item.KundenLeistungenBescheidID == kundenLeistungenBescheidId, { expand }, ['KundenKontakte','KundenLeistungen','KundenLeistungenBescheideStatus']);
  }

  getKundenLeistungenBescheideKontingentes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungenBescheideKontingentes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungenBescheideKontingente(expand: string | null, kundenLeistungenBescheideKontingente: models.KundenLeistungenBescheideKontingente | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungenBescheideKontingentes`, kundenLeistungenBescheideKontingente, { expand }, ['KundenLeistungenBescheide']);
  }

  deleteKundenLeistungenBescheideKontingente(kundenLeistungenBescheideKontingentId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungenBescheideKontingentes(${kundenLeistungenBescheideKontingentId})`, item => !(item.KundenLeistungenBescheideKontingentID == kundenLeistungenBescheideKontingentId));
  }

  getKundenLeistungenBescheideKontingenteByKundenLeistungenBescheideKontingentId(expand: string | null, kundenLeistungenBescheideKontingentId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungenBescheideKontingentes(${kundenLeistungenBescheideKontingentId})`, { expand });
  }

  updateKundenLeistungenBescheideKontingente(expand: string | null, kundenLeistungenBescheideKontingentId: number | null, kundenLeistungenBescheideKontingente: models.KundenLeistungenBescheideKontingente | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungenBescheideKontingentes(${kundenLeistungenBescheideKontingentId})`, kundenLeistungenBescheideKontingente, item => item.KundenLeistungenBescheideKontingentID == kundenLeistungenBescheideKontingentId, { expand }, ['KundenLeistungenBescheide']);
  }

  getKundenLeistungenBescheideStatuses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungenBescheideStatuses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungenBescheideStatus(expand: string | null, kundenLeistungenBescheideStatus: models.KundenLeistungenBescheideStatus | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungenBescheideStatuses`, kundenLeistungenBescheideStatus, { expand }, []);
  }

  deleteKundenLeistungenBescheideStatus(statusCode: string | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungenBescheideStatuses('${encodeURIComponent(statusCode)}')`, item => !(item.StatusCode == statusCode));
  }

  getKundenLeistungenBescheideStatusByStatusCode(expand: string | null, statusCode: string | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungenBescheideStatuses('${encodeURIComponent(statusCode)}')`, { expand });
  }

  updateKundenLeistungenBescheideStatus(expand: string | null, statusCode: string | null, kundenLeistungenBescheideStatus: models.KundenLeistungenBescheideStatus | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungenBescheideStatuses('${encodeURIComponent(statusCode)}')`, kundenLeistungenBescheideStatus, item => item.StatusCode == statusCode, { expand }, []);
  }

  getKundenLeistungenBetreuers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungenBetreuers`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungenBetreuer(expand: string | null, kundenLeistungenBetreuer: models.KundenLeistungenBetreuer | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungenBetreuers`, kundenLeistungenBetreuer, { expand }, ['Base', 'KundenLeistungenBetreuerArten', 'KundenLeistungen']);
  }

  deleteKundenLeistungenBetreuer(kundenLeistungenBetreuerId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungenBetreuers(${kundenLeistungenBetreuerId})`, item => !(item.KundenLeistungenBetreuerID == kundenLeistungenBetreuerId));
  }

  getKundenLeistungenBetreuerByKundenLeistungenBetreuerId(expand: string | null, kundenLeistungenBetreuerId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungenBetreuers(${kundenLeistungenBetreuerId})`, { expand });
  }

  updateKundenLeistungenBetreuer(expand: string | null, kundenLeistungenBetreuerId: number | null, kundenLeistungenBetreuer: models.KundenLeistungenBetreuer | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungenBetreuers(${kundenLeistungenBetreuerId})`, kundenLeistungenBetreuer, item => item.KundenLeistungenBetreuerID == kundenLeistungenBetreuerId, { expand }, ['Base','KundenLeistungenBetreuerArten','KundenLeistungen']);
  }

  getKundenLeistungenBetreuerArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenLeistungenBetreuerArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenLeistungenBetreuerArten(expand: string | null, kundenLeistungenBetreuerArten: models.KundenLeistungenBetreuerArten | null) : Observable<any> {
    return this.odata.post(`/KundenLeistungenBetreuerArtens`, kundenLeistungenBetreuerArten, { expand }, []);
  }

  deleteKundenLeistungenBetreuerArten(kundenLeistungenBetreuerArtId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenLeistungenBetreuerArtens(${kundenLeistungenBetreuerArtId})`, item => !(item.KundenLeistungenBetreuerArtID == kundenLeistungenBetreuerArtId));
  }

  getKundenLeistungenBetreuerArtenByKundenLeistungenBetreuerArtId(expand: string | null, kundenLeistungenBetreuerArtId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenLeistungenBetreuerArtens(${kundenLeistungenBetreuerArtId})`, { expand });
  }

  updateKundenLeistungenBetreuerArten(expand: string | null, kundenLeistungenBetreuerArtId: number | null, kundenLeistungenBetreuerArten: models.KundenLeistungenBetreuerArten | null) : Observable<any> {
    return this.odata.patch(`/KundenLeistungenBetreuerArtens(${kundenLeistungenBetreuerArtId})`, kundenLeistungenBetreuerArten, item => item.KundenLeistungenBetreuerArtID == kundenLeistungenBetreuerArtId, { expand }, []);
  }

  getKundenStatuses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/KundenStatuses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createKundenStatus(expand: string | null, kundenStatus: models.KundenStatus | null) : Observable<any> {
    return this.odata.post(`/KundenStatuses`, kundenStatus, { expand }, []);
  }

  deleteKundenStatus(kundenStatusId: number | null) : Observable<any> {
    return this.odata.delete(`/KundenStatuses(${kundenStatusId})`, item => !(item.KundenStatusID == kundenStatusId));
  }

  getKundenStatusByKundenStatusId(expand: string | null, kundenStatusId: number | null) : Observable<any> {
    return this.odata.getById(`/KundenStatuses(${kundenStatusId})`, { expand });
  }

  updateKundenStatus(expand: string | null, kundenStatusId: number | null, kundenStatus: models.KundenStatus | null) : Observable<any> {
    return this.odata.patch(`/KundenStatuses(${kundenStatusId})`, kundenStatus, item => item.KundenStatusID == kundenStatusId, { expand }, []);
  }

  getMitarbeiters(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Mitarbeiters`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiter(expand: string | null, mitarbeiter: models.Mitarbeiter | null) : Observable<any> {
    return this.odata.post(`/Mitarbeiters`, mitarbeiter, { expand }, ['Base', 'MitarbeiterArten', 'MitarbeiterStatus']);
  }

  deleteMitarbeiter(mitarbeiterId: number | null) : Observable<any> {
    return this.odata.delete(`/Mitarbeiters(${mitarbeiterId})`, item => !(item.MitarbeiterID == mitarbeiterId));
  }

  getMitarbeiterByMitarbeiterId(expand: string | null, mitarbeiterId: number | null) : Observable<any> {
    return this.odata.getById(`/Mitarbeiters(${mitarbeiterId})`, { expand });
  }

  updateMitarbeiter(expand: string | null, mitarbeiterId: number | null, mitarbeiter: models.Mitarbeiter | null) : Observable<any> {
    return this.odata.patch(`/Mitarbeiters(${mitarbeiterId})`, mitarbeiter, item => item.MitarbeiterID == mitarbeiterId, { expand }, ['Base','MitarbeiterArten','MitarbeiterStatus']);
  }

  getMitarbeiterArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterArten(expand: string | null, mitarbeiterArten: models.MitarbeiterArten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterArtens`, mitarbeiterArten, { expand }, []);
  }

  deleteMitarbeiterArten(mitarbeiterArtId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterArtens(${mitarbeiterArtId})`, item => !(item.MitarbeiterArtID == mitarbeiterArtId));
  }

  getMitarbeiterArtenByMitarbeiterArtId(expand: string | null, mitarbeiterArtId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterArtens(${mitarbeiterArtId})`, { expand });
  }

  updateMitarbeiterArten(expand: string | null, mitarbeiterArtId: number | null, mitarbeiterArten: models.MitarbeiterArten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterArtens(${mitarbeiterArtId})`, mitarbeiterArten, item => item.MitarbeiterArtID == mitarbeiterArtId, { expand }, []);
  }

  getMitarbeiterFortbildungens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterFortbildungens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterFortbildungen(expand: string | null, mitarbeiterFortbildungen: models.MitarbeiterFortbildungen | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterFortbildungens`, mitarbeiterFortbildungen, { expand }, ['Dokumente', 'Mitarbeiter', 'MitarbeiterFortbildungenArten']);
  }

  deleteMitarbeiterFortbildungen(mitarbeiterFortbildungId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterFortbildungens(${mitarbeiterFortbildungId})`, item => !(item.MitarbeiterFortbildungID == mitarbeiterFortbildungId));
  }

  getMitarbeiterFortbildungenByMitarbeiterFortbildungId(expand: string | null, mitarbeiterFortbildungId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterFortbildungens(${mitarbeiterFortbildungId})`, { expand });
  }

  updateMitarbeiterFortbildungen(expand: string | null, mitarbeiterFortbildungId: number | null, mitarbeiterFortbildungen: models.MitarbeiterFortbildungen | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterFortbildungens(${mitarbeiterFortbildungId})`, mitarbeiterFortbildungen, item => item.MitarbeiterFortbildungID == mitarbeiterFortbildungId, { expand }, ['Dokumente','Mitarbeiter','MitarbeiterFortbildungenArten']);
  }

  getMitarbeiterFortbildungenArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterFortbildungenArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterFortbildungenArten(expand: string | null, mitarbeiterFortbildungenArten: models.MitarbeiterFortbildungenArten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterFortbildungenArtens`, mitarbeiterFortbildungenArten, { expand }, []);
  }

  deleteMitarbeiterFortbildungenArten(fortbildungArtId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterFortbildungenArtens(${fortbildungArtId})`, item => !(item.FortbildungArtID == fortbildungArtId));
  }

  getMitarbeiterFortbildungenArtenByFortbildungArtId(expand: string | null, fortbildungArtId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterFortbildungenArtens(${fortbildungArtId})`, { expand });
  }

  updateMitarbeiterFortbildungenArten(expand: string | null, fortbildungArtId: number | null, mitarbeiterFortbildungenArten: models.MitarbeiterFortbildungenArten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterFortbildungenArtens(${fortbildungArtId})`, mitarbeiterFortbildungenArten, item => item.FortbildungArtID == fortbildungArtId, { expand }, []);
  }

  getMitarbeiterKundenbudgets(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterKundenbudgets`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterKundenbudget(expand: string | null, mitarbeiterKundenbudget: models.MitarbeiterKundenbudget | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterKundenbudgets`, mitarbeiterKundenbudget, { expand }, ['Mitarbeiter', 'MitarbeiterKundenbudgetKategorien']);
  }

  deleteMitarbeiterKundenbudget(mitarbeiterKundenbudgetId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterKundenbudgets(${mitarbeiterKundenbudgetId})`, item => !(item.MitarbeiterKundenbudgetID == mitarbeiterKundenbudgetId));
  }

  getMitarbeiterKundenbudgetByMitarbeiterKundenbudgetId(expand: string | null, mitarbeiterKundenbudgetId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterKundenbudgets(${mitarbeiterKundenbudgetId})`, { expand });
  }

  updateMitarbeiterKundenbudget(expand: string | null, mitarbeiterKundenbudgetId: number | null, mitarbeiterKundenbudget: models.MitarbeiterKundenbudget | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterKundenbudgets(${mitarbeiterKundenbudgetId})`, mitarbeiterKundenbudget, item => item.MitarbeiterKundenbudgetID == mitarbeiterKundenbudgetId, { expand }, ['Mitarbeiter','MitarbeiterKundenbudgetKategorien']);
  }

  getMitarbeiterKundenbudgetKategoriens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterKundenbudgetKategoriens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterKundenbudgetKategorien(expand: string | null, mitarbeiterKundenbudgetKategorien: models.MitarbeiterKundenbudgetKategorien | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterKundenbudgetKategoriens`, mitarbeiterKundenbudgetKategorien, { expand }, []);
  }

  deleteMitarbeiterKundenbudgetKategorien(kundenbudgetKategorieId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterKundenbudgetKategoriens(${kundenbudgetKategorieId})`, item => !(item.KundenbudgetKategorieID == kundenbudgetKategorieId));
  }

  getMitarbeiterKundenbudgetKategorienByKundenbudgetKategorieId(expand: string | null, kundenbudgetKategorieId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterKundenbudgetKategoriens(${kundenbudgetKategorieId})`, { expand });
  }

  updateMitarbeiterKundenbudgetKategorien(expand: string | null, kundenbudgetKategorieId: number | null, mitarbeiterKundenbudgetKategorien: models.MitarbeiterKundenbudgetKategorien | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterKundenbudgetKategoriens(${kundenbudgetKategorieId})`, mitarbeiterKundenbudgetKategorien, item => item.KundenbudgetKategorieID == kundenbudgetKategorieId, { expand }, []);
  }

  getMitarbeiterStatuses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterStatuses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterStatus(expand: string | null, mitarbeiterStatus: models.MitarbeiterStatus | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterStatuses`, mitarbeiterStatus, { expand }, []);
  }

  deleteMitarbeiterStatus(mitarbeiterStatusId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterStatuses(${mitarbeiterStatusId})`, item => !(item.MitarbeiterStatusID == mitarbeiterStatusId));
  }

  getMitarbeiterStatusByMitarbeiterStatusId(expand: string | null, mitarbeiterStatusId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterStatuses(${mitarbeiterStatusId})`, { expand });
  }

  updateMitarbeiterStatus(expand: string | null, mitarbeiterStatusId: number | null, mitarbeiterStatus: models.MitarbeiterStatus | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterStatuses(${mitarbeiterStatusId})`, mitarbeiterStatus, item => item.MitarbeiterStatusID == mitarbeiterStatusId, { expand }, []);
  }

  getMitarbeiterTaetigkeitens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterTaetigkeitens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterTaetigkeiten(expand: string | null, mitarbeiterTaetigkeiten: models.MitarbeiterTaetigkeiten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterTaetigkeitens`, mitarbeiterTaetigkeiten, { expand }, ['Mitarbeiter', 'MitarbeiterTaetigkeitenArten']);
  }

  deleteMitarbeiterTaetigkeiten(mitarbeiterTaetigkeitenId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterTaetigkeitens(${mitarbeiterTaetigkeitenId})`, item => !(item.MitarbeiterTaetigkeitenID == mitarbeiterTaetigkeitenId));
  }

  getMitarbeiterTaetigkeitenByMitarbeiterTaetigkeitenId(expand: string | null, mitarbeiterTaetigkeitenId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterTaetigkeitens(${mitarbeiterTaetigkeitenId})`, { expand });
  }

  updateMitarbeiterTaetigkeiten(expand: string | null, mitarbeiterTaetigkeitenId: number | null, mitarbeiterTaetigkeiten: models.MitarbeiterTaetigkeiten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterTaetigkeitens(${mitarbeiterTaetigkeitenId})`, mitarbeiterTaetigkeiten, item => item.MitarbeiterTaetigkeitenID == mitarbeiterTaetigkeitenId, { expand }, ['Mitarbeiter','MitarbeiterTaetigkeitenArten']);
  }

  getMitarbeiterTaetigkeitenArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterTaetigkeitenArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterTaetigkeitenArten(expand: string | null, mitarbeiterTaetigkeitenArten: models.MitarbeiterTaetigkeitenArten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterTaetigkeitenArtens`, mitarbeiterTaetigkeitenArten, { expand }, []);
  }

  deleteMitarbeiterTaetigkeitenArten(mitarbeiterTaetigkeitenArtId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterTaetigkeitenArtens(${mitarbeiterTaetigkeitenArtId})`, item => !(item.MitarbeiterTaetigkeitenArtID == mitarbeiterTaetigkeitenArtId));
  }

  getMitarbeiterTaetigkeitenArtenByMitarbeiterTaetigkeitenArtId(expand: string | null, mitarbeiterTaetigkeitenArtId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterTaetigkeitenArtens(${mitarbeiterTaetigkeitenArtId})`, { expand });
  }

  updateMitarbeiterTaetigkeitenArten(expand: string | null, mitarbeiterTaetigkeitenArtId: number | null, mitarbeiterTaetigkeitenArten: models.MitarbeiterTaetigkeitenArten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterTaetigkeitenArtens(${mitarbeiterTaetigkeitenArtId})`, mitarbeiterTaetigkeitenArten, item => item.MitarbeiterTaetigkeitenArtID == mitarbeiterTaetigkeitenArtId, { expand }, []);
  }

  getMitarbeiterUrlaubs(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterUrlaubs`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterUrlaub(expand: string | null, mitarbeiterUrlaub: models.MitarbeiterUrlaub | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterUrlaubs`, mitarbeiterUrlaub, { expand }, ['Mitarbeiter']);
  }

  deleteMitarbeiterUrlaub(mitarbeiterUrlaubId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterUrlaubs(${mitarbeiterUrlaubId})`, item => !(item.MitarbeiterUrlaubID == mitarbeiterUrlaubId));
  }

  getMitarbeiterUrlaubByMitarbeiterUrlaubId(expand: string | null, mitarbeiterUrlaubId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterUrlaubs(${mitarbeiterUrlaubId})`, { expand });
  }

  updateMitarbeiterUrlaub(expand: string | null, mitarbeiterUrlaubId: number | null, mitarbeiterUrlaub: models.MitarbeiterUrlaub | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterUrlaubs(${mitarbeiterUrlaubId})`, mitarbeiterUrlaub, item => item.MitarbeiterUrlaubID == mitarbeiterUrlaubId, { expand }, ['Mitarbeiter']);
  }

  getMitarbeiterUrlaubDetails(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterUrlaubDetails`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterUrlaubDetail(expand: string | null, mitarbeiterUrlaubDetail: models.MitarbeiterUrlaubDetail | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterUrlaubDetails`, mitarbeiterUrlaubDetail, { expand }, ['MitarbeiterUrlaub']);
  }

  deleteMitarbeiterUrlaubDetail(mitarbeiterUrlaubDetailsId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterUrlaubDetails(${mitarbeiterUrlaubDetailsId})`, item => !(item.MitarbeiterUrlaubDetailsID == mitarbeiterUrlaubDetailsId));
  }

  getMitarbeiterUrlaubDetailByMitarbeiterUrlaubDetailsId(expand: string | null, mitarbeiterUrlaubDetailsId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterUrlaubDetails(${mitarbeiterUrlaubDetailsId})`, { expand });
  }

  updateMitarbeiterUrlaubDetail(expand: string | null, mitarbeiterUrlaubDetailsId: number | null, mitarbeiterUrlaubDetail: models.MitarbeiterUrlaubDetail | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterUrlaubDetails(${mitarbeiterUrlaubDetailsId})`, mitarbeiterUrlaubDetail, item => item.MitarbeiterUrlaubDetailsID == mitarbeiterUrlaubDetailsId, { expand }, ['MitarbeiterUrlaub']);
  }

  getMitarbeiterUrlaubKumuliertAnspruches(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterUrlaubKumuliertAnspruches`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterUrlaubKumuliertAnspruch(expand: string | null, mitarbeiterUrlaubKumuliertAnspruch: models.MitarbeiterUrlaubKumuliertAnspruch | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterUrlaubKumuliertAnspruches`, mitarbeiterUrlaubKumuliertAnspruch, { expand }, ['Mitarbeiter']);
  }

  deleteMitarbeiterUrlaubKumuliertAnspruch(mitarbeiterUrlaubKumuliertAnspruchId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterUrlaubKumuliertAnspruches(${mitarbeiterUrlaubKumuliertAnspruchId})`, item => !(item.MitarbeiterUrlaubKumuliertAnspruchID == mitarbeiterUrlaubKumuliertAnspruchId));
  }

  getMitarbeiterUrlaubKumuliertAnspruchByMitarbeiterUrlaubKumuliertAnspruchId(expand: string | null, mitarbeiterUrlaubKumuliertAnspruchId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterUrlaubKumuliertAnspruches(${mitarbeiterUrlaubKumuliertAnspruchId})`, { expand });
  }

  updateMitarbeiterUrlaubKumuliertAnspruch(expand: string | null, mitarbeiterUrlaubKumuliertAnspruchId: number | null, mitarbeiterUrlaubKumuliertAnspruch: models.MitarbeiterUrlaubKumuliertAnspruch | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterUrlaubKumuliertAnspruches(${mitarbeiterUrlaubKumuliertAnspruchId})`, mitarbeiterUrlaubKumuliertAnspruch, item => item.MitarbeiterUrlaubKumuliertAnspruchID == mitarbeiterUrlaubKumuliertAnspruchId, { expand }, ['Mitarbeiter']);
  }

  getMitarbeiterUrlaubKumuliertDienstzeitens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterUrlaubKumuliertDienstzeitens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterUrlaubKumuliertDienstzeiten(expand: string | null, mitarbeiterUrlaubKumuliertDienstzeiten: models.MitarbeiterUrlaubKumuliertDienstzeiten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterUrlaubKumuliertDienstzeitens`, mitarbeiterUrlaubKumuliertDienstzeiten, { expand }, ['Mitarbeiter']);
  }

  deleteMitarbeiterUrlaubKumuliertDienstzeiten(mitarbeiterUrlaubKumuliertDienstzeitenId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterUrlaubKumuliertDienstzeitens(${mitarbeiterUrlaubKumuliertDienstzeitenId})`, item => !(item.MitarbeiterUrlaubKumuliertDienstzeitenID == mitarbeiterUrlaubKumuliertDienstzeitenId));
  }

  getMitarbeiterUrlaubKumuliertDienstzeitenByMitarbeiterUrlaubKumuliertDienstzeitenId(expand: string | null, mitarbeiterUrlaubKumuliertDienstzeitenId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterUrlaubKumuliertDienstzeitens(${mitarbeiterUrlaubKumuliertDienstzeitenId})`, { expand });
  }

  updateMitarbeiterUrlaubKumuliertDienstzeiten(expand: string | null, mitarbeiterUrlaubKumuliertDienstzeitenId: number | null, mitarbeiterUrlaubKumuliertDienstzeiten: models.MitarbeiterUrlaubKumuliertDienstzeiten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterUrlaubKumuliertDienstzeitens(${mitarbeiterUrlaubKumuliertDienstzeitenId})`, mitarbeiterUrlaubKumuliertDienstzeiten, item => item.MitarbeiterUrlaubKumuliertDienstzeitenID == mitarbeiterUrlaubKumuliertDienstzeitenId, { expand }, ['Mitarbeiter']);
  }

  getMitarbeiterVerlaufDienstzeitens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterVerlaufDienstzeitens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterVerlaufDienstzeiten(expand: string | null, mitarbeiterVerlaufDienstzeiten: models.MitarbeiterVerlaufDienstzeiten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterVerlaufDienstzeitens`, mitarbeiterVerlaufDienstzeiten, { expand }, ['Mitarbeiter', 'MitarbeiterVerlaufDienstzeitenArten']);
  }

  deleteMitarbeiterVerlaufDienstzeiten(mitarbeiterVerlaufDienstzeitenId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterVerlaufDienstzeitens(${mitarbeiterVerlaufDienstzeitenId})`, item => !(item.MitarbeiterVerlaufDienstzeitenID == mitarbeiterVerlaufDienstzeitenId));
  }

  getMitarbeiterVerlaufDienstzeitenByMitarbeiterVerlaufDienstzeitenId(expand: string | null, mitarbeiterVerlaufDienstzeitenId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterVerlaufDienstzeitens(${mitarbeiterVerlaufDienstzeitenId})`, { expand });
  }

  updateMitarbeiterVerlaufDienstzeiten(expand: string | null, mitarbeiterVerlaufDienstzeitenId: number | null, mitarbeiterVerlaufDienstzeiten: models.MitarbeiterVerlaufDienstzeiten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterVerlaufDienstzeitens(${mitarbeiterVerlaufDienstzeitenId})`, mitarbeiterVerlaufDienstzeiten, item => item.MitarbeiterVerlaufDienstzeitenID == mitarbeiterVerlaufDienstzeitenId, { expand }, ['Mitarbeiter','MitarbeiterVerlaufDienstzeitenArten']);
  }

  getMitarbeiterVerlaufDienstzeitenArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterVerlaufDienstzeitenArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterVerlaufDienstzeitenArten(expand: string | null, mitarbeiterVerlaufDienstzeitenArten: models.MitarbeiterVerlaufDienstzeitenArten | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterVerlaufDienstzeitenArtens`, mitarbeiterVerlaufDienstzeitenArten, { expand }, []);
  }

  deleteMitarbeiterVerlaufDienstzeitenArten(mitarbeiterVerlaufDienstzeitenArtId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterVerlaufDienstzeitenArtens(${mitarbeiterVerlaufDienstzeitenArtId})`, item => !(item.MitarbeiterVerlaufDienstzeitenArtID == mitarbeiterVerlaufDienstzeitenArtId));
  }

  getMitarbeiterVerlaufDienstzeitenArtenByMitarbeiterVerlaufDienstzeitenArtId(expand: string | null, mitarbeiterVerlaufDienstzeitenArtId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterVerlaufDienstzeitenArtens(${mitarbeiterVerlaufDienstzeitenArtId})`, { expand });
  }

  updateMitarbeiterVerlaufDienstzeitenArten(expand: string | null, mitarbeiterVerlaufDienstzeitenArtId: number | null, mitarbeiterVerlaufDienstzeitenArten: models.MitarbeiterVerlaufDienstzeitenArten | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterVerlaufDienstzeitenArtens(${mitarbeiterVerlaufDienstzeitenArtId})`, mitarbeiterVerlaufDienstzeitenArten, item => item.MitarbeiterVerlaufDienstzeitenArtID == mitarbeiterVerlaufDienstzeitenArtId, { expand }, []);
  }

  getMitarbeiterVerlaufGehalts(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterVerlaufGehalts`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterVerlaufGehalt(expand: string | null, mitarbeiterVerlaufGehalt: models.MitarbeiterVerlaufGehalt | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterVerlaufGehalts`, mitarbeiterVerlaufGehalt, { expand }, ['Mitarbeiter']);
  }

  deleteMitarbeiterVerlaufGehalt(mitarbeiterVerlaufGehaltId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterVerlaufGehalts(${mitarbeiterVerlaufGehaltId})`, item => !(item.MitarbeiterVerlaufGehaltID == mitarbeiterVerlaufGehaltId));
  }

  getMitarbeiterVerlaufGehaltByMitarbeiterVerlaufGehaltId(expand: string | null, mitarbeiterVerlaufGehaltId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterVerlaufGehalts(${mitarbeiterVerlaufGehaltId})`, { expand });
  }

  updateMitarbeiterVerlaufGehalt(expand: string | null, mitarbeiterVerlaufGehaltId: number | null, mitarbeiterVerlaufGehalt: models.MitarbeiterVerlaufGehalt | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterVerlaufGehalts(${mitarbeiterVerlaufGehaltId})`, mitarbeiterVerlaufGehalt, item => item.MitarbeiterVerlaufGehaltID == mitarbeiterVerlaufGehaltId, { expand }, ['Mitarbeiter']);
  }

  getMitarbeiterVerlaufNormalarbeitszeits(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitarbeiterVerlaufNormalarbeitszeits`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitarbeiterVerlaufNormalarbeitszeit(expand: string | null, mitarbeiterVerlaufNormalarbeitszeit: models.MitarbeiterVerlaufNormalarbeitszeit | null) : Observable<any> {
    return this.odata.post(`/MitarbeiterVerlaufNormalarbeitszeits`, mitarbeiterVerlaufNormalarbeitszeit, { expand }, ['Mitarbeiter']);
  }

  deleteMitarbeiterVerlaufNormalarbeitszeit(mitarbeiterVerlaufNormalarbeitszeitId: number | null) : Observable<any> {
    return this.odata.delete(`/MitarbeiterVerlaufNormalarbeitszeits(${mitarbeiterVerlaufNormalarbeitszeitId})`, item => !(item.MitarbeiterVerlaufNormalarbeitszeitID == mitarbeiterVerlaufNormalarbeitszeitId));
  }

  getMitarbeiterVerlaufNormalarbeitszeitByMitarbeiterVerlaufNormalarbeitszeitId(expand: string | null, mitarbeiterVerlaufNormalarbeitszeitId: number | null) : Observable<any> {
    return this.odata.getById(`/MitarbeiterVerlaufNormalarbeitszeits(${mitarbeiterVerlaufNormalarbeitszeitId})`, { expand });
  }

  updateMitarbeiterVerlaufNormalarbeitszeit(expand: string | null, mitarbeiterVerlaufNormalarbeitszeitId: number | null, mitarbeiterVerlaufNormalarbeitszeit: models.MitarbeiterVerlaufNormalarbeitszeit | null) : Observable<any> {
    return this.odata.patch(`/MitarbeiterVerlaufNormalarbeitszeits(${mitarbeiterVerlaufNormalarbeitszeitId})`, mitarbeiterVerlaufNormalarbeitszeit, item => item.MitarbeiterVerlaufNormalarbeitszeitID == mitarbeiterVerlaufNormalarbeitszeitId, { expand }, ['Mitarbeiter']);
  }

  getMitteilungens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Mitteilungens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitteilungen(expand: string | null, mitteilungen: models.Mitteilungen | null) : Observable<any> {
    return this.odata.post(`/Mitteilungens`, mitteilungen, { expand }, ['Base', 'Dokumente']);
  }

  deleteMitteilungen(mitteilungId: number | null) : Observable<any> {
    return this.odata.delete(`/Mitteilungens(${mitteilungId})`, item => !(item.MitteilungID == mitteilungId));
  }

  getMitteilungenByMitteilungId(expand: string | null, mitteilungId: number | null) : Observable<any> {
    return this.odata.getById(`/Mitteilungens(${mitteilungId})`, { expand });
  }

  updateMitteilungen(expand: string | null, mitteilungId: number | null, mitteilungen: models.Mitteilungen | null) : Observable<any> {
    return this.odata.patch(`/Mitteilungens(${mitteilungId})`, mitteilungen, item => item.MitteilungID == mitteilungId, { expand }, ['Base','Dokumente']);
  }

  getMitteilungenVerteilers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/MitteilungenVerteilers`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createMitteilungenVerteiler(expand: string | null, mitteilungenVerteiler: models.MitteilungenVerteiler | null) : Observable<any> {
    return this.odata.post(`/MitteilungenVerteilers`, mitteilungenVerteiler, { expand }, ['Mitteilungen', 'Base']);
  }

  deleteMitteilungenVerteiler(mitteilungVerteilerId: number | null) : Observable<any> {
    return this.odata.delete(`/MitteilungenVerteilers(${mitteilungVerteilerId})`, item => !(item.MitteilungVerteilerID == mitteilungVerteilerId));
  }

  getMitteilungenVerteilerByMitteilungVerteilerId(expand: string | null, mitteilungVerteilerId: number | null) : Observable<any> {
    return this.odata.getById(`/MitteilungenVerteilers(${mitteilungVerteilerId})`, { expand });
  }

  updateMitteilungenVerteiler(expand: string | null, mitteilungVerteilerId: number | null, mitteilungenVerteiler: models.MitteilungenVerteiler | null) : Observable<any> {
    return this.odata.patch(`/MitteilungenVerteilers(${mitteilungVerteilerId})`, mitteilungenVerteiler, item => item.MitteilungVerteilerID == mitteilungVerteilerId, { expand }, ['Mitteilungen','Base']);
  }

  getNotizens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Notizens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createNotizen(expand: string | null, notizen: models.Notizen | null) : Observable<any> {
    return this.odata.post(`/Notizens`, notizen, { expand }, []);
  }

  deleteNotizen(notizId: number | null) : Observable<any> {
    return this.odata.delete(`/Notizens(${notizId})`, item => !(item.NotizID == notizId));
  }

  getNotizenByNotizId(expand: string | null, notizId: number | null) : Observable<any> {
    return this.odata.getById(`/Notizens(${notizId})`, { expand });
  }

  updateNotizen(expand: string | null, notizId: number | null, notizen: models.Notizen | null) : Observable<any> {
    return this.odata.patch(`/Notizens(${notizId})`, notizen, item => item.NotizID == notizId, { expand }, []);
  }

  getPersistedGrants(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/PersistedGrants`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createPersistedGrant(expand: string | null, persistedGrant: models.PersistedGrant | null) : Observable<any> {
    return this.odata.post(`/PersistedGrants`, persistedGrant, { expand }, []);
  }

  deletePersistedGrant(key: string | null) : Observable<any> {
    return this.odata.delete(`/PersistedGrants('${encodeURIComponent(key)}')`, item => !(item.Key == key));
  }

  getPersistedGrantByKey(expand: string | null, key: string | null) : Observable<any> {
    return this.odata.getById(`/PersistedGrants('${encodeURIComponent(key)}')`, { expand });
  }

  updatePersistedGrant(expand: string | null, key: string | null, persistedGrant: models.PersistedGrant | null) : Observable<any> {
    return this.odata.patch(`/PersistedGrants('${encodeURIComponent(key)}')`, persistedGrant, item => item.Key == key, { expand }, []);
  }

  getProtokolls(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Protokolls`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createProtokoll(expand: string | null, protokoll: models.Protokoll | null) : Observable<any> {
    return this.odata.post(`/Protokolls`, protokoll, { expand }, ['Base']);
  }

  deleteProtokoll(protokollId: number | null) : Observable<any> {
    return this.odata.delete(`/Protokolls(${protokollId})`, item => !(item.ProtokollID == protokollId));
  }

  getProtokollByProtokollId(expand: string | null, protokollId: number | null) : Observable<any> {
    return this.odata.getById(`/Protokolls(${protokollId})`, { expand });
  }

  updateProtokoll(expand: string | null, protokollId: number | null, protokoll: models.Protokoll | null) : Observable<any> {
    return this.odata.patch(`/Protokolls(${protokollId})`, protokoll, item => item.ProtokollID == protokollId, { expand }, ['Base']);
  }

  getRegelnAbwesenheitens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/RegelnAbwesenheitens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createRegelnAbwesenheiten(expand: string | null, regelnAbwesenheiten: models.RegelnAbwesenheiten | null) : Observable<any> {
    return this.odata.post(`/RegelnAbwesenheitens`, regelnAbwesenheiten, { expand }, []);
  }

  deleteRegelnAbwesenheiten(regelnAbwesenheitenId: number | null) : Observable<any> {
    return this.odata.delete(`/RegelnAbwesenheitens(${regelnAbwesenheitenId})`, item => !(item.RegelnAbwesenheitenID == regelnAbwesenheitenId));
  }

  getRegelnAbwesenheitenByRegelnAbwesenheitenId(expand: string | null, regelnAbwesenheitenId: number | null) : Observable<any> {
    return this.odata.getById(`/RegelnAbwesenheitens(${regelnAbwesenheitenId})`, { expand });
  }

  updateRegelnAbwesenheiten(expand: string | null, regelnAbwesenheitenId: number | null, regelnAbwesenheiten: models.RegelnAbwesenheiten | null) : Observable<any> {
    return this.odata.patch(`/RegelnAbwesenheitens(${regelnAbwesenheitenId})`, regelnAbwesenheiten, item => item.RegelnAbwesenheitenID == regelnAbwesenheitenId, { expand }, []);
  }

  getVwBaseAlles(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBaseAlles`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBaseKontaktes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBaseKontaktes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBaseOrtes(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBaseOrtes`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBasePlzs(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBasePlzs`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBenutzerBases(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBenutzerBases`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBenutzerRollens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBenutzerRollens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwKundenBetreuers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwKundenBetreuers`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwKundenUndBetreuerAuswahls(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwKundenUndBetreuerAuswahls`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwRollens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwRollens`, { filter, top, skip, orderby, count, expand, format, select });
  }
}
