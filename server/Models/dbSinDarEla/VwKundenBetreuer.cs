using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwKundenBetreuer")]
  public partial class VwKundenBetreuer
  {
    public int KundenID
    {
      get;
      set;
    }
    public string NameGesamtBetreuer
    {
      get;
      set;
    }
    [Key]
    public string Betreuungsart
    {
      get;
      set;
    }
    public string Leistungsart
    {
      get;
      set;
    }
  }
}
