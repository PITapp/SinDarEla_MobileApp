using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwMitarbeiterAuswahlDashboard")]
  public partial class VwMitarbeiterAuswahlDashboard
  {
    public int MitarbeiterID
    {
      get;
      set;
    }
    [Key]
    public int ZustaendigBaseID
    {
      get;
      set;
    }
    public string NameGesamt
    {
      get;
      set;
    }
  }
}
