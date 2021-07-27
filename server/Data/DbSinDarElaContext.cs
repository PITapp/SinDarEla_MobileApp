using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using SinDarElaMobile.Models.DbSinDarEla;

namespace SinDarElaMobile.Data
{
    public partial class DbSinDarElaContext : Microsoft.EntityFrameworkCore.DbContext
    {
        private readonly IHttpContextAccessor httpAccessor;

        public DbSinDarElaContext(IHttpContextAccessor httpAccessor, DbContextOptions<DbSinDarElaContext> options):base(options)
        {
            this.httpAccessor = httpAccessor;
        }

        public DbSinDarElaContext(IHttpContextAccessor httpAccessor)
        {
            this.httpAccessor = httpAccessor;
        }

        partial void OnModelBuilding(ModelBuilder builder);

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.AbrechnungKundenReststunden>()
                  .HasOne(i => i.Kunden)
                  .WithMany(i => i.AbrechnungKundenReststundens)
                  .HasForeignKey(i => i.KundenID)
                  .HasPrincipalKey(i => i.KundenID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.AbrechnungKundenReststunden>()
                  .HasOne(i => i.KundenLeistungArten)
                  .WithMany(i => i.AbrechnungKundenReststundens)
                  .HasForeignKey(i => i.KundenLeistungArtID)
                  .HasPrincipalKey(i => i.KundenLeistungArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Aufgaben>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Aufgabens)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Aufgaben>()
                  .HasOne(i => i.Base1)
                  .WithMany(i => i.Aufgabens1)
                  .HasForeignKey(i => i.ZustaendigBaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Base>()
                  .HasOne(i => i.BaseAnreden)
                  .WithMany(i => i.Bases)
                  .HasForeignKey(i => i.AnredeID)
                  .HasPrincipalKey(i => i.AnredeID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.BaseBanken>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.BaseBankens)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.BaseKontakte>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.BaseKontaktes)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.BaseKontakte>()
                  .HasOne(i => i.BaseAnreden)
                  .WithMany(i => i.BaseKontaktes)
                  .HasForeignKey(i => i.AnredeID)
                  .HasPrincipalKey(i => i.AnredeID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Benutzer>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Benutzers)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Dokumente>()
                  .HasOne(i => i.DokumenteKategorien)
                  .WithMany(i => i.Dokumentes)
                  .HasForeignKey(i => i.DokumenteKategorieID)
                  .HasPrincipalKey(i => i.DokumenteKategorieID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Dokumente>()
                  .HasOne(i => i.Kunden)
                  .WithMany(i => i.Dokumentes)
                  .HasForeignKey(i => i.KundenID)
                  .HasPrincipalKey(i => i.KundenID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Dokumente>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.Dokumentes)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Ereignisses)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .HasOne(i => i.EreignisseArten)
                  .WithMany(i => i.Ereignisses)
                  .HasForeignKey(i => i.EreignisArtCode)
                  .HasPrincipalKey(i => i.EreignisArtCode);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .HasOne(i => i.EreignisseSonderurlaubArten)
                  .WithMany(i => i.Ereignisses)
                  .HasForeignKey(i => i.EreignisSonderurlaubArtID)
                  .HasPrincipalKey(i => i.EreignisSonderurlaubArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .HasOne(i => i.Kunden)
                  .WithMany(i => i.Ereignisses)
                  .HasForeignKey(i => i.KundenID)
                  .HasPrincipalKey(i => i.KundenID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .HasOne(i => i.KundenLeistungArten)
                  .WithMany(i => i.Ereignisses)
                  .HasForeignKey(i => i.KundenLeistungArtID)
                  .HasPrincipalKey(i => i.KundenLeistungArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmer>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.EreignisseTeilnehmers)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmer>()
                  .HasOne(i => i.Ereignisse)
                  .WithMany(i => i.EreignisseTeilnehmers)
                  .HasForeignKey(i => i.EreignisID)
                  .HasPrincipalKey(i => i.EreignisID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmer>()
                  .HasOne(i => i.EreignisseTeilnehmerStatus)
                  .WithMany(i => i.EreignisseTeilnehmers)
                  .HasForeignKey(i => i.StatusCode)
                  .HasPrincipalKey(i => i.StatusCode);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Feedback>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Feedbacks)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Kunden>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Kundens)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Kunden>()
                  .HasOne(i => i.KundenStatus)
                  .WithMany(i => i.Kundens)
                  .HasForeignKey(i => i.KundenStatusID)
                  .HasPrincipalKey(i => i.KundenStatusID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenInfo>()
                  .HasOne(i => i.Kunden)
                  .WithMany(i => i.KundenInfos)
                  .HasForeignKey(i => i.KundenID)
                  .HasPrincipalKey(i => i.KundenID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenKontakte>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.KundenKontaktes)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenKontakte>()
                  .HasOne(i => i.Kunden)
                  .WithMany(i => i.KundenKontaktes)
                  .HasForeignKey(i => i.KundenID)
                  .HasPrincipalKey(i => i.KundenID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenKontakte>()
                  .HasOne(i => i.KundenKontakteArten)
                  .WithMany(i => i.KundenKontaktes)
                  .HasForeignKey(i => i.KundenKontaktArtID)
                  .HasPrincipalKey(i => i.KundenKontaktArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungen>()
                  .HasOne(i => i.Kunden)
                  .WithMany(i => i.KundenLeistungens)
                  .HasForeignKey(i => i.KundenID)
                  .HasPrincipalKey(i => i.KundenID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungen>()
                  .HasOne(i => i.KundenLeistungArten)
                  .WithMany(i => i.KundenLeistungens)
                  .HasForeignKey(i => i.KundenLeistungArtID)
                  .HasPrincipalKey(i => i.KundenLeistungArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheide>()
                  .HasOne(i => i.KundenKontakte)
                  .WithMany(i => i.KundenLeistungenBescheides)
                  .HasForeignKey(i => i.KundenKontaktID)
                  .HasPrincipalKey(i => i.KundenKontaktID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheide>()
                  .HasOne(i => i.KundenLeistungen)
                  .WithMany(i => i.KundenLeistungenBescheides)
                  .HasForeignKey(i => i.KundenLeistungID)
                  .HasPrincipalKey(i => i.KundenLeistungID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheide>()
                  .HasOne(i => i.KundenLeistungenBescheideStatus)
                  .WithMany(i => i.KundenLeistungenBescheides)
                  .HasForeignKey(i => i.StatusCode)
                  .HasPrincipalKey(i => i.StatusCode);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheideKontingente>()
                  .HasOne(i => i.KundenLeistungenBescheide)
                  .WithMany(i => i.KundenLeistungenBescheideKontingentes)
                  .HasForeignKey(i => i.KundenLeistungenBescheidID)
                  .HasPrincipalKey(i => i.KundenLeistungenBescheidID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuer>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.KundenLeistungenBetreuers)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuer>()
                  .HasOne(i => i.KundenLeistungenBetreuerArten)
                  .WithMany(i => i.KundenLeistungenBetreuers)
                  .HasForeignKey(i => i.KundenLeistungenBetreuerArtID)
                  .HasPrincipalKey(i => i.KundenLeistungenBetreuerArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuer>()
                  .HasOne(i => i.KundenLeistungen)
                  .WithMany(i => i.KundenLeistungenBetreuers)
                  .HasForeignKey(i => i.KundenLeistungID)
                  .HasPrincipalKey(i => i.KundenLeistungID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Mitarbeiter>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Mitarbeiters)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Mitarbeiter>()
                  .HasOne(i => i.MitarbeiterArten)
                  .WithMany(i => i.Mitarbeiters)
                  .HasForeignKey(i => i.MitarbeiterArtID)
                  .HasPrincipalKey(i => i.MitarbeiterArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Mitarbeiter>()
                  .HasOne(i => i.MitarbeiterStatus)
                  .WithMany(i => i.Mitarbeiters)
                  .HasForeignKey(i => i.MitarbeiterStatusID)
                  .HasPrincipalKey(i => i.MitarbeiterStatusID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungen>()
                  .HasOne(i => i.Dokumente)
                  .WithMany(i => i.MitarbeiterFortbildungens)
                  .HasForeignKey(i => i.DokumentID)
                  .HasPrincipalKey(i => i.DokumentID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungen>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterFortbildungens)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungen>()
                  .HasOne(i => i.MitarbeiterFortbildungenArten)
                  .WithMany(i => i.MitarbeiterFortbildungens)
                  .HasForeignKey(i => i.FortbildungArtID)
                  .HasPrincipalKey(i => i.FortbildungArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterInfo>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterInfos)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterKundenbudget>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterKundenbudgets)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterKundenbudget>()
                  .HasOne(i => i.MitarbeiterKundenbudgetKategorien)
                  .WithMany(i => i.MitarbeiterKundenbudgets)
                  .HasForeignKey(i => i.KundenbudgetKategorieID)
                  .HasPrincipalKey(i => i.KundenbudgetKategorieID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterTaetigkeiten>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterTaetigkeitens)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterTaetigkeiten>()
                  .HasOne(i => i.MitarbeiterTaetigkeitenArten)
                  .WithMany(i => i.MitarbeiterTaetigkeitens)
                  .HasForeignKey(i => i.MitarbeiterTaetigkeitenArtID)
                  .HasPrincipalKey(i => i.MitarbeiterTaetigkeitenArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaub>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterUrlaubs)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubDetail>()
                  .HasOne(i => i.MitarbeiterUrlaub)
                  .WithMany(i => i.MitarbeiterUrlaubDetails)
                  .HasForeignKey(i => i.MitarbeiterUrlaubID)
                  .HasPrincipalKey(i => i.MitarbeiterUrlaubID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubKumuliertAnspruch>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterUrlaubKumuliertAnspruches)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubKumuliertDienstzeiten>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterUrlaubKumuliertDienstzeitens)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeiten>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterVerlaufDienstzeitens)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeiten>()
                  .HasOne(i => i.MitarbeiterVerlaufDienstzeitenArten)
                  .WithMany(i => i.MitarbeiterVerlaufDienstzeitens)
                  .HasForeignKey(i => i.MitarbeiterVerlaufDienstzeitenArtID)
                  .HasPrincipalKey(i => i.MitarbeiterVerlaufDienstzeitenArtID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufGehalt>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterVerlaufGehalts)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufNormalarbeitszeit>()
                  .HasOne(i => i.Mitarbeiter)
                  .WithMany(i => i.MitarbeiterVerlaufNormalarbeitszeits)
                  .HasForeignKey(i => i.MitarbeiterID)
                  .HasPrincipalKey(i => i.MitarbeiterID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Mitteilungen>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Mitteilungens)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Mitteilungen>()
                  .HasOne(i => i.Dokumente)
                  .WithMany(i => i.Mitteilungens)
                  .HasForeignKey(i => i.DokumentID)
                  .HasPrincipalKey(i => i.DokumentID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitteilungenVerteiler>()
                  .HasOne(i => i.Mitteilungen)
                  .WithMany(i => i.MitteilungenVerteilers)
                  .HasForeignKey(i => i.MitteilungID)
                  .HasPrincipalKey(i => i.MitteilungID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitteilungenVerteiler>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.MitteilungenVerteilers)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);
            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Protokoll>()
                  .HasOne(i => i.Base)
                  .WithMany(i => i.Protokolls)
                  .HasForeignKey(i => i.BaseID)
                  .HasPrincipalKey(i => i.BaseID);

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.AbrechnungBasis>()
                  .Property(p => p.Gesperrt)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Aufgaben>()
                  .Property(p => p.Erledigt)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.StatusAntrag)
                  .HasDefaultValueSql("Offen");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.Gesperrt)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.GefuehlSituation01)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.GefuehlSituation02)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.GefuehlSituation03)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.GefuehlSituation04)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.GefuehlSituation05)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.GefuehlSituation06)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.KundenFahrtMinuten)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.KundenFahrtKM)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.BetreuerAnAbReiseMinuten)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Ereignisse>()
                  .Property(p => p.BetreuerAnAbReiseKM)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>()
                  .Property(p => p.TerminGanzerTag)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>()
                  .Property(p => p.Beantragungspflicht)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>()
                  .Property(p => p.Begruendungspflicht)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>()
                  .Property(p => p.TeilnehmerErfassen)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>()
                  .Property(p => p.TermineDienstplan)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten>()
                  .Property(p => p.TermineManagement)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Feedback>()
                  .Property(p => p.Erledigt)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheide>()
                  .Property(p => p.Ergaenzungsbescheid)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeiten>()
                  .Property(p => p.AnrechnungGehalt)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeiten>()
                  .Property(p => p.AnrechnungUrlaub)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeitenArten>()
                  .Property(p => p.DienstzeitRechnen)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.MitteilungenVerteiler>()
                  .Property(p => p.Gelesen)
                  .HasDefaultValueSql("0");

            builder.Entity<SinDarElaMobile.Models.DbSinDarEla.Protokoll>()
                  .Property(p => p.Gelesen)
                  .HasDefaultValueSql("0");

            this.OnModelBuilding(builder);
        }


        public DbSet<SinDarElaMobile.Models.DbSinDarEla.AbrechnungBasis> AbrechnungBases
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.AbrechnungKundenReststunden> AbrechnungKundenReststundens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Aufgaben> Aufgabens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.AuswahlJahr> AuswahlJahrs
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.AuswahlMonat> AuswahlMonats
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Base> Bases
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.BaseAnreden> BaseAnredens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.BaseBanken> BaseBankens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.BaseKontakte> BaseKontaktes
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Benutzer> Benutzers
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Debugg> Debuggs
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Dokumente> Dokumentes
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.DokumenteKategorien> DokumenteKategoriens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Ereignisse> Ereignisses
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.EreignisseArten> EreignisseArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.EreignisseSonderurlaubArten> EreignisseSonderurlaubArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmer> EreignisseTeilnehmers
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.EreignisseTeilnehmerStatus> EreignisseTeilnehmerStatuses
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Feedback> Feedbacks
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.InfotexteHtml> InfotexteHtmls
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Kunden> Kundens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenInfo> KundenInfos
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenKontakte> KundenKontaktes
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenKontakteArten> KundenKontakteArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungArten> KundenLeistungArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungen> KundenLeistungens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheide> KundenLeistungenBescheides
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheideKontingente> KundenLeistungenBescheideKontingentes
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBescheideStatus> KundenLeistungenBescheideStatuses
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuer> KundenLeistungenBetreuers
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenLeistungenBetreuerArten> KundenLeistungenBetreuerArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.KundenStatus> KundenStatuses
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Mitarbeiter> Mitarbeiters
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterArten> MitarbeiterArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungen> MitarbeiterFortbildungens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterFortbildungenArten> MitarbeiterFortbildungenArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterInfo> MitarbeiterInfos
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterKundenbudget> MitarbeiterKundenbudgets
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterKundenbudgetKategorien> MitarbeiterKundenbudgetKategoriens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterStatus> MitarbeiterStatuses
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterTaetigkeiten> MitarbeiterTaetigkeitens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterTaetigkeitenArten> MitarbeiterTaetigkeitenArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaub> MitarbeiterUrlaubs
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubDetail> MitarbeiterUrlaubDetails
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubKumuliertAnspruch> MitarbeiterUrlaubKumuliertAnspruches
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterUrlaubKumuliertDienstzeiten> MitarbeiterUrlaubKumuliertDienstzeitens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeiten> MitarbeiterVerlaufDienstzeitens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufDienstzeitenArten> MitarbeiterVerlaufDienstzeitenArtens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufGehalt> MitarbeiterVerlaufGehalts
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitarbeiterVerlaufNormalarbeitszeit> MitarbeiterVerlaufNormalarbeitszeits
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Mitteilungen> Mitteilungens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.MitteilungenVerteiler> MitteilungenVerteilers
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.Protokoll> Protokolls
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.RegelnAbwesenheiten> RegelnAbwesenheitens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.VwBenutzerRollen> VwBenutzerRollens
        {
          get;
          set;
        }

        public DbSet<SinDarElaMobile.Models.DbSinDarEla.VwRollen> VwRollens
        {
          get;
          set;
        }
    }
}
