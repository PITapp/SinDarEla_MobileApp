using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwMitarbeiterKundenbudgetSummenJahr")]
  public partial class VwMitarbeiterKundenbudgetSummenJahr
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
    public double? SummeBetrag
    {
      get;
      set;
    }
  }
}
