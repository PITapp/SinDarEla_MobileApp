using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwMitarbeiterKundenbudgetSummenJahrKategorien")]
  public partial class VwMitarbeiterKundenbudgetSummenJahrKategorien
  {
    [Key]
    public int MitarbeiterID
    {
      get;
      set;
    }
    public int? Jahr
    {
      get;
      set;
    }
    public string Titel
    {
      get;
      set;
    }
    public int? Sortierung
    {
      get;
      set;
    }
    public double? SummeBetrag
    {
      get;
      set;
    }
  }
}
